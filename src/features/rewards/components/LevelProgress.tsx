"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

import { env } from "@/shared/config";
import { cn } from "@/shared/utils/cn";
import { Level } from "../types/levels.types";
import { useLevelProgress } from "../hooks/useLevelProgress";

interface LevelProgressProps {
  value: number;
  stages: Level[];
}

type ProgressStage = Level & {
  isDefault?: boolean;
};

export function LevelProgress({ value, stages }: LevelProgressProps) {
  const { visibleStages, completedStages, nextStage, progressWidth } =
    useLevelProgress({
      value,
      stages,
    });

  return (
    <div className="w-full overflow-x-auto max-w-xl flex  flex-col items-center justify-center gap-5 ">
      <div className=" w-full relative mx-auto min-w-105 overflow-hidden rounded-3xl bg-[#A688FA]/10 px-8 py-22 backdrop-blur-xl border border-white/50 ">
        <div className="absolute left-0 right-10 top-1/2 -translate-y-1/2">
          <div className="h-0.75 rounded-full bg-white/60" />
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `calc(${progressWidth}% - 40px)`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute right-10 top-1/2 z-10 h-1.5 -translate-y-1/2 rounded-full bg-linear-to-l from-[#A688FA] to-[#764AF1] shadow-[0_0_18px_rgba(118,74,241,.45)]"
        />

        <div className="relative z-20 flex items-center justify-between">
          {visibleStages.map((stage, index) => {
            const isCompleted = index < completedStages.length - 1;

            const isCurrent = index === completedStages.length - 1;

            const isNext = nextStage?.id === stage.id;

            return (
              <div key={stage.id}>
                <Stage
                  stage={stage}
                  isCompleted={isCompleted}
                  isCurrent={isCurrent}
                  isNext={isNext}
                  isLast={!nextStage && index === visibleStages.length - 1}
                />
              </div>
            );
          })}
        </div>

        <motion.div
          animate={{
            right: `calc(${progressWidth}% + 4px)`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute top-1/2 z-30 translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="rounded-full bg-[#764AF1] px-2 py-1  text-white shadow-[0_8px_25px_rgba(118,74,241,.4)]"
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold">{value}</span>

              <Zap size={15} className="text-yellow-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className=" px-10 w-full flex items-center justify-center overflow-hidden  text-xs ">
        <div className=" w-full flex items-center justify-between py-1 px-5 rounded-md bg-white ">
          {stages.map((stage, index) => {
            return (
              <div
                key={index}
                className=" flex items-center justify-center gap-2 "
              >
                <span>{stage.name}</span>
                <div className=" relative w-6 h-6  ">
                  <Image
                    src={`${env.IMAGE_BASE_URL}/${stage.file.link}`}
                    alt={stage.name}
                    fill
                    sizes="24px"
                    className=" rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface StageProps {
  stage: ProgressStage;
  isCompleted: boolean;
  isCurrent: boolean;
  isNext: boolean;
  isLast: boolean;
}

function Stage({ stage, isCompleted, isCurrent, isNext, isLast }: StageProps) {
  const imageSrc =
    stage.file?.link && `${env.IMAGE_BASE_URL}/${stage.file.link}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.45,
      }}
      className="relative flex flex-col items-center  "
    >
      <motion.div
        animate={{
          scale: isCurrent ? [1, 1.08, 1] : 1,
        }}
        transition={{
          repeat: isCurrent ? Infinity : 0,
          duration: 1.6,
        }}
        className={cn(
          "absolute bottom-8 flex h-14 w-14 items-center justify-center",

          isCurrent && "w-18! h-18!",
        )}
      >
        {stage.isDefault ? (
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-full border-4 transition-all",

              isCompleted || isCurrent
                ? "border-[#764AF1] bg-[#F4EFFF]"
                : "border-zinc-300 bg-white",
              isCurrent && "w-18! h-18!",
            )}
          >
            <Star
              size={24}
              className={cn(
                isCompleted || isCurrent
                  ? "fill-[#764AF1] text-[#764AF1]"
                  : "text-zinc-400",
              )}
            />
          </div>
        ) : (
          <div
            className={cn(
              "relative h-14 w-14 overflow-hidden rounded-full transition-all",

              isCompleted || isCurrent
                ? "ring-4 ring-[#764AF1]/30"
                : "opacity-60 grayscale",

              isCurrent && "w-18! h-18!",
            )}
          >
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={stage.name}
                fill
                className="object-cover"
              />
            )}
          </div>
        )}
      </motion.div>

      <motion.div
        animate={{
          boxShadow: isCurrent
            ? [
                "0 0 0px rgba(118,74,241,.2)",
                "0 0 18px rgba(118,74,241,.8)",
                "0 0 0px rgba(118,74,241,.2)",
              ]
            : undefined,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="relative z-20 rounded-full "
      >
        {isCompleted ? (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#764AF1] text-white shadow-lg">
            <Check size={15} strokeWidth={3} />
          </div>
        ) : isCurrent ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#764AF1] text-white">
            <Zap size={15} />
          </div>
        ) : isNext ? (
          <div className="rounded-full bg-[#EFE7FF] px-3 py-1 shadow-md">
            <div className="flex items-center gap-1">
              <Zap size={12} className="text-[#764AF1]" />

              <span className="text-xs font-bold text-[#764AF1]">
                {stage.scores}
              </span>
            </div>
          </div>
        ) : (
          <div className="h-4 w-4 rounded-full bg-zinc-300" />
        )}
      </motion.div>

      <motion.div
        animate={{
          y: isCurrent ? [-2, 2, -2] : 0,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute top-8 flex w-28 flex-col items-center text-center"
      >
        <h3
          className={cn(
            "text-sm font-bold whitespace-nowrap transition-all",

            isCompleted && "text-[#764AF1]",

            isCurrent && "text-[#764AF1] drop-shadow",

            isNext && "text-zinc-700",

            !isCompleted && !isCurrent && !isNext && "text-zinc-400",
          )}
        >
          {stage.name}
        </h3>

        <span className="mt-1 text-[11px] text-zinc-400">
          {stage.isDefault ? "۰ تا ۵۰ امتیاز" : `${stage.scores} امتیاز`}
        </span>
      </motion.div>

      {isLast && (
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute -top-10 rounded-full bg-yellow-100 px-2 py-1 text-[10px] font-bold text-yellow-700"
        >
          آخرین سطح
        </motion.div>
      )}
    </motion.div>
  );
}
