"use client";

import { useSession } from "@/features/auth";

export function SessionProvider({ children }: { children: React.ReactNode }) {
  useSession();
  return <>{children}</>;
}
