import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().min(12, "شماره تماس الزامی است"),

  password: z.string().min(8, "رمز عبور الزامی است"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
