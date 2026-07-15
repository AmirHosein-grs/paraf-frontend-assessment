"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginSchema } from "../schemas/login.schema";

import { useLogin } from "../hooks/useLogin";

export function LoginForm() {
  const loginMutation = useLogin();

  const form = useForm<LoginSchema>({
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Phone</label>

        <input
          {...form.register("phone")}
          type="text"
          placeholder="Phone number"
          className="border rounded-md p-2 w-full"
        />

        {form.formState.errors.phone && (
          <p className="text-sm text-red-500">
            {form.formState.errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label>Password</label>

        <input
          {...form.register("password")}
          type="password"
          placeholder="Password"
          className="border rounded-md p-2 w-full"
        />

        {form.formState.errors.password && (
          <p className="text-sm text-red-500">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>

      {loginMutation.error && (
        <p className="text-sm text-red-500">Login failed</p>
      )}

      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="bg-black text-white rounded-md px-4 py-2"
      >
        {loginMutation.isPending ? "Loading..." : "Login"}
      </button>
    </form>
  );
}
