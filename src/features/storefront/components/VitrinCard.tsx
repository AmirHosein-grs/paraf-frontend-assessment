import type { UserVitrin } from "../types/vitrin.types";

interface Props {
  vitrin: UserVitrin;
}

export function VitrinCard({ vitrin }: Props) {
  return (
    <div className="rounded-xl border p-4">
      <h3>{vitrin.companyName ?? "Personal Vitrin"}</h3>

      <p>{vitrin.role}</p>

      <p>{vitrin.status}</p>
    </div>
  );
}
