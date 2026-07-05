import { Info, ShieldCheck } from "lucide-react";
import { dataLabel, dataDisclaimer, dataMode, lastUpdated } from "@/data/tournamentMeta";
import { cn } from "@/lib/utils";

export default function DataStatusBadge({ className }: { className?: string }) {
  const isVerified = dataMode === "verified";
  const Icon = isVerified ? ShieldCheck : Info;

  return (
    <span
      title={`${dataDisclaimer} Last updated ${lastUpdated}.`}
      className={cn(
        "inline-flex w-fit cursor-help items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        isVerified
          ? "border-accent-green/30 bg-accent-green/15 text-accent-green"
          : "border-amber-500/30 bg-amber-500/15 text-amber-400",
        className
      )}
    >
      <Icon size={13} />
      {dataLabel}
    </span>
  );
}
