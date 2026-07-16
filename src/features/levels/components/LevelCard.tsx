import Image from "next/image";

import { env } from "@/shared/config";
import { Level } from "@/shared/types/user.types";

interface LevelCardProps {
  level: Level;
  active?: boolean;
}

export function LevelCard({ level, active = false }: LevelCardProps) {
  return (
    <div
      className={`rounded-xl border p-4 transition ${
        active ? "border-primary bg-primary/5" : "border-border"
      }`}
    >
      {level.file && (
        <div className="relative h-16 w-16">
          <Image
            src={`${env.IMAGE_BASE_URL}/${level.file.link}`}
            alt={level.name}
            fill
            sizes="64px"
          />
        </div>
      )}

      <h3 className="mt-3 font-semibold">{level.name}</h3>

      <p className="text-sm text-muted-foreground">{level.scores} امتیاز</p>
    </div>
  );
}
