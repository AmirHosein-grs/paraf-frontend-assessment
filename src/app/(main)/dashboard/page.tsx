"use client";

import { ActivitiesList } from "@/features/activities";
import { LevelProgress } from "@/features/levels/components/LevelProgress";
import { VitrinList } from "@/features/vitrin";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { DashboardLoading } from "@/features/dashboard/components/DashboardLoading";
import { DashboardError } from "@/features/dashboard/components/DashboardError";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { DashboardSummaryBar } from "@/features/dashboard/components/DashboardSummaryBar";
import { WelcomeSection } from "@/features/dashboard/components/WelcomeSection";
// import { DashboardStats } from "@/features/dashboard/components/DashboardStats";
import { VitrinsTabsGroupe } from "@/features/vitrin/components/VitrinsTabsGroupe";
import BannerSection from "@/features/dashboard/components/BannerSection";

export default function DashboardPage() {
  const profile = useProfile();

  if (profile.isPending) {
    return <DashboardLoading />;
  }

  if (profile.isError) {
    return <DashboardError />;
  }

  const firstName = profile.data?.firstName ?? "کاربر";

  return (
    <div className="bg-blue-100 flex items-center justify-center flex-col ">
      <DashboardHeader />
      <DashboardSummaryBar />
      <WelcomeSection firstName={firstName} />

      <VitrinsTabsGroupe />

      <LevelProgress />

      <BannerSection />

      {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-3"> */}
      {/* <div className="md:col-span-2 space-y-6">
          
          <ActivitiesList />
          <VitrinList />
        </div> */}

      {/* <div>{summary && <DashboardStats summary={summary} />}</div> */}
      {/* </div> */}
    </div>
  );
}
