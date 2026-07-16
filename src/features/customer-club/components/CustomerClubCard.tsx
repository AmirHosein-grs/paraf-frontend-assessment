"use client";

import { useCustomerClub } from "../hooks/useCustomerClub";

export function CustomerClubCard() {
  const { data, isPending, isError } = useCustomerClub();

  if (isPending) {
    return (
      <div className="rounded-xl border p-6 space-y-4 animate-pulse bg-gray-50">
        <div className="h-6 w-32 bg-gray-200 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
          <div className="h-4 w-36 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="rounded-xl border border-red-100 bg-red-50 p-6 text-red-600 text-sm">
        Failed to load customer club details.
      </div>
    );
  }

  return (
    <div className="rounded-xl border p-6 space-y-4 shadow-sm bg-white hover:shadow-md transition-shadow">
      <h2 className="text-lg font-semibold text-gray-800">Customer Club</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
        <div className="p-3 bg-gray-50 rounded-lg">
          <span className="block text-xs text-gray-400">Tasks Completed</span>
          <span className="text-lg font-bold text-black">
            {data.numberTasksCompleted}
          </span>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <span className="block text-xs text-gray-400">Monthly Score</span>
          <span className="text-lg font-bold text-black">
            {data.totalScoreMonthly}
          </span>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <span className="block text-xs text-gray-400">Monthly Coins</span>
          <span className="text-lg font-bold text-yellow-600">
            🪙 {data.totalCoinMonthly}
          </span>
        </div>
      </div>
    </div>
  );
}
