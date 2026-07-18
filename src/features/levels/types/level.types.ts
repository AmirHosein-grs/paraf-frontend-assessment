import type { ApiResponse } from "@/shared/api";

export interface LevelFile {
  id: number;
  key: string;
  mimeType: string;
  size: string;
  link: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Level {
  id: number;
  name: string;
  scores: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  file: LevelFile;
}

export type LevelsResponse = ApiResponse<Level[]>;
