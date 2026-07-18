"use client";

import { ActivitiesList } from "@/features/activities";
import { CustomerClubCard, useCustomerClub } from "@/features/customer-club";
import { LevelProgress } from "@/features/levels/components/LevelProgress";
import { VitrinList } from "@/features/vitrin";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { DashboardLoading } from "@/features/dashboard/components/DashboardLoading";
import { DashboardError } from "@/features/dashboard/components/DashboardError";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { DashboardSummaryBar } from "@/features/dashboard/components/DashboardSummaryBar";
import { WelcomeSection } from "@/features/dashboard/components/WelcomeSection";
import { DashboardStats } from "@/features/dashboard/components/DashboardStats";

export default function DashboardPage() {
  const profileQuery = useProfile();
  const summaryQuery = useCustomerClub();

  if (profileQuery.isPending || summaryQuery.isPending) {
    return <DashboardLoading />;
  }

  if (profileQuery.isError || summaryQuery.isError) {
    return <DashboardError />;
  }

  const firstName = profileQuery.data?.firstName ?? "کاربر";
  const summary = summaryQuery.data;

  return (
    <>
      <DashboardHeader />
      <DashboardSummaryBar />

      <WelcomeSection firstName={firstName} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <CustomerClubCard />
          <LevelProgress />
          <ActivitiesList />
          <VitrinList />
        </div>

        <div>{summary && <DashboardStats summary={summary} />}</div>
      </div>
    </>
  );
}
