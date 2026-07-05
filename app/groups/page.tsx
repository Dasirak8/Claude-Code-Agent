import SectionHeader from "@/components/SectionHeader";
import DataStatusBadge from "@/components/DataStatusBadge";
import DataDisclaimer from "@/components/DataDisclaimer";
import { mockGroups } from "@/data/mockGroups";
import { getTeam } from "@/lib/utils";

export default function GroupsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeader title="Groups" subtitle="Explore a demo version of group standings." />
        <DataStatusBadge />
      </div>
      <DataDisclaimer message="Group standings shown here are fabricated demo values, not verified official results." />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {mockGroups.map((group) => (
          <div key={group.id} className="rounded-xl border border-border bg-surface p-5">
            <h3 className="mb-4 text-sm font-semibold text-white">{group.name}</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-slate-500">
                  <th className="pb-2 font-medium">Team</th>
                  <th className="pb-2 text-center font-medium">P</th>
                  <th className="pb-2 text-center font-medium">W</th>
                  <th className="pb-2 text-center font-medium">D</th>
                  <th className="pb-2 text-center font-medium">L</th>
                  <th className="pb-2 text-center font-medium">GD</th>
                  <th className="pb-2 text-center font-medium">Pts</th>
                </tr>
              </thead>
              <tbody>
                {[...group.standings]
                  .sort((a, b) => b.points - a.points || b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst))
                  .map((row, idx) => {
                    const team = getTeam(row.teamId);
                    return (
                      <tr
                        key={row.teamId}
                        className={idx < 2 ? "text-white" : "text-slate-400"}
                      >
                        <td className="flex items-center gap-2 py-2">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: team?.flagColor }}
                          />
                          {team?.shortName}
                        </td>
                        <td className="text-center">{row.played}</td>
                        <td className="text-center">{row.won}</td>
                        <td className="text-center">{row.drawn}</td>
                        <td className="text-center">{row.lost}</td>
                        <td className="text-center">{row.goalsFor - row.goalsAgainst}</td>
                        <td className="text-center font-semibold">{row.points}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
