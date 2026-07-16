import { API_ENDPOINTS } from "@/shared/constants/api-endpoints";
import { forwardJson } from "@/shared/api/route-client";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_: Request, { params }: Props) {
  const { id } = await params;

  return forwardJson(API_ENDPOINTS.CUSTOMER_CLUB.SUMMARY_VITRIN(Number(id)));
}
