import { CellData, EdgeData } from "../../constants/ydData";
import Cell from "./cell";
import VEdge from "./v-edge";

export default function VRow({
  i,
  edges,
  cells,
  getEdgeOnClick,
  getCellOnClick,
}: {
  i: number;
  edges: EdgeData[];
  cells: CellData[];
  getEdgeOnClick: (
    isHorizontal: boolean,
    i: number,
    j: number,
  ) => React.MouseEventHandler<HTMLButtonElement>;
  getCellOnClick: (
    i: number,
    j: number,
  ) => React.MouseEventHandler<HTMLButtonElement>;
}) {
  let children = [];
  for (let j = 0; j < edges.length; j++) {
    children.push(
      <VEdge
        i={i}
        j={j}
        edgeData={edges[j]}
        createIfNotExist={getEdgeOnClick(false, i, j)}
        key={`v-edge-${i}-${j}`}
      />,
    );
    if (j !== edges.length - 1) {
      children.push(
        <Cell
          key={`cell-${i}-${j}`}
          i={i}
          j={j}
          cellData={cells[j]}
          cellOnClick={getCellOnClick(i, j)}
        />,
      );
    }
  }
  return (
    <div className="flex" key={`v-row-div-${i}`}>
      {children}
    </div>
  );
}
