"use client";

import { useCustomerClub } from "../hooks/useCustomerClub";

export function CustomerClubProgress() {
  const { data, isPending } = useCustomerClub();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="rounded-xl border p-6">
      <h3 className="font-semibold mb-4">Monthly Progress</h3>

      <div className="space-y-2">
        <p>Completed: {data.numberTasksCompleted}</p>

        <p>Score: {data.totalScoreMonthly}</p>

        <p>Coins: {data.totalCoinMonthly}</p>
      </div>
    </div>
  );
}
