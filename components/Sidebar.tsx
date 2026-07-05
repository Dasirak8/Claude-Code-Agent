"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Radio,
  Users,
  Trophy,
  Shield,
  UserRound,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/Layout";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/matches", label: "Live Matches", icon: Radio },
  { href: "/groups", label: "Groups", icon: Users },
  { href: "/bracket", label: "Bracket", icon: Trophy },
  { href: "/teams", label: "Teams", icon: Shield },
  { href: "/players", label: "Players", icon: UserRound },
  { href: "/predictions", label: "Predictions", icon: Sparkles },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isMobileNavOpen, closeMobileNav } = useSidebar();

  return (
    <>
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={closeMobileNav}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-surface transition-transform duration-200 ease-in-out lg:translate-x-0",
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-2" onClick={closeMobileNav}>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-green via-accent-blue to-accent-purple font-bold text-background">
              C
            </div>
            <div>
              <p className="text-sm font-bold leading-tight text-white">CupIQ 2026</p>
              <p className="text-[11px] leading-tight text-slate-400">Command Center</p>
            </div>
          </Link>
          <button
            className="text-slate-400 hover:text-white lg:hidden"
            onClick={closeMobileNav}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-2 flex flex-col gap-1 px-3">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileNav}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-gradient-card text-white"
                    : "text-slate-400 hover:bg-surface-hover hover:text-white"
                )}
              >
                <Icon size={18} className={isActive ? "text-accent-green" : ""} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
