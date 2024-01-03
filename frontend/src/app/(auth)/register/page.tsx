"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/validators/auth-validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const Register = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const onSubmit = ({
    email,
    password,
    username,
  }: TAuthCredentialsValidator) => {
    registerUser({ username, email, password })
  }

  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: async ({
      username,
      email,
      password,
    }: TAuthCredentialsValidator) => {
      await axios.post("/api/auth/register", { username, email, password })
    },
    onSuccess: (data) => {
      console.log(data, "dhata")
      toast.success("User created successfully")
      reset()
      router.push("/verification")
    },
    onError: (err: any, variables, context) => {
      toast.error(err.response.statusText)
    },
  })

  return (
    <>
      <div className=" font-sans mt-1">
        <h3 className=" text-[1.3rem] font-sans leading-none tracking-tight ">
          Sign Up
        </h3>
        <p className="text-sm text-muted-foreground mt-6">User Credentials</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Input
              {...register("username")}
              id="register-username"
              placeholder="Enter Username"
              className={cn(
                {
                  "focus-visible:ring-red-500 mt-1": errors.username,
                },
                `mt-3 h-12 dark:bg-transparent card-shadow dark:placeholder:text-gray-500  font-sans font-medium `
              )}
            />
            {errors?.username && (
              <p className="text-xs mt-1 text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>
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
            Sign Up
          </Button>
        </div>
        <p className=" text-muted-foreground mt-8 pb-2 font-sans text-xs">
          Already have an account ?{" "}
          <a href="/login" className=" underline">
            Login
          </a>
        </p>
      </form>
    </>
  )
}

export default Register
