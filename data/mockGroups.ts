import { Group } from "@/types";

export const mockGroups: Group[] = [
  {
    id: "A",
    name: "Group A",
    teamIds: ["usa", "mex", "can", "jpn"],
    standings: [
      { teamId: "usa", played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 3, points: 3 },
      { teamId: "jpn", played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 2, points: 4 },
      { teamId: "can", played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 4, points: 1 },
      { teamId: "mex", played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 3, points: 0 },
    ],
  },
  {
    id: "B",
    name: "Group B",
    teamIds: ["bra", "arg", "fra", "ger"],
    standings: [
      { teamId: "bra", played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 1, points: 6 },
      { teamId: "arg", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 },
      { teamId: "fra", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 },
      { teamId: "ger", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 3, points: 0 },
    ],
  },
  {
    id: "C",
    name: "Group C",
    teamIds: ["eng", "esp", "por", "mar"],
    standings: [
      { teamId: "esp", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 0, points: 3 },
      { teamId: "eng", played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 },
      { teamId: "por", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
      { teamId: "mar", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 2, points: 0 },
    ],
  },
  {
    id: "D",
    name: "Group D",
    teamIds: ["ned", "bel", "sen", "kor"],
    standings: [
      { teamId: "ned", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 1, points: 3 },
      { teamId: "kor", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 1, goalsAgainst: 0, points: 3 },
      { teamId: "bel", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 2, points: 0 },
      { teamId: "sen", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 1, points: 0 },
    ],
  },
];
