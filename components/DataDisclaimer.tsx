import { AlertTriangle } from "lucide-react";
import { dataDisclaimer } from "@/data/tournamentMeta";

export default function DataDisclaimer({ message }: { message?: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
      <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-400" />
      <p className="text-xs leading-relaxed text-slate-400">
        {message ?? dataDisclaimer}
      </p>
    </div>
  );
}
