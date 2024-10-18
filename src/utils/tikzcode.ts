import { EdgeData, YDData } from "../constants/data";

export function generateTikzCode(d: YDData): string {
  let toJoin: string[] = [];
  for (let i = 0; i < d.hEdges.length; i++) {
    for (let j = 0; j < d.hEdges[i].length; j++) {
      const e = d.hEdges[i][j];
      if (e.exists) {
        toJoin.push(hEdgeToTikz(d.hEdges[i][j], i, j));
      }
    }
  }
  for (let i = 0; i < d.vEdges.length; i++) {
    for (let j = 0; j < d.vEdges[i].length; j++) {
      const e = d.vEdges[i][j];
      if (e.exists) {
        toJoin.push(vEdgeToTikz(d.vEdges[i][j], i, j));
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
    if (key !== "exists" && d[key] !== "default") {
      props.push(d[key]);
    }
  }

  if (props.length === 0) {
    return `\\draw ${start} -- ${end};`;
  }
  const prop = props.join(", ");
  return `\\draw[${prop}] ${start} -- ${end};`;
}
