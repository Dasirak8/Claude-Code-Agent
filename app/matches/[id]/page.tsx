import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { mockMatches } from "@/data/mockMatches";
import { getTeam, formatMatchDate } from "@/lib/utils";
import EmptyState from "@/components/EmptyState";
import DataStatusBadge from "@/components/DataStatusBadge";
import DataDisclaimer from "@/components/DataDisclaimer";

export function generateStaticParams() {
  return mockMatches.map((match) => ({ id: match.id }));
}

export default async function MatchDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const match = mockMatches.find((m) => m.id === id);

  if (!match) {
    notFound();
  }

  const home = getTeam(match.homeTeamId);
  const away = getTeam(match.awayTeamId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/matches"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to matches
        </Link>
        <DataStatusBadge />
      </div>

      <DataDisclaimer message="This match is a fabricated demo example for MVP visualization, not a real result." />

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 sm:justify-between">
          <span>{match.group ? `Group ${match.group}` : match.stage}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {formatMatchDate(match.date, match.time)} &middot; {match.time}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {match.venue}, {match.city}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-4 text-center">
          <div>
            <div
              className="mx-auto mb-2 h-14 w-14 rounded-full"
              style={{ backgroundColor: home?.flagColor }}
            />
            <p className="text-sm font-semibold text-white sm:text-base">{home?.name}</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white sm:text-5xl">
              {match.homeScore ?? "-"} : {match.awayScore ?? "-"}
            </p>
            {match.status === "live" && (
              <p className="mt-2 text-xs font-medium text-accent-green">LIVE (Demo) &middot; {match.minute}&apos;</p>
            )}
            {match.status === "upcoming" && (
              <p className="mt-2 text-xs font-medium text-accent-blue">Upcoming</p>
            )}
            {match.status === "finished" && (
              <p className="mt-2 text-xs font-medium text-slate-500">Full Time</p>
            )}
          </div>
          <div>
            <div
              className="mx-auto mb-2 h-14 w-14 rounded-full"
              style={{ backgroundColor: away?.flagColor }}
            />
            <p className="text-sm font-semibold text-white sm:text-base">{away?.name}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-base font-semibold text-white">Match Events</h2>
        {match.events && match.events.length > 0 ? (
          <ul className="space-y-3">
            {match.events.map((event, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-4 py-2.5 text-sm"
              >
                <span className="w-10 shrink-0 font-mono text-xs text-slate-500">
                  {event.minute}&apos;
                </span>
                <span className="text-slate-300">{event.description}</span>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="No events yet"
            description="Match events will appear here once the game kicks off."
          />
        )}
      </div>
    </div>
  );
}
