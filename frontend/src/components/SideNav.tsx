"use client";

import React, { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDE_NAV_ITEMS } from "@/lib/constants";
import { SidebarNavItem } from "@/lib/sidebartypes";
import { Icon } from "@iconify/react";
import { cn, getCurrentBreakpoints } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { setCookie, getCookie } from "cookies-next";

const SideNav = () => {
  const cookieName = "react-resizable-panels:layout";
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const validCookie = getCookie(cookieName);
    console.log(validCookie, "valid");

    if (validCookie) {
      setWidth(parseInt(validCookie, 10));
    } else {
      setWidth(9);
    }
    setCookie(cookieName, 9);
  }, []);

  return (
    <div
      style={{ width: `${width}rem` }}
      className={cn(
        `bg-secondary-foreground h-screen flex-1 fixed border-zinc-200 hidden md:flex `
      )}
    >
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3  md:justify-start border-b border-zinc-50 border-opacity-10 h-[3.75rem] w-full"
        >
          <div className="text-[1.2rem] tracking-widest font-lombok flex items-center w-full justify-between pl-4">
            <div>Poddi</div>
            <Icon
              icon="solar:round-double-alt-arrow-left-linear"
              className="w-4 h-4 mb-[1px] -mr-2"
            />
          </div>
          {/* {width > 9.5 ? (
            <div className="text-[1.2rem] tracking-widest font-lombok px-4">
              Poddi
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <Icon
                icon="simple-icons:podcastaddict"
                className="text-gray-100 h-6 w-6"
              />
            </div>
          )} */}
        </Link>

        <div className="flex flex-col space-y-2">
          {SIDE_NAV_ITEMS.map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SidebarNavItem }) => {
  const pathname = usePathname();

  return (
    <div className={cn(`${item.path === pathname ? "halo" : ""}`)}>
      <Link
        href={item.path}
        className={`flex flex-row space-x-2 items-center p-2 rounded-lg`}
      >
        {/* className={cn(width > 9.5 && " pointer-events-none")} */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                className={cn(
                  item.path === pathname && "!bg-blue-600",
                  `h-7 w-7 rounded-sm flex items-center justify-center bg-background`
                )}
              >
                <Icon icon={item.icon} className="text-gray-100 h-3 w-3" />
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              sideOffset={-2}
              className="text-white bg-[#2D2D34]"
            >
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span className="font-semibold text-xs flex">{item.title}</span>
        {/* {width > 9.5 && (
         
        )} */}
      </Link>
    </div>
  );
};
