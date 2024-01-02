"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/validators/auth-validator"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter()
  const { username, password } = AuthCredentialsValidator.shape
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
        <div className="flex items-center justify-between">
          <h3 className=" text-[1.1rem] font-sans leading-none tracking-tight ">
            Login Now
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mt-6">User Credentials</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Input
              id="name"
              placeholder="Enter Email"
              className="mt-3 h-12 dark:bg-transparent card-shadow dark:placeholder:text-gray-500  font-sans font-medium "
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Input
              id="name"
              type="password"
              placeholder="Enter Password"
              className=" h-12 dark:bg-transparent card-shadow dark:placeholder:text-gray-500  font-sans font-medium "
            />
          </div>
        </div>

        <div className=" flex items-center justify-between mt-6 ">
          <Button
            className=" font-sans px-8 dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:border-white dark:hover:border-[1px] dark:hover:text-white h-12 "
            variant="default"
          >
            Login Now
          </Button>
          <a href="#" className=" underline font-sans text-xs">
            Forgot Password
          </a>
        </div>
        <p className=" text-muted-foreground mt-8 pb-2 font-sans text-xs">
          Don't have an account ?{" "}
          <a href="/register" className=" underline">
            Sign Up
          </a>
        </p>

        {/* 
        <p className=" text-xs mt-6 font-sans text-gray-200">
          No account ?{" "}
          <a href="/register" className=" underline font-sans text-xs">
            Sign Up
          </a>
        </p> */}
      </form>
    </>
  )
}

export default Login
