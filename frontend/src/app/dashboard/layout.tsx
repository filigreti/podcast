import SidebarWrapper from "@/components/SidebarWrapper"
import { cookies } from "next/headers"

function getDefaultLayout() {
  const layout = cookies().get("react-resizable-panels:layout")
  console.log("layout", layout)
  if (layout) {
    return JSON.parse(layout.value)
  }
  return [12, 88]
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const defaultLayout = getDefaultLayout()

  return (
    <>
      {/* <section className=" text-white">
        <div className="flex ">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </section> */}

      <SidebarWrapper defaultLayout={defaultLayout}>{children}</SidebarWrapper>
    </>
  )
}
