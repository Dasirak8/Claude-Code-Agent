import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { mockMatches } from "@/data/mockMatches";
import { getTeam, formatMatchDate } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  live: "bg-accent-green/15 text-accent-green",
  upcoming: "bg-accent-blue/15 text-accent-blue",
  finished: "bg-slate-500/15 text-slate-400",
};

export default function MatchesPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Live Matches"
        subtitle="All group stage fixtures and results"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockMatches.map((match) => {
          const home = getTeam(match.homeTeamId);
          const away = getTeam(match.awayTeamId);
          return (
            <Link
              key={match.id}
              href={`/matches/${match.id}`}
              className="rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-surface-hover"
            >
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  {match.group ? `Group ${match.group}` : match.stage}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 font-medium uppercase tracking-wide ${statusStyles[match.status]}`}
                >
                  {match.status === "live" ? `Live ${match.minute}'` : match.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: home?.flagColor }}
                    />
                    <span className="text-sm font-medium text-white">{home?.name}</span>
                  </div>
                  <span className="text-sm font-bold text-white">{match.homeScore ?? "-"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: away?.flagColor }}
                    />
                    <span className="text-sm font-medium text-white">{away?.name}</span>
                  </div>
                  <span className="text-sm font-bold text-white">{match.awayScore ?? "-"}</span>
                </div>
              </div>
              <div className="mt-3 border-t border-border pt-2 text-xs text-slate-500">
                {formatMatchDate(match.date, match.time)} &middot; {match.venue}, {match.city}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
