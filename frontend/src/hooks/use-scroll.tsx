import { useCallback, useEffect, useState } from "react"

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    setScrolled(scrollTop > threshold)
  }, [threshold])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    handleScroll()
  }, [handleScroll])

  return scrolled
}
