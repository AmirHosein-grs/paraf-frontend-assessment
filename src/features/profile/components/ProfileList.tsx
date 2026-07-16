"use client";

import { useProfile } from "../hooks/useProfile";

import { ProfileCard } from "./ProfileCard";

export function ProfileList() {
  const profileQuery = useProfile();

  if (profileQuery.isPending) {
    return <div>Loading Profile...</div>;
  }

  if (profileQuery.isError) {
    return <div>Failed to load profile.</div>;
  }

  return <ProfileCard user={profileQuery.data} />;
}
