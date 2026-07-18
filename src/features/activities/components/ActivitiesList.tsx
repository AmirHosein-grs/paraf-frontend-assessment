"use client";

import { ActivityCard } from "./ActivityCard";
import { useActivities } from "../hooks/useActivities";
import { Activity } from "../types/activity.types";
export function ActivitiesList() {
  const { data, isPending, isError } = useActivities();

  if (isPending) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center py-4">
        Failed to load activities.
      </div>
    );
  }

  if (!data?.result.length) {
    return (
      <ActivityCard>
        <p>No recent activity.</p>
      </ActivityCard>
    );
  }

  return (
    <div className="space-y-4">
      {data.result.map((activity: Activity) => (
        <ActivityCard key={activity.id}>{activity.id}</ActivityCard>
      ))}
    </div>
  );
}
