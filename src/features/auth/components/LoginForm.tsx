"use client";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          {...register("phone")}
          type="text"
          placeholder="Phone number"
          className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>

      {loginMutation.error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">
            {loginMutation.error.message || "An error occurred during login."}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="w-full bg-black text-white rounded-md px-4 py-2 hover:bg-neutral-800 disabled:bg-gray-400 transition-colors"
      >
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
