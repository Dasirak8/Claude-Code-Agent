"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

interface SidebarContextValue {
  isMobileNavOpen: boolean;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within Layout");
  return ctx;
}

export default function Layout({ children }: { children: ReactNode }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const value: SidebarContextValue = {
    isMobileNavOpen,
    toggleMobileNav: () => setMobileNavOpen((open) => !open),
    closeMobileNav: () => setMobileNavOpen(false),
  };

  return (
    <SidebarContext.Provider value={value}>
      <div className="min-h-screen bg-background text-slate-100">
        <Sidebar />
        <div className="lg:pl-64">
          <Header />
          <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
          <footer className="border-t border-border px-4 py-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
            Unofficial football analytics app. Not affiliated with FIFA.
          </footer>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
