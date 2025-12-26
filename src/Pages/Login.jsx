import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../Schemas/LoginSchema";

import { login } from "../Services/AuthServices";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function sendData(userData) {
    try {
      setLoading(true);
      setApiError(null);

      const data = {
        email: userData.email.trim(),
        password: userData.password.trim(),
      };

      const res = await login(data);

      if (res.message === "success") {
        navigate("/"); // أو الصفحة الرئيسية بعد تسجيل الدخول
      } else {
        setApiError(res.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setApiError("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">
        Welcome Back!
      </h1>

      <div className="bg-white border rounded-2xl shadow-xl py-10 px-8 w-full max-w-md">
        {apiError && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center text-sm">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit(sendData)} className="flex flex-col gap-6">
          <Input
            label="Email"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            {...register("email")}
            variant="bordered"
          />

          <Input
            label="Password"
            type="password"
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            {...register("password")}
            variant="bordered"
          />

          <Button
            isLoading={loading}
            disabled={loading}
            type="submit"
            className="mt-4 bg-black text-white rounded-xl py-3 text-lg hover:bg-gray-800 transition-all"
          >
            {loading ? "Logging in..." : "Submit"}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          If you don't have an account, please{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign Up Now
          </span>
        </p>
      </div>
    </div>
  );
}