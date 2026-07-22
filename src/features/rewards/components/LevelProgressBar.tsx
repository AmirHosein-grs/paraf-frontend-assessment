"use client";

import { Button } from "@/shared/components/ui/button";
import { LevelProgress } from "./LevelProgress";
import { ListTodo } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { useLevelProgress } from "../hooks/useLevelProgress";
import { useProfile } from "@/features/profile";
import { useLevels } from "../hooks/useLevel";

export default function LevelProgressBar() {
  const { data: stages = [] } = useLevels();

  const { data: profile } = useProfile();

  const { nextStage, remainingScore, isMaxLevel } = useLevelProgress({
    value: Number(profile?.level?.scores ?? 0),
    stages,
  });
  return (
    <div
      className="flex w-full
       items-center justify-center gap-10 "
    >
      <LevelProgress
        value={Number(profile?.level?.scores ?? 0)}
        stages={stages}
      />
      <div className=" flex flex-col items-center justify-center p-8 bg-[#A688FA]/10 backdrop-blur-lg border border-white/50  rounded-full gap-2 ">
        <div className=" space-x-2 ">
          <span>
            {isMaxLevel
              ? "شما به آخرین سطح رسیده‌اید."
              : `امتیاز لازم تا سطح ${nextStage?.name}`}
          </span>

          <Badge className=" bg-white/50 text-black ">{remainingScore}</Badge>
        </div>
        <Button
          variant={"default"}
          className=" bg-white border border-sky-500 rounded-md text-sky-500 "
        >
          ماموریت ها
          <ListTodo />
        </Button>
      </div>
    </div>
  );
}
