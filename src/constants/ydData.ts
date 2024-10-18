import { Color, Thickness } from "./enums";

export type EdgeData = {
  exists: boolean;
  color: Color;
  thickness: Thickness;
};

export type YDData = {
  hEdges: EdgeData[][];
  vEdges: EdgeData[][];
};
