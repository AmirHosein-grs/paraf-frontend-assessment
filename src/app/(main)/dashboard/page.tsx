"use client";

import { useDashboardSummary } from "@/features/dashboard/hooks/useDashboardSummary";
import { useProfile } from "@/features/dashboard/hooks/useProfile";

export default function DashboardPage() {
  const { data: profile } = useProfile();
  const { data: summary } = useDashboardSummary();

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">سلام {profile?.firstName}</h1>

      <pre>{JSON.stringify(summary, null, 2)}</pre>
    </main>
  );
}
