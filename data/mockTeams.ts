import { Team } from "@/types";

// Demo roster of illustrative squads for MVP visualization. Group assignments
// and rankings are fabricated demo values, not the verified official draw.
export const mockTeams: Team[] = [
  { id: "usa", name: "United States", shortName: "USA", code: "USA", confederation: "CONCACAF", group: "A", flagColor: "#3b82f6", ranking: 11, form: ["W", "W", "D"] },
  { id: "mex", name: "Mexico", shortName: "Mexico", code: "MEX", confederation: "CONCACAF", group: "A", flagColor: "#22d3a5", ranking: 15, form: ["W", "D", "W"] },
  { id: "can", name: "Canada", shortName: "Canada", code: "CAN", confederation: "CONCACAF", group: "A", flagColor: "#ef4444", ranking: 26, form: ["D", "W", "L"] },
  { id: "jpn", name: "Japan", shortName: "Japan", code: "JPN", confederation: "AFC", group: "A", flagColor: "#a855f7", ranking: 17, form: ["W", "W", "W"] },
  { id: "bra", name: "Brazil", shortName: "Brazil", code: "BRA", confederation: "CONMEBOL", group: "B", flagColor: "#eab308", ranking: 3, form: ["W", "W", "D"] },
  { id: "arg", name: "Argentina", shortName: "Argentina", code: "ARG", confederation: "CONMEBOL", group: "B", flagColor: "#38bdf8", ranking: 1, form: ["W", "W", "W"] },
  { id: "fra", name: "France", shortName: "France", code: "FRA", confederation: "UEFA", group: "B", flagColor: "#3b82f6", ranking: 2, form: ["W", "D", "W"] },
  { id: "ger", name: "Germany", shortName: "Germany", code: "GER", confederation: "UEFA", group: "B", flagColor: "#f5f5f5", ranking: 9, form: ["D", "W", "L"] },
  { id: "eng", name: "England", shortName: "England", code: "ENG", confederation: "UEFA", group: "C", flagColor: "#ef4444", ranking: 4, form: ["W", "W", "D"] },
  { id: "esp", name: "Spain", shortName: "Spain", code: "ESP", confederation: "UEFA", group: "C", flagColor: "#f97316", ranking: 5, form: ["W", "W", "W"] },
  { id: "por", name: "Portugal", shortName: "Portugal", code: "POR", confederation: "UEFA", group: "C", flagColor: "#22c55e", ranking: 6, form: ["W", "D", "D"] },
  { id: "mar", name: "Morocco", shortName: "Morocco", code: "MAR", confederation: "CAF", group: "C", flagColor: "#dc2626", ranking: 12, form: ["W", "L", "W"] },
  { id: "ned", name: "Netherlands", shortName: "Netherlands", code: "NED", confederation: "UEFA", group: "D", flagColor: "#f97316", ranking: 7, form: ["D", "W", "W"] },
  { id: "bel", name: "Belgium", shortName: "Belgium", code: "BEL", confederation: "UEFA", group: "D", flagColor: "#1f2937", ranking: 8, form: ["W", "L", "D"] },
  { id: "sen", name: "Senegal", shortName: "Senegal", code: "SEN", confederation: "CAF", group: "D", flagColor: "#22c55e", ranking: 18, form: ["L", "W", "W"] },
  { id: "kor", name: "South Korea", shortName: "South Korea", code: "KOR", confederation: "AFC", group: "D", flagColor: "#3b82f6", ranking: 22, form: ["D", "D", "W"] },
];
