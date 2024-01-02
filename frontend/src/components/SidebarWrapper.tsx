"use client"

import MarginWidthWrapper from "./MarginWidthWrapper"
import PageWrapper from "./PageWrapper"
import SideNav from "./SideNav"
import Header from "./headers/Header"
import HeaderMobile from "./headers/HeaderMobile"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable"
import { useRef, useState } from "react"

const SidebarWrapper = ({
  children,
  defaultLayout = [12, 88],
}: {
  children: React.ReactNode
  defaultLayout: number[]
}) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
  }
  const [width, setWidth] = useState(12)
  const panelGroupRef = useRef(null)

  const handleResize = (size: number) => {
    setWidth(size)
    if (size < 9.5) {
      //eslint-disable-next-line @typescript-eslint
      panelGroupRef.current.resize(3)
    }
  }

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border text-white"
      onLayout={onLayout}
    >
      <ResizablePanel
        ref={panelGroupRef}
        defaultSize={defaultLayout[0]}
        maxSize={12}
        minSize={3}
        onResize={handleResize}
      >
        <SideNav width={width} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]}>
        <main className="flex-1">
          <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            <PageWrapper>{children}</PageWrapper>
          </MarginWidthWrapper>
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default SidebarWrapper
