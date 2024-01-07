import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { useEffect, useState } from "react";

const fullConfig = resolveConfig(tailwindConfig);

export function useBreakpoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const breakpoints = Object.keys(fullConfig.theme.screens);
      const newBreakpoint = breakpoints.reverse().find((key) => {
        return (
          window.innerWidth >= +fullConfig.theme.screens[key].replace("px", "")
        );
      });

      setCurrentBreakpoint(newBreakpoint || null);
    };

    // Initial call to set the breakpoint
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return currentBreakpoint;
}
