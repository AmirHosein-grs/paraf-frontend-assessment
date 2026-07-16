import axios from "axios";

import type { ApiError } from "./error.types";

export function handleApiError(error: unknown): never {
  if (!axios.isAxiosError(error)) {
    throw {
      status: 500,
      message: "Unexpected error",
    } satisfies ApiError;
  }

  const response = error.response;

  throw {
    status: response?.status ?? 500,
    code: response?.data?.error?.code,
    message:
      response?.data?.error?.message ??
      response?.data?.message ??
      "Unexpected error",
  } satisfies ApiError;
}
