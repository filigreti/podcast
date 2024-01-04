"use client";

import React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import TopHeader from "./TopHeader";

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
        width == 10 ? "ml-[10.5rem]" : "ml-[3.5rem]"
      )}
    >
      <div className="flex h-[3.75rem]  items-center w-full ">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <div className=" text-[1.2rem] tracking-widest font-lombok">
              Poddi
            </div>
          </Link>
        </div>
        <div className="flex space-x-4 w-full px-4 ">
          <TopHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
