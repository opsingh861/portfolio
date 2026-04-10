# Aditya Dhanraj — Portfolio

Personal portfolio website — Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + custom CSS variables
- **Animations**: Framer Motion
- **Content**: `portfolio.config.ts` — single source of truth for all content
- **APIs**: GitHub GraphQL, Anthropic Claude (AI chat), Resend (emails)
- **Analytics**: Google Analytics 4, Microsoft Clarity, Vercel Analytics + Speed Insights
- **Hosting**: Vercel

---

## Getting Started

```bash
npm install
# copy the env template and fill in your keys
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Add these in your Vercel dashboard under **Settings → Environment Variables**.

| Variable | Required | Purpose |
|---|---|---|
| `GITHUB_TOKEN` | Yes | GitHub GraphQL API for contributions + pinned repos |
| `NEXT_PUBLIC_GITHUB_USERNAME` | Yes | Your GitHub username (e.g. `opsingh861`) |
| `NEXT_PUBLIC_URL` | Yes (prod) | Your deployment URL (e.g. `https://aditya-dhanraj.is-a.dev`) |
| `ANTHROPIC_API_KEY` | Optional | AI chat widget (Claude Haiku) |
| `RESEND_API_KEY` | Optional | All outgoing emails (contact form + visitor notifications + leads) |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_CLARITY_ID` | Optional | Microsoft Clarity project ID (e.g. `w9pmqgh00z`) |

> If `RESEND_API_KEY` is not set, visitor notifications and lead emails are logged to the console instead — useful during local development.

---

## Analytics Setup

This portfolio has a full, free analytics stack. Here's what each layer does and where to find the data.

### 1. Google Analytics 4 — Traffic & Audience
- **Dashboard**: [analytics.google.com](https://analytics.google.com)
- **Setup**: Create a GA4 property → get Measurement ID → set `NEXT_PUBLIC_GA_ID` in Vercel
- **What you get**:
  - Visitor demographics (country, city, device, browser, language)
  - Traffic sources (organic, referral, direct, campaign)
  - Real-time active user count
  - UTM campaign attribution reports
  - 14 months data retention
  - Google Search Console integration (which keywords bring visitors)

### 2. Microsoft Clarity — Behavioral
- **Dashboard**: [clarity.microsoft.com](https://clarity.microsoft.com)
- **Setup**: Create a project → get project ID → set `NEXT_PUBLIC_CLARITY_ID` in Vercel
- **What you get**:
  - Session recordings (watch exactly what each visitor does)
  - Heatmaps (where people click, scroll, hover)
  - Rage clicks and dead click detection
  - Unlimited free sessions, 13 months retention

### 3. Vercel Analytics + Speed Insights — Performance
- **Dashboard**: Vercel project → Analytics / Speed Insights tabs
- **Setup**: Zero config — already active
- **What you get**:
  - Page views and unique visitors
  - Core Web Vitals (LCP, CLS, TTFB, INP) per page
  - Performance scoring

### 4. Real-Time Visitor Email Notifications
- **How it works**: When someone visits the site for the first time in a session, a background request is sent to `/api/analytics/track`. This extracts their city, country, referrer, user-agent, and any UTM params, then emails you via Resend.
- **Rate limiting**: Maximum 1 email per IP per 30 minutes — prevents spam from bots or repeated visits.
- **Email subject example**: `Portfolio Visitor: Bangalore, India via linkedin (meta_sde2)`
- **Requires**: `RESEND_API_KEY` set in Vercel

### 5. UTM Tracking — Per-Company Attribution
Use unique links when applying to jobs. This tells you exactly which company or recruiter visited.

```
# Format
https://aditya-dhanraj.is-a.dev?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=COMPANY_ROLE

# Examples
https://aditya-dhanraj.is-a.dev?utm_source=linkedin&utm_medium=job_portal&utm_campaign=meta_sde2
https://aditya-dhanraj.is-a.dev?utm_source=naukri&utm_medium=job_portal&utm_campaign=google_l4
https://aditya-dhanraj.is-a.dev?utm_source=recruiter_email&utm_medium=email&utm_campaign=amazon_sde3&utm_content=john_smith
```

UTM params are automatically captured and:
- Passed to Google Analytics (appear in **Acquisition → Traffic acquisition** report)
- Included in the visitor notification email
- Included in any lead capture email

### 6. Lead Capture Popup
- A slide-up banner appears after 15 seconds or after scrolling 60% of the page.
- Asks for the visitor's email voluntarily ("Interested in working together?")
- Once dismissed or submitted, never shows again (stored in `localStorage`)
- On submit, you get an email via Resend with the visitor's email and UTM data

---

## Updating Content

**All content lives in `portfolio.config.ts`** — edit this one file to update everything.

| What to update | Where in config |
|---|---|
| Bio, headline, location | `meta{}` |
| New job | `experience[]` |
| New project | `projects[]` |
| New certification / achievement | `certifications[]` |
| LinkedIn post highlight | `linkedinPosts[]` |
| New skill | `skills{}` |
| Toggle "Open to Work" badge | `openToWork: true/false` |

After editing, `git push` → Vercel auto-deploys in ~30s.

---

## Deployment Checklist

1. Push repo to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Set all environment variables in Vercel dashboard
4. Add custom domain
5. Place `Aditya_Dhanraj_Resume.pdf` in `/public/`
6. Add `og-image.png` (1200×630px) in `/public/`
7. After first deploy, verify:
   - Visit the site → check you receive a visitor notification email
   - Check Clarity dashboard for first session recording (can take ~30 min)
   - Check GA4 Real-time report for active user

