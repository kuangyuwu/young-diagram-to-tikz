import { EdgeData, YDData, YDIndex } from "../../constants/ydData";
import HRow from "./h-row";
import VRow from "./v-row";

export default function Canvas({
  ydData,
  updateYDData,
  setSelection,
}: {
  ydData: YDData;
  updateYDData: (ydIndex: YDIndex, changes: Partial<EdgeData>) => void;
  setSelection: (ydIndex: YDIndex) => void;
}) {
  function getEdgeOnClick(
    isHorizontal: boolean,
    i: number,
    j: number
  ): React.MouseEventHandler<HTMLButtonElement> {
    const ydIndex = { i: i, j: j, isEdge: true, isHorizontal: isHorizontal };
    function createIfNotExist(
      _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
      updateYDData(ydIndex, { exists: true });
      setSelection(ydIndex);
    }
    return createIfNotExist;
  }

  let child = [];
  for (let i = 0; i < ydData.hEdges.length; i++) {
    child.push(
      <HRow
        i={i}
        edges={ydData.hEdges[i]}
        getEdgeOnClick={getEdgeOnClick}
        key={`h-row-${i}`}
      />
    );
    if (i !== ydData.vEdges.length) {
      child.push(
        <VRow
          i={i}
          edges={ydData.vEdges[i]}
          getEdgeOnClick={getEdgeOnClick}
          key={`v-row-${i}`}
        />
      );
    }
  }

  return (
    <div className="w-11/12 p-1.5 lg:w-3/4">
      <div className="bg-white w-auto h-96 rounded-3xl flex justify-center items-center">
        <div>{child}</div>
      </div>
    </div>
  );
}
