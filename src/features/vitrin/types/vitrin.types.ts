import { ApiResponse } from "@/shared/api";
import { FileEntity } from "@/shared/types/user.types";

export interface UserVitrin {
  id: number;
  role: string;
  status: string;
  companyPhones: string[] | null;
  companyName: string | null;
}

export type UserVitrinsResponse = ApiResponse<UserVitrin[]>;

export interface VitrinDetail {
  id: number;
  userId: number;

  role: string;

  typeGuild: string;

  status: string;

  companyName: string;

  companyPhones: string[];

  companyAddress: string;

  companyEmail: string;

  lat: string;

  long: string;

  scores: string;

  startWorkTime: string;

  endWorkTime: string;

  isGoldenVerified: boolean;

  logo: FileEntity | null;

  businessLicense: FileEntity | null;

  level: {
    id: number;
    name: string;
    scores: string;
    file: FileEntity | null;
  };

  user: {
    firstName: string;
    lastName: string;
    phone: string;
    scores: string;
  };
}

export type VitrinDetailResponse = ApiResponse<VitrinDetail>;
