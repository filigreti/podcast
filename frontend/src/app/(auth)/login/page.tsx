"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginValidator,
  TLoginCredentialsValidator,
} from "@/validators/auth-validator";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TLoginCredentialsValidator>({
    resolver: zodResolver(LoginValidator),
  });

  const onSubmit = async ({ email, password }: TLoginCredentialsValidator) => {
    setIsPending(true);
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.status === 401) {
      toast.error(response.error);
      setIsPending(false);
      return;
    }

    if (response?.status === 200) {
      toast.success("Welcome");
      setIsPending(false);
      router.push("/dashboard/discover");
    }
  };
  return (
    <>
      <div className=" font-sans mt-1">
        <div className="flex items-center justify-between">
          <h3 className=" text-[1.1rem] font-sans leading-none tracking-tight ">
            Login Now
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mt-6">User Credentials</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4 mt-4">
          <div className="flex flex-col space-y-1.5">
            <Input
              {...register("email")}
              id="register-email"
              placeholder="Enter Email"
              className={cn(
                {
                  "focus-visible:ring-red-500 mt-1": errors.email,
                },
                `h-12 dark:bg-transparent card-shadow dark:older:text-gray-500  font-sans font-medium `
              )}
            />
            {errors?.email && (
              <p className="text-xs mt-1 text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Input
              {...register("password")}
              id="register-password"
              type="password"
              placeholder="Enter Password"
              className={cn(
                {
                  "focus-visible:ring-red-500 mt-1": errors.password,
                },
                `h-12 dark:bg-transparent card-shadow dark:placeholder:text-gray-500  font-sans font-medium `
              )}
            />
            {errors?.password && (
              <p className="text-xs mt-1 text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className=" flex items-center justify-between mt-6 ">
          <Button
            loading={isPending}
            type="submit"
            className=" font-sans px-8 dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:border-white dark:hover:border-[1px] dark:hover:text-white h-12 "
            variant="default"
          >
            Login
          </Button>
        </div>
        <p className=" text-muted-foreground mt-8 pb-2 font-sans text-xs">
          Don't have an account ?{" "}
          <a href="/register" className=" underline">
            Register
          </a>
        </p>
      </form>
    </>
  );
};

export default Login;
