import { Color, Thickness, YDItemType } from "./enums";

export type EdgeData = {
  exists: boolean;
  color: Color;
  thickness: Thickness;
};

export type CellData = {
  textColor: Color;
  text: string;
};

export type YDData = {
  hEdges: EdgeData[][];
  vEdges: EdgeData[][];
  cells: CellData[][];
};

export type YDIndex = {
  i: number;
  j: number;
  itemType: YDItemType;
};
