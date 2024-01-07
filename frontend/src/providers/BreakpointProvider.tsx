"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

const BreakpointContext = createContext(null);

export const BreakpointProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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

  return (
    <BreakpointContext.Provider value={currentBreakpoint}>
      <div>
        <div className="fixed left-0 bottom-0 text-white z-50">
          {currentBreakpoint}
        </div>
        {children}
      </div>
    </BreakpointContext.Provider>
  );
};

export const useBreakpoint = () => {
  const context = useContext(BreakpointContext);
  if (!context) {
    throw new Error("useBreakpoint must be used within a BreakpointProvider");
  }
  return context;
};
