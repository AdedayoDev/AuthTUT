"use client";

import FormLayout from "@/app/components/layouts/FormLayout";
import { AuthButton, FormButton } from "@/app/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { formRegisterSchema } from "@/schemas/RegisterSchema";
import z from "zod";

type FormData = z.infer<typeof formRegisterSchema>;

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formRegisterSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    
  };

  return (
    <FormLayout title="Create an account" subtitle="Sign up to get started">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-sm text-gray-300 mb-1 block">Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className={`w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-700 focus:ring-teal-500"}`}
          />
          {errors.name && <p className="text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm text-gray-300 mb-1 block">Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className={`w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-700 focus:ring-teal-500"}`}
          />
          {errors.email && (
            <p className="text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-300 mb-1 block">Password</label>
          <input
            {...register("password")}
            type="Password"
            placeholder="*************"
            className={`w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-700 focus:ring-teal-500"}`}
          />
          {errors.password && (
            <p className="text-red-400">{errors.password.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-300 mb-1 block">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            type="Password"
            placeholder="*************"
            className={`w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-gray-700 focus:ring-teal-500"}`}
          />
          {errors.confirmPassword && (
            <p className="text-red-400">{errors.confirmPassword.message}</p>
          )}
        </div>
        <FormButton className="" text="Sign Up" type="submit" />
      </form>
      {/* Divider */}
      <div className="my-6 flex items-center gap-2">
        <div className="flex-1 h-px bg-gray-800" />
        <span className="text-xs text-gray-500 ">OR CONTINUE WITH</span>
        <div className="flex-1 h-px bg-gray-800" />
      </div>
      {/* Social Auth */}
      <div className="grid grid-cols-2 gap-3">
        <AuthButton type="button" className="">
          <FcGoogle className="w-5 h-5" /> Google
        </AuthButton>

        <AuthButton type="button" className="">
          <FaGithub className="w-5 h-5" /> Github
        </AuthButton>
      </div>
      {/* Footer */}
      <div className="text-sm text-gray-400 text-center mt-6 "></div>
      Already have an account?{" "}
      <Link href="/sign-in" className="text-teal-400 hover:text-teal-300">
        Sign In
      </Link>
    </FormLayout>
  );
};

export default page;
