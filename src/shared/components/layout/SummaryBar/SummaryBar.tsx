import { SummaryBarBreadcrumb } from "./SummaryBarBreadcrumb";
import { ScoreProgress } from "./ScoreProgress";
import { Wallet } from "./Wallet";

export function SummaryBar() {
  return (
    <div className=" w-full flex items-center justify-center bg-mist-100 h-10 px-4 ">
      <div className=" w-full max-w-6xl flex items-center justify-between text-xs ">
        <SummaryBarBreadcrumb />
        <div className=" flex items-center justify-center h-12 ">
          <Wallet />
          <ScoreProgress />
        </div>
      </div>
    </div>
  );
}
