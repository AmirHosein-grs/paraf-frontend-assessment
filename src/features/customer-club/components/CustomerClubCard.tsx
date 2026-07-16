"use client";

import { useCustomerClub } from "../hooks/useCustomerClub";

export function CustomerClubCard() {
  const { data, isPending, isError } = useCustomerClub();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Failed to load customer club.</div>;
  }

  return (
    <div className="rounded-xl border p-6 space-y-4">
      <h2 className="text-lg font-semibold">Customer Club</h2>

      <div>Tasks Completed: {data.numberTasksCompleted}</div>

      <div>Monthly Score: {data.totalScoreMonthly}</div>

      <div>Monthly Coins: {data.totalCoinMonthly}</div>
    </div>
  );
}
