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

export function getColorClassName(isEdge: boolean, c: Color): string {
  const prefix = isEdge ? "bg" : "text";
  const suffix =
    c === Color.Black
      ? "black"
      : c === Color.Blue
        ? "blue-700"
        : c === Color.Red
          ? "red-700"
          : "black";
  const className = `${prefix}-${suffix}`;
  return className;
}
