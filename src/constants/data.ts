import { Color, Thickness } from "./enums";

export type EdgeData = {
  color?: Color;
  thickness?: Thickness;
};

export type YDData = {
  hEdges: EdgeData[][];
  vEdges: EdgeData[][];
};
