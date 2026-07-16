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
        <Image
          src={`${env.IMAGE_BASE_URL}/${level.file.link}`}
          alt={level.name}
          width={64}
          height={64}
        />
      )}

      <h3 className="mt-3 font-semibold">{level.name}</h3>

      <p className="text-sm text-muted-foreground">{level.scores} امتیاز</p>
    </div>
  );
}
