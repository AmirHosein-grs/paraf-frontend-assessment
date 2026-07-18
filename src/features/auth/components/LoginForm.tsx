"use client";

import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../schemas/login.schema";
import { useLogin } from "../hooks/useLogin";

export function LoginForm() {
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginSchema) => {
    loginMutation.mutate(values);
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>ورود به حساب کاربری</CardTitle>
          <CardDescription>
            برای ورود، شماره موبایل و رمز عبور خود را وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="phone">شماره موبایل</FieldLabel>
                <Input
                  dir="ltr"
                  id="phone"
                  placeholder="989123456789"
                  type="tel"
                  inputMode="numeric"
                  {...register("phone")}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </Field>

              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
                  <a
                    href="#"
                    className="inline-block text-xs underline-offset-4 hover:underline text-muted-foreground"
                  >
                    رمز عبور را فراموش کرده‌اید؟
                  </a>
                </div>
                <Input
                  dir="ltr"
                  id="password"
                  type="password"
                  {...register("password")}
                  className={errors.password ? "border-red-500" : ""}
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </Field>

              {loginMutation.error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md mt-2">
                  <p className="text-sm text-red-600">
                    {(loginMutation.error.message === "User Not Found" &&
                      " کاربر پیدا نشد ") ||
                      "خطایی هنگام ورود رخ داد"}
                  </p>
                  <p className="text-sm text-red-600">
                    {loginMutation.error.code}
                  </p>
                </div>
              )}

              <Field className="flex flex-col gap-2 mt-4">
                <Button
                  type="submit"
                  disabled={loginMutation.isPending}
                  className="w-full"
                >
                  {loginMutation.isPending ? "در حال ورود ..." : "ورود"}
                </Button>

                <FieldDescription className="text-center mt-2">
                  حساب کاربری ندارید؟{" "}
                  <a
                    href="#"
                    className="font-medium text-primary hover:underline"
                  >
                    ثبت نام کنید
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
