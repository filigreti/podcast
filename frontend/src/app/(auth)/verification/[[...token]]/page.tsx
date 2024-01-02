"use client"
import { useParams } from "next/navigation"
import VerifyEmailStatic from "@/components/VerifyEmailStatic"
import VerifyEmailToken from "@/components/VerifyEmailToken"

export default function Page() {
  const params = useParams()

  if (Object.keys(params).length === 0 && !params.hasOwnProperty("token")) {
    return (
      <>
        <VerifyEmailStatic />
      </>
    )
  }

  return (
    <>
      <VerifyEmailToken token={params.token[0]} />
    </>
  )
}
