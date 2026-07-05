export type DataMode = "demo" | "verified";

export const tournamentName = "World Cup 2026";
export const appName = "CupIQ 2026";

export const dataMode: DataMode = "demo";

export const dataLabel =
  dataMode === "demo" ? "MVP Demo Data" : "Verified Data";

export const lastUpdated = "2026-07-05";

export const dataDisclaimer =
  "This MVP currently uses demo data for product visualization. Live official results and statistics will require integration with a licensed sports data provider.";
