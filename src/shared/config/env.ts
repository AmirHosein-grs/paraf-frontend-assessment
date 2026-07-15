import { z } from "zod";

// ۱. تعریف دقیق اسکیمای اعتبارسنجی
const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_IMAGE_BASE_URL: z.string().url(),
});

// ۲. پاس دادن مستقیم متغیرها به جای کل process.env
const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_IMAGE_BASE_URL: process.env.NEXT_PUBLIC_IMAGE_BASE_URL,
});

if (!parsedEnv.success) {
  console.error(
    "Environment Validation Failed:",
    parsedEnv.error.flatten().fieldErrors,
  );
  throw new Error("Invalid environment variables.");
}

export const env = {
  API_BASE_URL: parsedEnv.data.NEXT_PUBLIC_API_BASE_URL,
  IMAGE_BASE_URL: parsedEnv.data.NEXT_PUBLIC_IMAGE_BASE_URL,
} as const;
