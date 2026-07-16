export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/users/login",
    ME: "/users/me",
  },

  CUSTOMER_CLUB: {
    SUMMARY: "/customer-club/summary",
    SUMMARY_VITRIN: (id: number) => `/customer-club/summary-user-vitrin/${id}`,
  },

  ACTIVITIES: {
    LIST: "/recent-activities",
  },

  LEVELS: {
    LIST: "/levels",
  },

  VITRINS: {
    LIST: "/users/vitrin/all-user",
    DETAIL: (id: number) => `/users/vitrin/${id}`,
  },
};
