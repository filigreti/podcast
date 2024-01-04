"use client";
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
        <main className="flex-1">
          <MarginWidthWrapper>
            <Header width={number} />
            <HeaderMobile />
            <PageWrapper>{children}</PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
    </section>
  );
};

export default SidebarWrapper;
