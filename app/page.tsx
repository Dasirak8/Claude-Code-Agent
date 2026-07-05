import { Activity, Goal, Users, Database } from "lucide-react";
import StatCard from "@/components/StatCard";
import SectionHeader from "@/components/SectionHeader";
import DataStatusBadge from "@/components/DataStatusBadge";
import { mockMatches } from "@/data/mockMatches";
import { mockTeams } from "@/data/mockTeams";
import { mockPlayers } from "@/data/mockPlayers";
import { dataLabel } from "@/data/tournamentMeta";
import { getTeam, formatMatchDate } from "@/lib/utils";
import Link from "next/link";

export default function DashboardPage() {
  const liveMatches = mockMatches.filter((m) => m.status === "live");

  const featuredMatches = [...liveMatches, ...mockMatches.filter((m) => m.status === "upcoming")].slice(0, 4);

  return (
    <div className="space-y-8">
      <DataStatusBadge />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Demo Matches"
          value={mockMatches.length}
          icon={Activity}
          trend={`${liveMatches.length} demo live now`}
          trendDirection="neutral"
          accent="green"
        />
        <StatCard
          label="Demo Teams"
          value={mockTeams.length}
          icon={Users}
          trend="Illustrative squads"
          trendDirection="neutral"
          accent="blue"
        />
        <StatCard
          label="Demo Players"
          value={mockPlayers.length}
          icon={Goal}
          trend="Fictional roster"
          trendDirection="neutral"
          accent="purple"
        />
        <StatCard
          label="Data Mode"
          value={dataLabel}
          icon={Database}
          trend="Local mock dataset"
          trendDirection="neutral"
          accent="green"
        />
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-card text-accent-blue">
          <Database size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Data source status</p>
          <p className="mt-1 text-sm text-slate-400">
            Current version uses local mock data. Future versions can connect to licensed football APIs.
          </p>
        </div>
      </div>

      <div>
        <SectionHeader
          title="Live & Upcoming"
          subtitle="Demo preview of match tracking for MVP visualization"
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
                      LIVE (Demo) {match.minute}&apos;
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
