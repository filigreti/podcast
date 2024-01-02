"use client"

import React from "react"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import useScroll from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"

const Header = () => {
  const scrolled = useScroll(5)
  const selectedLayout = useSelectedLayoutSegment()

  return (
    <div
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all `, {
        " border-gray-200  backdrop-blur-lg": scrolled,
        " border-gray-200 ": selectedLayout,
      })}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <div className=" text-[1.2rem] tracking-widest font-lombok">
              Poddi
            </div>
          </Link>
          <div className="">wakanda</div>
        </div>
        <div className="hidden md:block">
          <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
            <span className="font-semibold text-sm">HQ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
