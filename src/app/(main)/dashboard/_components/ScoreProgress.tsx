"use client";

import * as React from "react";
import { Progress } from "@/shared/components/ui/progress";
import Image from "next/image";
import { useProfile } from "@/features/profile";

export function ScoreProgress() {
  const profileQuery = useProfile();
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    const scoreStr = profileQuery.data?.scores;
    const scoreNum = scoreStr ? parseInt(scoreStr, 10) : 0;

    const timer = setTimeout(() => {
      setProgress(isNaN(scoreNum) ? 0 : scoreNum);
    }, 500);

    return () => clearTimeout(timer);
  }, [profileQuery.data?.scores]);

  return (
    <div className="relative flex items-center justify-center shadow rounded-full">
      <Image
        className="p-1 bg-white rounded-full absolute right-0 z-2"
        src="/images/img1.png"
        alt="img"
        width={25}
        height={25}
      />
      <Progress value={progress} className="w-32" />
    </div>
  );
}
