"use client";

import * as React from "react";
import { Progress } from "@/shared/components/ui/progress";
import Image from "next/image";
import { useVitrin } from "@/features/storefront";

export function ScoreProgress() {
  const vitrinQuery = useVitrin(130);
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    const scoreStr = vitrinQuery.data?.scores;
    const scoreNum = scoreStr ? parseInt(scoreStr, 10) : 0;

    const timer = setTimeout(() => {
      setProgress(isNaN(scoreNum) ? 0 : scoreNum);
    }, 500);

    return () => clearTimeout(timer);
  }, [vitrinQuery.data?.scores]);

  return (
    <div className="relative flex items-center justify-center shadow rounded-full">
      <Image
        className="p-1 bg-white rounded-full absolute right-0 z-2"
        src="/images/img1.png"
        alt="img"
        width={25}
        height={25}
      />
      <Progress
        value={progress}
        className="w-32 h-7 flex items-center  rounded-full bg-white border"

        indicatorClassName="h-5 rounded-full bg-[#7C49F2]"

        labelClassName="text-xs font-bold text-white"

        labelContainerClassName="top-px flex h-full items-center justify-center"

        labelContainerStyle={{
          right: `clamp(16px, ${(progress / 300) * 100 - 15}%, calc(100% - 16px))`,
          transform: "translateX(50%)",
        }}
      />
    </div>
  );
}
