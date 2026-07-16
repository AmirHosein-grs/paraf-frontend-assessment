"use client";

import { useLevels } from "../hooks/useLevels";

import { LevelCard } from "./LevelCard";

export function LevelProgress() {
  const levelsQuery = useLevels();

  if (levelsQuery.isPending) {
    return <div>Loading Levels...</div>;
  }

  if (levelsQuery.isError) {
    return <div>Failed to load levels.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {levelsQuery.data.map((level) => (
        <LevelCard key={level.id} level={level} />
      ))}
    </div>
  );
}
