"use client";
import { cn } from "@/lib/utils";
import MarginWidthWrapper from "./MarginWidthWrapper";
import PageWrapper from "./PageWrapper";
import SideNav from "./SideNav";
import Header from "./headers/Header";
import HeaderMobile from "./headers/HeaderMobile";
import { motion } from "framer-motion";
import { useBreakpoint } from "@/hooks/use-breakpoints";

const SidebarWrapper = ({
  children,
  number,
}: {
  children: React.ReactNode;
  number: number;
}) => {
  let breakpoint = useBreakpoint();
  const threshold = breakpoint === null || breakpoint === "sm";

  return (
    <section className=" text-white">
      <div className="flex ">
        <SideNav size={number} />
        <main className="flex-1 min-[1700px]:container">
          <MarginWidthWrapper>
            <Header width={number} />
            <HeaderMobile />
            <PageWrapper>
              <motion.main
                initial={{ marginLeft: "10.5rem" }}
                animate={{
                  marginLeft: threshold
                    ? 0
                    : number === 10
                    ? "10.5rem"
                    : "3rem",
                }}
                transition={{ duration: 0.25, ease: [0.45, 0, 0.55, 1] }}
                className={cn(
                  number == 10 ? "md:ml-[10.5rem]" : "md:ml-[3rem]",
                  "mt-3"
                )}
              >
                {children}
              </motion.main>
            </PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
    </section>
  );
};

export default SidebarWrapper;
