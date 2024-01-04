"use client";

import React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import TopHeader from "./TopHeader";
import { Icon } from "@iconify/react";

const Header = ({ width }: { width: Number }) => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky right-0 top-0 z-30   `,
        {
          " border-gray-200  bg-primary bg-opacity-20  backdrop-blur-lg":
            scrolled,
          " border-gray-200 ": selectedLayout,
        },
        width == 10 ? "md:ml-[10.5rem]" : "md:ml-[3.5rem]"
      )}
    >
      <div className="flex h-[3.75rem] md:justify-start justify-center   items-center w-full ">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center top-[20px] md:hidden absolute"
          >
            <div className=" text-[1.2rem] tracking-widest font-lombok ml-4">
              <Icon
                icon="simple-icons:podcastaddict"
                className="text-gray-100 h-6 w-6"
              />
            </div>
          </Link>
        </div>
        <div className="md:flex md:space-x-4 w-full md:px-4 ">
          <TopHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
