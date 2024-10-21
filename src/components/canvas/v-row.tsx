import { EdgeData } from "../../constants/ydData";
import VEdge from "./v-edge";

export default function VRow({
  i,
  edges,
  getEdgeOnClick,
}: {
  i: number;
  edges: EdgeData[];
  getEdgeOnClick: (
    isHorizontal: boolean,
    i: number,
    j: number
  ) => React.MouseEventHandler<HTMLButtonElement>;
}) {
  let child = [];
  for (let j = 0; j < edges.length; j++) {
    child.push(
      <VEdge
        i={i}
        j={j}
        edgeData={edges[j]}
        createIfNotExist={getEdgeOnClick(false, i, j)}
        key={`v-edge-${i}-${j}`}
      />
    );
    if (j !== edges.length - 1) {
      child.push(
        <div
          className="flex justify-center items-center cell-container"
          key={`cell-container-${i}-${j}`}
        ></div>
      );
    }
  }
  return (
    <div className="flex" key={`v-row-div-${i}`}>
      {child}
    </div>
  );
}
