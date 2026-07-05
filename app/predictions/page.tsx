import SectionHeader from "@/components/SectionHeader";
import { mockMatches } from "@/data/mockMatches";
import { getTeam } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export default function PredictionsPage() {
  const upcoming = mockMatches.filter((m) => m.status === "upcoming");

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Predictions"
        subtitle="AI-assisted win probability for upcoming matches"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {upcoming.map((match) => {
          const home = getTeam(match.homeTeamId);
          const away = getTeam(match.awayTeamId);
          const homeConfidence = 45 + ((home?.ranking ?? 50) % 20);
          const awayConfidence = 100 - homeConfidence;

          return (
            <div key={match.id} className="rounded-xl border border-border bg-surface p-5">
              <div className="mb-3 flex items-center gap-2 text-xs font-medium text-accent-purple">
                <Sparkles size={14} />
                Model Confidence
              </div>
              <div className="flex items-center justify-between text-sm text-white">
                <span>{home?.shortName}</span>
                <span>{away?.shortName}</span>
              </div>
              <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-background">
                <div
                  className="bg-gradient-to-r from-accent-green to-accent-blue"
                  style={{ width: `${homeConfidence}%` }}
                />
                <div
                  className="bg-gradient-to-r from-accent-purple to-accent-blue/60"
                  style={{ width: `${awayConfidence}%` }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>{homeConfidence}%</span>
                <span>{awayConfidence}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
