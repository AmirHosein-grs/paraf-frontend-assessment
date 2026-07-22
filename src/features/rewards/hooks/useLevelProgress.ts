import { useMemo } from "react";

import { Level } from "../types/levels.types";

type ProgressStage = Level & {
  isDefault?: boolean;
};

interface UseLevelProgressProps {
  value: number;
  stages: Level[];
}

export function useLevelProgress({ value, stages }: UseLevelProgressProps) {
  return useMemo(() => {
    const defaultStage: ProgressStage = {
      id: 0,
      name: "کاربر عادی",
      scores: "50",
      status: true,
      createdAt: "",
      updatedAt: "",
      deletedAt: null,
      isDefault: true,
      file: {
        id: 0,
        key: "",
        mimeType: "",
        size: "",
        link: "",
        type: "IMAGE",
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
      },
    };

    const sortedStages = [...stages].sort(
      (a, b) => Number(a.scores) - Number(b.scores),
    );

    const allStages: ProgressStage[] = [defaultStage, ...sortedStages];

    const currentStageIndex = Math.max(
      0,
      allStages.findLastIndex((stage) => value >= Number(stage.scores)),
    );

    const completedStages = allStages.slice(0, currentStageIndex + 1);

    const nextStage = allStages[currentStageIndex + 1] ?? null;

    const visibleStages = [
      ...completedStages,
      ...(nextStage ? [nextStage] : []),
    ];

    const currentStage = completedStages[completedStages.length - 1];

    const currentScore = Number(currentStage.scores);

    const nextScore = nextStage ? Number(nextStage.scores) : currentScore;

    const progressBetweenStages =
      nextStage == null
        ? 100
        : Math.min(
            Math.max(
              ((value - currentScore) / (nextScore - currentScore)) * 100,
              0,
            ),
            100,
          );

    const segmentWidth =
      visibleStages.length <= 1 ? 100 : 100 / (visibleStages.length - 1);

    const progressWidth =
      nextStage == null
        ? 100
        : (visibleStages.length - 2) * segmentWidth +
          (progressBetweenStages / 100) * segmentWidth;

    const remainingScore = nextStage ? Math.max(nextScore - value, 0) : 0;

    const isOnStage =
      nextStage !== null && value === Number(currentStage.scores);

    return {
      allStages,
      visibleStages,
      completedStages,
      currentStage,
      nextStage,
      currentStageIndex,
      progressBetweenStages,
      progressWidth,
      remainingScore,
      isMaxLevel: nextStage === null,
      isOnStage,
    };
  }, [value, stages]);
}
