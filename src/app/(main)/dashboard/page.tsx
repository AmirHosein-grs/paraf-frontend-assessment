"use client";

import { DashboardLoading } from "@/features/dashboard";
import { DashboardError } from "@/features/dashboard";
import { DashboardHeader } from "@/features/dashboard";
import { DashboardSummaryBar } from "@/features/dashboard";
import { WelcomeSection } from "@/features/dashboard";
import { BannerSection } from "@/features/dashboard";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { VitrinsTabsGroupe } from "@/features/vitrin/components/VitrinsTabsGroupe";
import { LevelProgress } from "@/features/levels/components/LevelProgress";

// import { DashboardStats } from "@/features/dashboard";
// import { ActivitiesList } from "@/features/activities";
// import { VitrinList } from "@/features/vitrin";

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
