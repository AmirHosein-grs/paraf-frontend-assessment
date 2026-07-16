import { useUserVitrins } from "../hooks/useVitrins";
import { VitrinCard } from "./VitrinCard";

export function VitrinList() {
  const vitrinsQuery = useUserVitrins();

  if (vitrinsQuery.isPending) {
    return <p>Loading...</p>;
  }

  if (vitrinsQuery.isError) {
    return <p>Failed to load vitrins.</p>;
  }

  return (
    <div className="space-y-4">
      {vitrinsQuery.data.map((vitrin) => (
        <VitrinCard key={vitrin.id} vitrin={vitrin} />
      ))}
    </div>
  );
}
