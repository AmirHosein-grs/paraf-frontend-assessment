export interface DashboardSummary {
  numberTasksCompleted: number;
  totalScoreMonthly: number;
}

export interface DashboardSummaryResponse {
  success: boolean;
  result: DashboardSummary;
}
