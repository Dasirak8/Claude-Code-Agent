import SectionHeader from "@/components/SectionHeader";
import DataStatusBadge from "@/components/DataStatusBadge";
import DataDisclaimer from "@/components/DataDisclaimer";
import { mockBracket } from "@/data/mockBracket";
import { getTeam } from "@/lib/utils";

const rounds = ["Round of 32", "Round of 16", "Quarterfinal", "Semifinal", "Final"];

export default function BracketPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeader title="Bracket" subtitle="Demo knockout stage draw for MVP visualization." />
        <DataStatusBadge />
      </div>
      <DataDisclaimer message="This bracket is a fabricated demo draw, not the official knockout stage." />
      <div className="overflow-x-auto pb-4">
        <div className="flex min-w-[900px] gap-6">
          {rounds.map((round) => {
            const matches = mockBracket.filter((m) => m.round === round);
            if (matches.length === 0) return null;
            return (
              <div key={round} className="flex flex-1 flex-col justify-around gap-4">
                <p className="text-center text-xs font-medium uppercase tracking-wide text-slate-500">
                  {round}
                </p>
                {matches.map((match) => {
                  const home = getTeam(match.homeTeamId);
                  const away = getTeam(match.awayTeamId);
                  return (
                    <div
                      key={match.id}
                      className="rounded-xl border border-border bg-surface p-3"
                    >
                      <div className="flex items-center justify-between py-1">
                        <span className="flex items-center gap-2 text-sm text-white">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: home?.flagColor ?? "#334155" }}
                          />
                          {home?.shortName ?? "TBD"}
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {match.homeScore ?? ""}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="flex items-center gap-2 text-sm text-white">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: away?.flagColor ?? "#334155" }}
                          />
                          {away?.shortName ?? "TBD"}
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {match.awayScore ?? ""}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
