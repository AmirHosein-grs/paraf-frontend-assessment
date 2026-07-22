"use client";

import * as React from "react";
import { cn } from "@/shared/utils/cn";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;

  indicatorClassName?: string;

  label?: React.ReactNode;

  labelClassName?: string;

  labelContainerClassName?: string;

  labelContainerStyle?: React.CSSProperties;
}

function Progress({
  className,
  value = 0,
  max = 300,

  indicatorClassName,
  labelClassName,
  labelContainerClassName,
  labelContainerStyle,

  label,

  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      className={cn("relative h-7 w-full overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn("transition-all duration-500", indicatorClassName)}
        style={{
          width: `${percentage}%`,
        }}
      />

      <div
        className={cn(
          "absolute transition-all duration-500",
          labelContainerClassName,
        )}
        style={labelContainerStyle}
      >
        {label ?? <span className={labelClassName}>{value}</span>}
      </div>
    </div>
  );
}

export { Progress };
