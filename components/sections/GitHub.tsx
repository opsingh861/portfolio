import { portfolioConfig } from "@/portfolio.config";
import GitHubClient from "@/components/sections/GitHubClient";

interface Repo {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: { name: string; color: string } | null;
}

interface GitHubData {
  user: {
    pinnedItems: { nodes: Repo[] };
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: {
          contributionDays: { contributionCount: number; date: string }[];
        }[];
      };
    };
  };
}

async function getGitHubData(): Promise<GitHubData | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/github`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function GitHub() {
  const data = await getGitHubData();
  const calendar = data?.user?.contributionsCollection?.contributionCalendar ?? null;
  const pinnedRepos = data?.user?.pinnedItems?.nodes ?? [];

  return (
    <GitHubClient
      calendar={calendar}
      pinnedRepos={pinnedRepos}
      githubUrl={portfolioConfig.meta.github}
    />
  );
}
