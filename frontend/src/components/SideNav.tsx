"use client";
import React, { useEffect, useState, useTransition, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDE_NAV_ITEMS } from "@/lib/constants";
import { SidebarNavItem } from "@/lib/sidebartypes";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getCookie } from "cookies-next";
import { setCookie } from "@/app/dashboard/actions";
import { motion, useAnimation } from "framer-motion";

const SideNav = ({ size }: { size: number }) => {
  const cookieName = "sidebar-nav";
  const [width, setWidth] = useState<string>("");
  const initialWidthRef = useRef<string>("");
  const controls = useAnimation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const validCookie = getCookie(cookieName);

      initialWidthRef.current = validCookie || "10";

      setTimeout(() => {
        setWidth(initialWidthRef.current);
      }, 50);
    }
  }, []);

  let [isPending, startTransition] = useTransition();

  const toggle = () => {
    const newWidth = width === "3" ? "10" : "3";
    setWidth(newWidth);
    setCookie(cookieName, newWidth);
    controls.start({ width: `${size || newWidth}rem` });
  };

  return (
    <motion.div
      style={{ width: `${size || width}rem` }}
      className={cn(
        `bg-secondary-foreground h-screen flex-1 fixed border-zinc-200 hidden md:flex `
      )}
    >
      <div className="flex flex-col space-y-6 w-full">
        <div className="border-b border-zinc-50 border-opacity-10 flex items-center justify-between h-[3.5rem]">
          <Link
            href="/"
            className="flex flex-row space-x-3  md:justify-start   w-full"
          >
            {width === "10" ? (
              <div className="text-[1.2rem] tracking-widest font-lombok flex items-center w-full justify-between pl-3">
                <div>Poddi</div>
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
          <Icon
            onClick={() => startTransition(toggle)}
            icon="solar:round-double-alt-arrow-left-linear"
            className="w-4 h-4 mb-[1px] -mr-2 hover:text-blue-500 cursor-pointer "
          />
        </div>

        <div className="flex flex-col space-y-2">
          {SIDE_NAV_ITEMS.map((item, idx) => (
            <MenuItem key={idx} item={item} width={width} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MenuItem = ({ item, width }: { item: SidebarNavItem; width: string }) => {
  const pathname = usePathname();

  return (
    <div className={cn(`${item.path === pathname ? "halo" : ""}`)}>
      <Link
        href={item.path}
        className={`flex flex-row space-x-2 items-center p-2 rounded-lg`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className={cn(width == "10" && " pointer-events-none")}
            >
              <div
                className={cn(
                  item.path === pathname && "!bg-blue-600",
                  `h-7 w-7 rounded-sm flex items-center justify-center bg-background`
                )}
              >
                {typeof item.icon === "string" ? (
                  <Icon icon={item.icon} className="text-gray-100 h-3 w-3" />
                ) : (
                  React.cloneElement(item.icon as React.ReactElement, {
                    className: "text-gray-100 h-3 w-3",
                  })
                )}
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
        {width === "10" && (
          <span className="font-semibold text-xs flex">{item.title}</span>
        )}
      </Link>
    </div>
  );
};

export default SideNav;
