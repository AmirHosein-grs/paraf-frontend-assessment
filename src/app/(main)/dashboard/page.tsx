"use client";

import { ActivitiesList } from "@/features/activities";
import { CustomerClubCard, useCustomerClub } from "@/features/customer-club";
import { LevelProgress } from "@/features/levels/components/LevelProgress";
import { VitrinList } from "@/features/vitrin";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { DashboardLoading } from "./_components/DashboardLoading";
import { DashboardError } from "./_components/DashboardError";
import { DashboardHeader } from "./_components/DashboardHeader";
import { WelcomeSection } from "./_components/WelcomeSection";
import { DashboardStats } from "./_components/DashboardStats";

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
