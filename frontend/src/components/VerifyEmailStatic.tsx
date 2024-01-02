import { EnvelopeClosedIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"

const VerifyEmailStatic = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center">
        <EnvelopeOpenIcon className=" w-16 h-16" />
      </div>
      <p className="text  text-gray-300 mt-6 text-center  capitalize ">
        Verify your account
      </p>
      <p className=" text-sm text-muted-foreground mt-3 text-center">
        Account activation link has been sent to the <br /> e-mail address you
        provided
      </p>

      <p className=" text-muted-foreground text-center mt-8 pb-2 font-sans text-xs">
        Didn't receive the email ?{" "}
        <a href="/register" className=" underline">
          Resend
        </a>
      </p>
    </div>
  )
}

export default VerifyEmailStatic
