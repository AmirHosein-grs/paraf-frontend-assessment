"use client";

import { useDashboardSummary } from "@/features/dashboard/hooks/useDashboardSummary";
import { useProfile } from "@/features/dashboard/hooks/useProfile";

export default function DashboardPage() {
  const profileQuery = useProfile();
  const summaryQuery = useDashboardSummary();

  if (profileQuery.isPending || summaryQuery.isPending) {
    return <div>Loading...</div>;
  }

  if (profileQuery.isError || summaryQuery.isError) {
    return <div>Something went wrong.</div>;
  }

  return (
    <main className="space-y-6">
      {/* <>
        <DashboardPage />
      </> */}
      <h1 className="text-2xl font-bold">
        سلام {profileQuery.data?.firstName}
      </h1>

      <pre>{JSON.stringify(profileQuery.data, null, 2)}</pre>
    </main>
  );
}
