import SectionHeader from "@/components/SectionHeader";
import DataStatusBadge from "@/components/DataStatusBadge";
import DataDisclaimer from "@/components/DataDisclaimer";
import { mockPlayers } from "@/data/mockPlayers";
import { getTeam } from "@/lib/utils";

export default function PlayersPage() {
  const sorted = [...mockPlayers].sort((a, b) => b.rating - a.rating);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeader title="Players" subtitle="Demo player statistics for MVP visualization." />
        <DataStatusBadge />
      </div>
      <DataDisclaimer message="Player names and stats shown are fictional demo examples, not real athletes or verified statistics." />
      <div className="overflow-x-auto rounded-xl border border-border bg-surface">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wide text-slate-500">
              <th className="px-5 py-3 font-medium">Player</th>
              <th className="px-5 py-3 font-medium">Team</th>
              <th className="px-5 py-3 font-medium">Pos</th>
              <th className="px-5 py-3 text-center font-medium">Goals</th>
              <th className="px-5 py-3 text-center font-medium">Assists</th>
              <th className="px-5 py-3 text-center font-medium">Rating</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((player) => {
              const team = getTeam(player.teamId);
              return (
                <tr key={player.id} className="border-b border-border last:border-0">
                  <td className="px-5 py-3">
                    <p className="font-medium text-white">{player.name}</p>
                    <p className="text-xs text-slate-500">#{player.number} &middot; Age {player.age}</p>
                  </td>
                  <td className="px-5 py-3">
                    <span className="flex items-center gap-2 text-slate-300">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: team?.flagColor }}
                      />
                      {team?.shortName}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-slate-400">{player.position}</td>
                  <td className="px-5 py-3 text-center font-semibold text-white">{player.goals}</td>
                  <td className="px-5 py-3 text-center font-semibold text-white">{player.assists}</td>
                  <td className="px-5 py-3 text-center">
                    <span className="rounded-full bg-accent-green/15 px-2 py-0.5 font-semibold text-accent-green">
                      {player.rating.toFixed(1)}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
