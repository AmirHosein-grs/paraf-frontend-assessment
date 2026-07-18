import { SummaryBarBreadcrumb } from "./SummaryBarBreadcrumb";
import { ScoreProgress } from "./ScoreProgress";
import { Wallet } from "./Wallet";

export function DashboardSummaryBar() {
  return (
    <div className=" w-full flex items-center justify-between px-5 bg-black/5 h-10 text-xs">
      <SummaryBarBreadcrumb />
      <div className=" flex items-center justify-center h-12 ">
        <Wallet />
        <ScoreProgress />
      </div>
    </div>
  );
}
