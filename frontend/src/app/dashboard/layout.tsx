import MarginWidthWrapper from "@/components/MarginWidthWrapper";
import PageWrapper from "@/components/PageWrapper";
import SideNav from "@/components/SideNav";
import SidebarWrapper from "@/components/SidebarWrapper";
import Header from "@/components/headers/Header";
import HeaderMobile from "@/components/headers/HeaderMobile";
import { cookies } from "next/headers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const width = cookieStore.get("sidebar-nav");
  let number;
  if (width?.value) {
    number = parseInt(width.value);
  } else {
    number = 10;
  }
  console.log(width?.value);
  return (
    <>
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

      {/* <SidebarWrapper defaultLayout={defaultLayout}>{children}</SidebarWrapper> */}
    </>
  );
}
