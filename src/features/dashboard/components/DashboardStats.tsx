interface DashboardSummary {
  numberTasksCompleted: number;
  totalScoreMonthly: number;
  totalCoinMonthly: number;
}
interface Props {
  summary: DashboardSummary;
}

export function DashboardStats({ summary }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <p>Tasks</p>
        <h3>{summary.numberTasksCompleted}</h3>
      </div>

      <div>
        <p>Score</p>
        <h3>{summary.totalScoreMonthly}</h3>
      </div>

      <div>
        <p>Coins</p>
        <h3>{summary.totalCoinMonthly}</h3>
      </div>
    </div>
  );
}
