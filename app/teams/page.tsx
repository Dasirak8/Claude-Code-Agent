import SectionHeader from "@/components/SectionHeader";
import DataStatusBadge from "@/components/DataStatusBadge";
import { mockTeams } from "@/data/mockTeams";

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeader title="Teams" subtitle="Demo roster of illustrative squads for MVP visualization." />
        <DataStatusBadge />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockTeams.map((team) => (
          <div
            key={team.id}
            className="rounded-xl border border-border bg-surface p-5 transition-colors hover:bg-surface-hover"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-background"
                style={{ backgroundColor: team.flagColor }}
              >
                {team.code}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{team.name}</p>
                <p className="text-xs text-slate-500">{team.confederation} &middot; Group {team.group}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-500">Demo Ranking</span>
              <span className="font-semibold text-white">#{team.ranking}</span>
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              {team.form.map((result, idx) => (
                <span
                  key={idx}
                  className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ${
                    result === "W"
                      ? "bg-accent-green/20 text-accent-green"
                      : result === "D"
                        ? "bg-slate-500/20 text-slate-400"
                        : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {result}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
