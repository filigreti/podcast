import { cookies } from "next/headers";
import dynamic from "next/dynamic";
import PageLoader from "@/components/PageLoader";
import { BreakpointProvider } from "@/providers/BreakpointProvider";

const SidebarWrapper = dynamic(
  () => import("../../components/SidebarWrapper"),
  {
    loading: () => <PageLoader />,
    ssr: false,
  }
);

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

  return (
    <>
      {/* <section className=" text-white">
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
      </section> */}
      <BreakpointProvider>
        <SidebarWrapper number={number}>{children}</SidebarWrapper>
      </BreakpointProvider>
    </>
  );
}
