import { UserRole } from "./role.types";

export interface FileEntity {
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
  file: FileEntity | null;
}

export interface Currency {
  id: number;
  unit: string;
  name: string;
  symbol: string;
  slug?: string;
  currencyPrecision: number;
  priority: number;
  status: "active" | "inactivate";
  countryId: number | null;
  logoId?: number | null;
  show?: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: string | null;
}

export interface Language {
  id: number;
  name: string;
  code: string;
  flag: string;
  direction: "ltr" | "rtl";
  calendar: string;
  status: boolean;
  isDefault: boolean;
  semaphore: null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface City {
  id: number;
  name: string;
  locationType: string;
}

export interface Country {
  id: number;
  name: string;
  currency: Currency;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  nationalCode: string | null;
  birthDate: string | null;
  latestUpdateExcel: string | null;
  userUpdateExcelId: number | null;
  latestUpdateProducts: string | null;
  lastVisit: string;
  affiliateCode: string | null;
  phone: string;
  email: string;
  reasonChangeStatus: string | null;
  iranianAuthStatus: boolean;
  verifiedEmail: boolean;
  statusStore: "OPEN" | "CLOSE"; // بر اساس مقدار OPEN درون جیسون
  subscriptionExpiresAt: string;
  defaultRole: UserRole;
  faceValidationStatus: string | null;
  nationalIdCardStatus: string | null;
  coins: string;
  scores: string;
  defaultLangId: number;
  defaultCurrencyId: number;
  fileId: number | null;
  file: FileEntity | null;
  city: City;
  country: Country;
  faceValidationPicture: string | null;
  nationalIdCardPicture: string | null;
  level: Level;
  defaultLang: Language;
  defaultCurrency: Currency;
  roles: UserRole[];
  userType: "natural" | "legal"; // بر اساس مقدار natural درون جیسون
  status: number;
  trustLevel: string[];
}
