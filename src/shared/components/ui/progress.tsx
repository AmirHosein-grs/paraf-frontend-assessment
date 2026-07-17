"use client";

import * as React from "react";
import { cn } from "@/shared/utils/cn";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

function Progress({ className, value = 0, ...props }: ProgressProps) {
  const percentage = Math.min(Math.max(value, 0), 100);

  return (
    <div
      className={cn(
        "relative h-7 w-full overflow-hidden rounded-full bg-white flex items-center border border-slate-200 shadow-inner",
        className,
      )}
      {...props}
    >
      <div
        className="bg-[#7C49F2] transition-all duration-500 ease-out h-5 rounded-full"
        style={{ width: `${Math.max(0, percentage - 2)}%` }}
      />

      <div
        className="absolute top-px flex h-full items-center justify-center transition-all duration-500 ease-out"
        style={{
          right: `clamp(16px, ${percentage - 15}%, calc(100% - 16px))`,
          transform: "translateX(50%)",
        }}
      >
        <span className="p-px rounded-full text-xs font-bold text-white drop-shadow-md">
          {percentage}
        </span>
      </div>
    </div>
  );
}

export { Progress };
