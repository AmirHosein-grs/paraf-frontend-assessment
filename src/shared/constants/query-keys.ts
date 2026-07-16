export const QUERY_KEYS = {
  auth: {
    me: ["auth", "me"] as const,
  },

  dashboard: {
    summary: ["dashboard", "summary"] as const,
  },

  customerClub: {
    summary: ["customer-club", "summary"] as const,
  },

  activities: {
    list: ["activities"] as const,
  },

  levels: {
    list: ["levels"] as const,
  },

  vitrins: {
    list: ["vitrins"] as const,
    detail: (id: number) => ["vitrins", id] as const,
  },
};
