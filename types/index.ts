export type Confederation =
  | "UEFA"
  | "CONMEBOL"
  | "CONCACAF"
  | "CAF"
  | "AFC"
  | "OFC";

export interface Team {
  id: string;
  name: string;
  shortName: string;
  code: string;
  confederation: Confederation;
  group: string;
  flagColor: string;
  ranking: number;
  form: ("W" | "D" | "L")[];
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  position: "GK" | "DF" | "MF" | "FW";
  number: number;
  age: number;
  goals: number;
  assists: number;
  rating: number;
}

export type MatchStatus = "upcoming" | "live" | "finished";

export interface MatchEvent {
  minute: number;
  type: "goal" | "yellow" | "red" | "sub";
  team: "home" | "away";
  description: string;
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number | null;
  awayScore: number | null;
  status: MatchStatus;
  stage: string;
  group?: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  minute?: number;
  events?: MatchEvent[];
}

export interface GroupStanding {
  teamId: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface Group {
  id: string;
  name: string;
  teamIds: string[];
  standings: GroupStanding[];
}

export interface BracketMatch {
  id: string;
  round: string;
  homeTeamId: string | null;
  awayTeamId: string | null;
  homeScore: number | null;
  awayScore: number | null;
  winnerTeamId: string | null;
  slot: number;
}

export interface Prediction {
  matchId: string;
  predictedWinnerId: string | null;
  confidence: number;
}
