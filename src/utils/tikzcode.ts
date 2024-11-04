import { Color } from "../constants/enums";
import { CellData, EdgeData, YDData } from "../constants/ydData";

export function generateTikzCode(d: YDData): string {
  let toJoin: string[] = [];
  for (let i = 0; i < d.cells.length; i++) {
    for (let j = 0; j < d.cells[i].length; j++) {
      const c = d.cells[i][j];
      if (c.text !== "") {
        toJoin.push(cellToTikz(c, j, i));
      }
    }
  }
  for (let i = 0; i < d.hEdges.length; i++) {
    for (let j = 0; j < d.hEdges[i].length; j++) {
      const e = d.hEdges[i][j];
      if (e.exists) {
        toJoin.push(hEdgeToTikz(e, j, i));
      }
    }
  }
  for (let i = 0; i < d.vEdges.length; i++) {
    for (let j = 0; j < d.vEdges[i].length; j++) {
      const e = d.vEdges[i][j];
      if (e.exists) {
        toJoin.push(vEdgeToTikz(e, j, i));
      }
    }
  }

  return `\\begin{tikzpicture}\n\t${toJoin.join("\n\t")}\n\\end{tikzpicture}`;
}

function hEdgeToTikz(d: EdgeData, x: number, y: number): string {
  return edgeToTikz(d, x, y, true);
}

function vEdgeToTikz(d: EdgeData, x: number, y: number): string {
  return edgeToTikz(d, x, y, false);
}

function edgeToTikz(
  d: EdgeData,
  x: number,
  y: number,
  isHorizontal: boolean
): string {
  const start: string = `(${x},${-y})`;
  const end: string = isHorizontal ? `(${x + 1},${-y})` : `(${x},${-y - 1})`;

  let props: string[] = [];
  for (let k in d) {
    const key = k as keyof EdgeData;
    if (key !== "exists" && d[key] !== "default" && d[key] !== "black") {
      props.push(d[key]);
    }
  }

  if (props.length === 0) {
    return `\\draw ${start} -- ${end};`;
  }
  const prop = props.join(", ");
  return `\\draw[${prop}] ${start} -- ${end};`;
}

function cellToTikz(c: CellData, x: number, y: number): string {
  const position: string = `(${x + 0.5}, ${-y - 0.5})`;

  if (c.textColor === Color.Black) {
    return `\\draw ${position} node {${c.text}};`;
  }
  return `\\draw[${c.textColor}] ${position} node {${c.text}};`;
}
