import { API_ENDPOINTS } from "@/shared/constants/api-endpoints";
import { forwardJson } from "@/shared/api/route-client";

export async function GET() {
  return forwardJson(API_ENDPOINTS.VITRINS.LIST);
}
