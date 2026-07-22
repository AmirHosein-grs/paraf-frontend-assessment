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

  unionApprovalStatus: string | null;
  parafApprovalStatus: string | null;

  categories: number[];
  groupCategories: number[];
  groupCategoryChildrens: number[] | null;

  businessActivityId: number | null;

  cities: number[];

  companyPhones: string[];
  companyName: string | null;
  companyAddress: string;
  companyEmail: string;

  aboutUs: string | null;
  keywords: string | null;

  lat: string;
  long: string;

  logoId: number | null;

  guildId: number | null;
  guildName: string | null;

  businessLicenseId: number | null;
  businessLicenseStatus: string | null;

  authenticatedVitrin: boolean;

  latestUpdateProducts: string | null;

  showData: boolean;

  createdAt: string;
  updatedAt: string;

  daysOfWeek: Record<string, unknown>;

  startWorkTime: string;
  endWorkTime: string;

  postalCode: string | null;

  trademarkId: number | null;
  trademarkStatus: string | null;

  isGoldenVerified: boolean;

  scores: string;

  logo: FileEntity | null;

  businessLicense: FileEntity | null;

  guild: unknown | null;

  user: {
    roles: string[];
    userType: string;
    status: number;
    trustLevel: string[];

    firstName: string;
    lastName: string;
    phone: string;

    cityId: number;
    countryId: number;

    scores: string;

    file: FileEntity | null;

    city: {
      id: number;
      name: string;
      locationType: string;
    };

    country: {
      id: number;
      name: string;
      locationType: string;
    };

    citiesRow: {
      id: number;
      name: string;
      locationType: string;
    }[];
  };

  vitrinCover: FileEntity | null;

  level: {
    id: number;
    name: string;
    scores: string;
    status: boolean;

    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;

    file: FileEntity | null;
  };

  businessActivity: unknown | null;

  categoriesRow: {
    id: number;
    type: string;

    isRequire: boolean;
    removeBackgroundImage: boolean;
    displayMegaMenu: boolean;

    class: string | null;

    name: string;

    isActive: boolean;
    priority: number;

    parentId: number | null;

    fileId: number | null;

    reservation: boolean;

    iconName: string | null;

    file: FileEntity | null;
  }[];

  citiesRow: {
    id: number;
    name: string;
    locationType: string;
  }[];

  groupCategoriesRow: {
    id: number;

    categoryId: number | null;

    roles: string[];

    isRequire: boolean;

    name: string;

    isActive: boolean;

    priority: number;

    parentId: number | null;

    fileId: number | null;

    file: FileEntity | null;
  }[];

  fieldOfActivity: {
    id: number;

    categoryId: number | null;

    roles: string[];

    isRequire: boolean;

    name: string;

    isActive: boolean;

    priority: number;

    parentId: number | null;

    fileId: number | null;

    file: FileEntity | null;
  } | null;
}
export type VitrinDetailResponse = ApiResponse<VitrinDetail>;
