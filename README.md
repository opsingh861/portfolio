# Aditya Dhanraj — Portfolio

Personal portfolio website for Aditya Dhanraj — Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + custom CSS variables
- **Animations**: Framer Motion
- **Content**: `portfolio.config.ts` — single file for all content
- **APIs**: GitHub GraphQL, Anthropic Claude (AI chat), Resend (contact)
- **Hosting**: Vercel

## Getting Started

```bash
npm install
cp .env.local.example .env.local
# Fill in your API keys in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `GITHUB_TOKEN` | Yes | GitHub GraphQL API for contributions + pinned repos |
| `NEXT_PUBLIC_GITHUB_USERNAME` | Yes | Your GitHub username |
| `ANTHROPIC_API_KEY` | Optional | AI chat widget (Claude Haiku) |
| `RESEND_API_KEY` | Optional | Contact form emails |
| `NEXT_PUBLIC_URL` | Yes (prod) | Your deployment URL for server-side GitHub fetch |

## Updating Content

**All content lives in `portfolio.config.ts`** — edit this file to update anything.

| What to update | Where |
|---|---|
| New job | `experience[]` |
| New project | `projects[]` |
| New certification | `certifications[]` |
| LinkedIn post highlight | `linkedinPosts[]` |
| New skill | `skills{}` |
| Toggle "Open to Work" | `openToWork: true/false` |

After editing, just `git push` — Vercel auto-deploys in ~30s.

## Deployment

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Add custom domain
5. Place `Aditya_Dhanraj_Resume.pdf` in `/public/`
6. Add `og-image.png` (1200×630px) in `/public/`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
