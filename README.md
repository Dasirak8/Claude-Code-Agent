# CupIQ 2026

**World Cup 2026 Command Center**

CupIQ 2026 is an unofficial analytics, stats, dashboard, and prediction app for the 2026 FIFA World Cup. Built as an investor-demo MVP with local mock data — no live or paid APIs are connected yet.

> Unofficial football analytics app. Not affiliated with FIFA.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- React + TypeScript
- Tailwind CSS
- Recharts
- Lucide React icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Other commands:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # run ESLint
```

## Project Structure

```
app/                Routes (dashboard, matches, groups, bracket, teams, players, predictions)
components/          Reusable UI (Layout, Sidebar, Header, StatCard, SectionHeader, EmptyState)
data/                Local mock data (matches, teams, players, groups, bracket)
types/               Shared TypeScript types
lib/                 Utility helpers
```

## Notes

- All data is local mock data for demo purposes — no live scores or paid APIs.
- No FIFA logos, marks, or official branding are used anywhere in the app.
