"use client";

import { Menu, Bell } from "lucide-react";
import { useSidebar } from "@/components/Layout";

export default function Header() {
  const { toggleMobileNav } = useSidebar();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/80 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          className="text-slate-300 hover:text-white lg:hidden"
          onClick={toggleMobileNav}
          aria-label="Open navigation"
        >
          <Menu size={22} />
        </button>
        <div>
          <h1 className="text-lg font-semibold text-white sm:text-xl">World Cup 2026 Command Center</h1>
          <p className="hidden text-xs text-slate-500 sm:block">
            Analytics, stats, and predictions for the 2026 tournament
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="relative rounded-full border border-border bg-surface p-2 text-slate-300 hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent-green" />
        </button>
        <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple text-sm font-semibold sm:flex">
          CQ
        </div>
      </div>
    </header>
  );
}
