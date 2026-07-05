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
components/          Reusable UI (Layout, Sidebar, Header, StatCard, SectionHeader, EmptyState,
                      DataStatusBadge, DataDisclaimer)
data/                Local mock data (matches, teams, players, groups, bracket, tournamentMeta)
types/               Shared TypeScript types
lib/                 Utility helpers
```

## Data Accuracy Notice

CupIQ 2026 is currently an **MVP built entirely on local demo data**. It is **not** an official
World Cup data product and is not affiliated with FIFA.

- Every match, score, group standing, bracket result, and player stat in this build is
  illustrative/fabricated demo data, generated for product visualization only.
- No real live scores, verified results, or real player statistics are shown. Where a match
  appears "live" in the UI, it is a simulated demo state, clearly labeled as such.
- `/data/tournamentMeta.ts` centralizes the current data mode (`"demo"` or `"verified"`) and the
  disclaimer text shown throughout the app via the `DataStatusBadge` and `DataDisclaimer`
  components. Every page displays a visible "MVP Demo Data" badge near its header.
- Mock data files are intentionally kept separate inside `/data` (one file per domain) so they
  can be swapped for real data sources without touching UI code.

### Future Integration Notes

To move from demo to verified data, a future iteration would conceptually need:

- An official match schedule / results source for fixtures, scores, and standings.
- A licensed football data provider for verified live scores, group tables, brackets, and player
  statistics (this app does not scrape or hardcode unverified third-party data).
- A normalized API client layer under `/lib` (e.g. `lib/api/`) that fetches and shapes data behind
  the same `Match`, `Team`, `Player`, `Group`, and `BracketMatch` types already defined in
  `/types`, so pages don't need to change.
- Replacing the static `/data/mock*.ts` imports with server-side data fetching (e.g. Route
  Handlers or server components calling the API client), and flipping `dataMode` in
  `tournamentMeta.ts` to `"verified"` once a source is confirmed reliable.

## Notes

- All data is local mock data for demo purposes — no live scores or paid APIs.
- No FIFA logos, marks, or official branding are used anywhere in the app.
