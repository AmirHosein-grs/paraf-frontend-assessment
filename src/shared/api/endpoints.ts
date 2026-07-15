export const ENDPOINTS = {
  LOGIN: "/users/login",

  ME: "/users/me",

  VITRINS: "/users/vitrin/all-user",

  VITRIN_DETAILS: (id: number | string) => `/users/vitrin/${id}`,

  LEVELS: "/levels",

  CUSTOMER_CLUB_SUMMARY: "/customer-club/summary",

  CUSTOMER_CLUB_SUMMARY_VITRIN: (id: number | string) =>
    `/customer-club/summary-user-vitrin/${id}`,

  RECENT_ACTIVITIES: "/recent-activities",
} as const;
