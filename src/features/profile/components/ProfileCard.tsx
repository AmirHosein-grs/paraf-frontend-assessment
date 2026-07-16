import Image from "next/image";

import type { User } from "@/shared/types/user.types";

import { env } from "@/shared/config";

interface ProfileCardProps {
  user: User;
}

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="flex items-center gap-4 relative h-16 w-16">
        {user.file ? (
          <Image
            src={`${env.IMAGE_BASE_URL}/${user.file.link}`}
            alt={user.firstName}
            fill
            sizes="64px"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-lg font-semibold">
            {user.firstName[0]}
          </div>
        )}

        <div>
          <h3 className="font-semibold">
            {user.firstName} {user.lastName}
          </h3>

          <p className="text-sm text-muted-foreground">{user.phone}</p>

          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
