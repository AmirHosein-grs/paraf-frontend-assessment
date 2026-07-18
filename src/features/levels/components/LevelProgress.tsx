"use client";

import { useLevels } from "../hooks/useLevels";
import { Level } from "../types/level.types";
import { LevelCard } from "./LevelCard";

export function LevelProgress() {
  const levelsQuery = useLevels();

  if (levelsQuery.isPending) {
    return <div>Loading Levels...</div>;
  }

  if (levelsQuery.isError) {
    return <div>Failed to load levels.</div>;
  }

  if (!levelsQuery.data?.length) {
    return <div>هیچ سطحی یافت نشد.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {levelsQuery.data.map((level: Level) => (
        <LevelCard key={level.id} level={level} />
      ))}
    </div>
  );
}
