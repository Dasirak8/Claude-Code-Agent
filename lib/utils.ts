import { clsx, type ClassValue } from "clsx";
import { mockTeams } from "@/data/mockTeams";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getTeam(teamId: string | null) {
  if (!teamId) return undefined;
  return mockTeams.find((team) => team.id === teamId);
}

export function formatMatchDate(date: string, time: string) {
  const parsed = new Date(`${date}T${time}:00`);
  return parsed.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}
