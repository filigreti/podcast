import { CrossCircledIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { CirclesWithBar } from "react-loader-spinner"
import { Button } from "./ui/button"

const VerifyEmailToken = ({ token }: { token: string }) => {
  const router = useRouter()

  const { data, isLoading, isError } = useQuery({
    queryKey: ["verify-email", token],
    queryFn: async () => {
      const res = await axios.get(`/api/auth/verify-email?token=${token}`)
      console.log(res, "dhata")
      return res.data
    },
  })

  console.log(data, "data check")
  console.log(isError, "errors check")

  if (isLoading) {
    return (
      <div className=" flex items-center justify-center h-[20rem]">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <div className=" flex flex-col items-center justify-center">
          <CrossCircledIcon className=" w-16 h-16" />
        </div>
        <p className="text text-center  text-gray-300 mt-6  capitalize ">
          There was a problem
        </p>

        <p className="text-muted-foreground text-sm text-center mt-3">
          This token is invalid or might be expired. <br /> Please try{" "}
          <a className="text-green-500" href="/login">
            Login
          </a>{" "}
          again
        </p>
      </div>
    )
  }

  if (data) {
    return (
      <div>
        <div className=" flex flex-col items-center justify-center">
          <EnvelopeClosedIcon className=" w-16 h-16" />
        </div>
        <p className="text text-center  text-gray-300 mt-6  capitalize ">
          {data.data.data}
        </p>
        <p className=" text-sm text-center my-4 text-muted-foreground mt-1">
          You are ready to move to <br /> the next step
        </p>

        <div className="flex item-center justify-center">
          <Button
            onClick={() => {
              router.push("/login")
            }}
            className=" text-center font-sans px-8 dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:border-white dark:hover:border-[1px] dark:hover:text-white h-12 "
            variant="default"
          >
            Proceed to Login
          </Button>
        </div>
      </div>
    )
  }
}

export default VerifyEmailToken
