import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "opsingh861";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const QUERY = `
query {
  user(login: "${GITHUB_USERNAME}") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
        }
      }
    }
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub token not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const data = await res.json();

    if (data.errors) {
      throw new Error(data.errors[0]?.message || "GitHub GraphQL error");
    }

    return NextResponse.json(data.data);
  } catch (err) {
    console.error("GitHub API fetch failed:", err);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
