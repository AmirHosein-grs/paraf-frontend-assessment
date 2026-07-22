"use client";

import { ClubHeroBanner } from "@/shared/components/layout/ClubHeroBanner";
import { CampaignBanner } from "./components/CampaignBanner";
import { SummaryBar } from "@/shared/components/layout/SummaryBar/SummaryBar";
import { useProfile } from "@/features/profile";
import { ClubLoadingSkeleton } from "@/shared/components/layout/LoadingSkeleton";
import { ErrorState } from "@/shared/components/layout/ErrorState";
import { CustomerClubTabs } from "@/app/(main)/club/components/CustomerClubTabs";
import LevelProgressBar from "@/features/rewards/components/LevelProgressBar";
import { ClubFeaturesGrid } from "./components/ClubFeaturesGrid";

export default function ClubPage() {
  const { data: profile, isPending, isError } = useProfile();

  if (isPending) return <ClubLoadingSkeleton />;
  if (isError) return <ErrorState />;

  return (
    <div className=" w-full flex flex-col items-center justify-center ">
      <SummaryBar />

      <ClubHeroBanner firstName={profile?.firstName} />

      <CustomerClubTabs />

      <div className=" w-full mt-8">
        <LevelProgressBar />
      </div>

      <CampaignBanner />

      {/* ========================================================================
          6. ردیف سوم: جدول فعالیت‌های اخیر و نمودار آماری
          ======================================================================== */}
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="col-span-8">
          {/* 
            <RecentActivitiesTable 
              activities={[
                { id: 1, title: "خرید از فروشگاه", type: "coin", amount: +120, date: "1405/04/10" },
                { id: 2, title: "تکمیل پروفایل", type: "point", amount: +500, date: "1405/04/08" }
              ]}
            />
            - اندپوینت: GET /api/v1/club/activities?page=1&limit=10&filter=all
            - امکان فیلتر کردن بر اساس تب‌ها (همه، سکه، امتیاز) با کوئری‌پارامترها.
          */}
        </div>

        {/* ستون چپ (چهار ستون): نمودار گرافیکی فعالیت‌ها یا امتیازات */}
        <div className="col-span-4">
          {/* 
            <ActivityChart 
              chartData={[
                { day: "شنبه", value: 200 },
                { day: "یکشنبه", value: 450 },
                { day: "دوشنبه", value: 300 },
              ]}
            />
            - اندپوینت: GET /api/v1/club/activities/chart-stats?timeframe=weekly
            - ساختار پاسخ: آرایه‌ای از اشیاء حاوی برچسب زمان و مقدار عددی برای رسم چارت.
          */}
        </div>
      </div>

      <div className="mt-12">
        <ClubFeaturesGrid />
      </div>
    </div>
  );
}
