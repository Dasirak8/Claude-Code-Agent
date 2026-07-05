import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
  accent?: "green" | "blue" | "purple";
}

const accentMap = {
  green: "from-accent-green/20 to-transparent text-accent-green",
  blue: "from-accent-blue/20 to-transparent text-accent-blue",
  purple: "from-accent-purple/20 to-transparent text-accent-purple",
};

export default function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendDirection = "neutral",
  accent = "green",
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="flex items-start justify-between">
        <p className="text-sm text-slate-400">{label}</p>
        {Icon && (
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br",
              accentMap[accent]
            )}
          >
            <Icon size={18} />
          </div>
        )}
      </div>
      <p className="mt-3 text-2xl font-bold text-white sm:text-3xl">{value}</p>
      {trend && (
        <p
          className={cn(
            "mt-1 text-xs font-medium",
            trendDirection === "up" && "text-accent-green",
            trendDirection === "down" && "text-red-400",
            trendDirection === "neutral" && "text-slate-500"
          )}
        >
          {trend}
        </p>
      )}
    </div>
  );
}
