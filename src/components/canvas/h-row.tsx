import { EdgeData } from "../../constants/ydData";
import HEdge from "./h-edge";

export default function HRow({
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
      <div
        className="flex justify-center items-center vertex-box"
        key={`vertex-box-${i}-${j}`}
      ></div>
    );
    child.push(
      <HEdge
        i={i}
        j={j}
        edgeData={edges[j]}
        createIfNotExist={getEdgeOnClick(true, i, j)}
        key={`h-edge-${i}-${j}`}
      />
    );
  }
  child.push(
    <div
      className="flex justify-center items-center vertex-box"
      key={`vertex-box-${i}-${edges.length}`}
    ></div>
  );
  return (
    <div className="flex" key={`h-row-div-${i}`}>
      {child}
    </div>
  );
}
