import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "CupIQ 2026 | World Cup 2026 Command Center",
  description:
    "Unofficial World Cup 2026 analytics, stats, dashboard, and prediction app.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
