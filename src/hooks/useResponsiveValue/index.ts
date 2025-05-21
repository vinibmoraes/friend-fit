import useBreakpoint, { Breakpoint } from "../useBreakpoint";

type BreakpointValues<T> = Partial<Record<Breakpoint, T>>;

export default function useResponsiveValue<T>(
  values: BreakpointValues<T>
): T | undefined {
  const breakpoint = useBreakpoint();

  const order: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

  const currentIndex = order.indexOf(breakpoint);

  for (let i = currentIndex; i >= 0; i--) {
    const key = order[i];
    if (values[key] !== undefined) {
      return values[key];
    }
  }

  return undefined;
}
