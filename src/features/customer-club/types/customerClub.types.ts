import { ApiResponse } from "@/shared/api";

export interface CustomerClubSummary {
  numberTasksCompleted: number;
  totalScoreMonthly: number;
  totalCoinMonthly: number;
}

export interface CustomerClubVitrinSummary {
  numberTasksCompleted: number;
  totalScoreMonthly: number;
}

export type CustomerClubSummaryResponse = ApiResponse<CustomerClubSummary>;

export type CustomerClubVitrinSummaryResponse =
  ApiResponse<CustomerClubVitrinSummary>;
