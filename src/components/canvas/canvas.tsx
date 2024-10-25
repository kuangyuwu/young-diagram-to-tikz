import { YDItemType } from "../../constants/enums";
import { EdgeData, YDData, YDIndex } from "../../constants/ydData";
import HRow from "./h-row";
import VRow from "./v-row";

export default function Canvas({
  ydData,
  updateYDData,
  updateSelectedIndex,
}: {
  ydData: YDData;
  updateYDData: (ydIndex: YDIndex, changes: Partial<EdgeData>) => void;
  updateSelectedIndex: (ydIndex: YDIndex) => void;
}) {
  function getEdgeOnClick(
    isHorizontal: boolean,
    i: number,
    j: number
  ): React.MouseEventHandler<HTMLButtonElement> {
    const ydIndex = {
      i: i,
      j: j,
      itemType: isHorizontal ? YDItemType.HEdge : YDItemType.VEdge,
    };
    function onClick(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      updateYDData(ydIndex, { exists: true });
      updateSelectedIndex(ydIndex);
    }
    return onClick;
  }

  function getCellOnClick(
    i: number,
    j: number
  ): React.MouseEventHandler<HTMLButtonElement> {
    const neighboringEdges: Array<YDIndex> = [
      { i: i, j: j, itemType: YDItemType.HEdge },
      { i: i + 1, j: j, itemType: YDItemType.HEdge },
      { i: i, j: j, itemType: YDItemType.VEdge },
      { i: i, j: j + 1, itemType: YDItemType.VEdge },
    ];
    function onClick(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      for (const e of neighboringEdges) {
        updateYDData(e, { exists: true });
      }
    }
    return onClick;
  }

  let child = [];
  for (let i = 0; i < ydData.hEdges.length; i++) {
    child.push(
      <HRow
        key={`h-row-${i}`}
        i={i}
        edges={ydData.hEdges[i]}
        getEdgeOnClick={getEdgeOnClick}
      />
    );
    if (i !== ydData.vEdges.length) {
      child.push(
        <VRow
          key={`v-row-${i}`}
          i={i}
          edges={ydData.vEdges[i]}
          getEdgeOnClick={getEdgeOnClick}
          getCellOnClick={getCellOnClick}
        />
      );
    }
  }

  return (
    <div className="w-11/12 p-1.5 lg:w-3/4">
      <div className="bg-white w-auto p-6 rounded-3xl overflow-auto flex sm:justify-center items-center">
        <div>{child}</div>
      </div>
    </div>
  );
}
