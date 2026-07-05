import { Activity, Goal, Shield, Trophy } from "lucide-react";
import StatCard from "@/components/StatCard";
import SectionHeader from "@/components/SectionHeader";
import { mockMatches } from "@/data/mockMatches";
import { mockTeams } from "@/data/mockTeams";
import { getTeam, formatMatchDate } from "@/lib/utils";
import Link from "next/link";

export default function DashboardPage() {
  const finishedMatches = mockMatches.filter((m) => m.status === "finished");
  const liveMatches = mockMatches.filter((m) => m.status === "live");
  const totalGoals = finishedMatches.reduce(
    (sum, m) => sum + (m.homeScore ?? 0) + (m.awayScore ?? 0),
    0
  );
  const avgGoals = finishedMatches.length
    ? (totalGoals / finishedMatches.length).toFixed(2)
    : "0.00";

  const featuredMatches = [...liveMatches, ...mockMatches.filter((m) => m.status === "upcoming")].slice(0, 4);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Matches Played"
          value={finishedMatches.length}
          icon={Activity}
          trend={`${liveMatches.length} live now`}
          trendDirection="up"
          accent="green"
        />
        <StatCard
          label="Goals Scored"
          value={totalGoals}
          icon={Goal}
          trend={`${avgGoals} avg per match`}
          trendDirection="neutral"
          accent="blue"
        />
        <StatCard
          label="Teams Competing"
          value={mockTeams.length}
          icon={Shield}
          trend="Across 4 groups"
          trendDirection="neutral"
          accent="purple"
        />
        <StatCard
          label="Days to Final"
          value={38}
          icon={Trophy}
          trend="Bracket in progress"
          trendDirection="neutral"
          accent="green"
        />
      </div>

      <div>
        <SectionHeader
          title="Live & Upcoming"
          subtitle="Matches happening now and coming up next"
          action={
            <Link
              href="/matches"
              className="text-sm font-medium text-accent-green hover:underline"
            >
              View all
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {featuredMatches.map((match) => {
            const home = getTeam(match.homeTeamId);
            const away = getTeam(match.awayTeamId);
            return (
              <Link
                key={match.id}
                href={`/matches/${match.id}`}
                className="rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-surface-hover"
              >
                <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
                  <span>{match.stage}</span>
                  {match.status === "live" ? (
                    <span className="flex items-center gap-1.5 font-medium text-accent-green">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-green" />
                      LIVE {match.minute}&apos;
                    </span>
                  ) : (
                    <span>{formatMatchDate(match.date, match.time)}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: home?.flagColor }}
                    />
                    <span className="text-sm font-medium text-white">{home?.shortName}</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    {match.homeScore ?? "-"}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: away?.flagColor }}
                    />
                    <span className="text-sm font-medium text-white">{away?.shortName}</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    {match.awayScore ?? "-"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
