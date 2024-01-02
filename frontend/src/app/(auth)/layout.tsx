import React from "react"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="line-body relative font-sans">
      <div className="lines z-50">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="h-screen z-50 font-roboto  flex justify-between items-center relative  dark:text-white px-[7rem] 2xl:container ">
        <div className=" text-[10rem] font-lombok">Poddi</div>
        <div className="card-shadow bg-foreground w-full h-auto max-w-[23rem] font-sans  rounded-[1.2rem] p-[2rem]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
