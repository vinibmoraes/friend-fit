import { useWindowDimensions } from "react-native";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export default function useBreakpoint(): Breakpoint {
  const { width } = useWindowDimensions();

  if (width < 360) return "xs"; // celulares pequenos
  if (width < 480) return "sm";
  if (width < 768) return "md"; // celulares comuns
  if (width < 1024) return "lg"; // tablets
  return "xl"; // tablets grandes ou desktop
}
