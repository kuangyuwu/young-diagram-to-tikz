import { Color, Thickness } from "../constants/enums";

export function getThicknessClassName(
  isHorizontal: boolean,
  t: Thickness
): string {
  const prefix = isHorizontal ? "h-edge" : "v-edge";
  let tStr = t as string;
  tStr = tStr.replace(" ", "-");
  const className = `${prefix}-t-${tStr}`;
  return className;
}

export function getEdgeColorClassName(c: Color): string {
  // using full tailwind class names to prevent them from being purged
  return c === Color.Black
    ? "bg-black"
    : c === Color.Blue
      ? "bg-blue-700"
      : c === Color.Red
        ? "bg-red-700"
        : "bg-black";
}

export function getTextColorClassName(c: Color): string {
  // using full tailwind class names to prevent them from being purged
  return c === Color.Black
    ? "text-black"
    : c === Color.Blue
      ? "text-blue-700"
      : c === Color.Red
        ? "text-red-700"
        : "text-black";
}
