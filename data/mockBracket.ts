import { BracketMatch } from "@/types";

export const mockBracket: BracketMatch[] = [
  { id: "r32-1", round: "Round of 32", homeTeamId: "usa", awayTeamId: "jpn", homeScore: null, awayScore: null, winnerTeamId: null, slot: 1 },
  { id: "r32-2", round: "Round of 32", homeTeamId: "bra", awayTeamId: "ger", homeScore: 3, awayScore: 0, winnerTeamId: "bra", slot: 2 },
  { id: "r32-3", round: "Round of 32", homeTeamId: "eng", awayTeamId: "mar", homeScore: null, awayScore: null, winnerTeamId: null, slot: 3 },
  { id: "r32-4", round: "Round of 32", homeTeamId: "ned", awayTeamId: "sen", homeScore: null, awayScore: null, winnerTeamId: null, slot: 4 },

  { id: "r16-1", round: "Round of 16", homeTeamId: null, awayTeamId: "bra", homeScore: null, awayScore: null, winnerTeamId: null, slot: 1 },
  { id: "r16-2", round: "Round of 16", homeTeamId: null, awayTeamId: null, homeScore: null, awayScore: null, winnerTeamId: null, slot: 2 },

  { id: "qf-1", round: "Quarterfinal", homeTeamId: null, awayTeamId: null, homeScore: null, awayScore: null, winnerTeamId: null, slot: 1 },

  { id: "sf-1", round: "Semifinal", homeTeamId: null, awayTeamId: null, homeScore: null, awayScore: null, winnerTeamId: null, slot: 1 },

  { id: "final", round: "Final", homeTeamId: null, awayTeamId: null, homeScore: null, awayScore: null, winnerTeamId: null, slot: 1 },
];
