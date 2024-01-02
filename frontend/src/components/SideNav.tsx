"use client"

import React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SIDE_NAV_ITEMS } from "@/lib/constants"
import { SidebarNavItem } from "@/lib/sidebartypes"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"

const SideNav = ({ width }: { width: number }) => {
  let cookieValue
  if (typeof document !== "undefined") {
    cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)react-resizable-panels:layout\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    )
  }

  let myArray = JSON.parse(cookieValue)

  let valueAtIndex0 = myArray[0]

  return (
    <div
      style={{ width: `${valueAtIndex0}%` }}
      className={cn(
        ` bg-secondary-foreground h-screen flex-1 fixed  border-zinc-200 hidden md:flex`
      )}
    >
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start  border-b border-zinc-50 border-opacity-10 h-16 w-full"
        >
          {width > 9.5 ? (
            <div className=" text-[1.2rem] tracking-widest font-lombok px-4">
              Poddi
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <Icon
                icon="simple-icons:podcastaddict"
                className="text-gray-100 h-6 w-6"
              />
            </div>
          )}
        </Link>

        <div className="flex flex-col space-y-2    ">
          {SIDE_NAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} width={width} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SideNav

const MenuItem = ({ item, width }: { item: SidebarNavItem; width: number }) => {
  const pathname = usePathname()
  return (
    <div
      className={cn(
        ` ${item.path === pathname ? "halo" : ""}`,
        `${width > 9.5 ? "px-2" : "flex items-center justify-center"}`
      )}
    >
      <Link
        href={item.path}
        className={`flex flex-row space-x-2   items-center p-2 rounded-lg`}
      >
        <div
          className={cn(
            item.path === pathname && "!bg-blue-600",
            `h-7 w-7 rounded-sm flex items-center justify-center bg-background  `
          )}
        >
          <Icon icon={item.icon} className="text-gray-100 h-3 w-3" />
          {/* {React.cloneElement(item.icon, {
            className: cn("text-white w-3.5 h-3.5 aspect-square"),
          })} */}
        </div>

        {width > 9.5 && (
          <span className="font-semibold text-xs flex">{item.title}</span>
        )}
      </Link>
    </div>
  )
}
