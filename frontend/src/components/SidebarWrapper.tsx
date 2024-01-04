"use client";
import { cn } from "@/lib/utils";
import MarginWidthWrapper from "./MarginWidthWrapper";
import PageWrapper from "./PageWrapper";
import SideNav from "./SideNav";
import Header from "./headers/Header";
import HeaderMobile from "./headers/HeaderMobile";

const SidebarWrapper = ({
  children,
  number,
}: {
  children: React.ReactNode;
  number: number;
}) => {
  return (
    <section className=" text-white">
      <div className="flex ">
        <SideNav size={number} />
        <main className="flex-1 min-[1400px]:container">
          <MarginWidthWrapper>
            <Header width={number} />
            <HeaderMobile />
            <PageWrapper>
              <main
                className={cn(
                  number == 10 ? "md:ml-[10.5rem]" : "md:ml-[3.5rem]"
                )}
              >
                {children}
              </main>
            </PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
    </section>
  );
};

export default SidebarWrapper;
