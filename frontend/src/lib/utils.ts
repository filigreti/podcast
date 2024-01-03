import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fullConfig = resolveConfig(tailwindConfig);

export function getCurrentBreakpoints() {
  if (typeof window !== "undefined") {
    return Object.keys(fullConfig.theme.screens).find(
      (key) => window.innerWidth > fullConfig.theme.screens[key]
    );
    // Your client-side code that uses window goes here
  }
}
