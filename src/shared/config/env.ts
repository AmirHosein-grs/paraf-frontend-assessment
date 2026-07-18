const serverEnv = {
  BACKEND_API_URL: process.env.BACKEND_API_URL,
  IMAGE_BASE_URL: process.env.NEXT_PUBLIC_IMAGE_BASE_URL,
};

function assertServerEnv() {
  const missing = Object.entries(serverEnv)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  if (missing.length > 0) {
    throw new Error(`Missing required server env vars: ${missing.join(", ")}`);
  }
}

if (typeof window === "undefined") {
  assertServerEnv();
}

export const env = {
  BACKEND_API_URL: serverEnv.BACKEND_API_URL as string,
  IMAGE_BASE_URL: serverEnv.IMAGE_BASE_URL,
};
