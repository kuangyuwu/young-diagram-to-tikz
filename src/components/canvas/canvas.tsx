import { YDItemType } from "../../constants/enums";
import { EdgeData, YDData, YDIndex } from "../../constants/ydData";
import HRow from "./h-row";
import ResetButton from "./reset";
import VRow from "./v-row";

export default function Canvas({
  ydData,
  updateYDData,
  resetYDData,
  updateSelectedIndex,
  clearSelection,
}: {
  ydData: YDData;
  updateYDData: (ydIndex: YDIndex, changes: Partial<EdgeData>) => void;
  resetYDData: () => void;
  updateSelectedIndex: (ydIndex: YDIndex) => void;
  clearSelection: () => void;
}) {
  function getEdgeOnClick(
    isHorizontal: boolean,
    i: number,
    j: number,
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
    j: number,
  ): React.MouseEventHandler<HTMLButtonElement> {
    const cell: YDIndex = { i: i, j: j, itemType: YDItemType.Cell };
    const neighboringEdges: Array<YDIndex> = [
      { i: i, j: j, itemType: YDItemType.HEdge },
      { i: i + 1, j: j, itemType: YDItemType.HEdge },
      { i: i, j: j, itemType: YDItemType.VEdge },
      { i: i, j: j + 1, itemType: YDItemType.VEdge },
    ];
    function onClick(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      updateSelectedIndex(cell);
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
      />,
    );
    if (i !== ydData.vEdges.length) {
      child.push(
        <VRow
          key={`v-row-${i}`}
          i={i}
          edges={ydData.vEdges[i]}
          cells={ydData.cells[i]}
          getEdgeOnClick={getEdgeOnClick}
          getCellOnClick={getCellOnClick}
        />,
      );
    }
  }

  return (
    <div className="relative w-11/12 p-1.5 lg:w-3/4">
      <div className="flex w-auto items-center overflow-auto rounded-3xl bg-white p-12">
        <div className="m-auto">{child}</div>
      </div>
      <ResetButton
        resetYDData={resetYDData}
        clearSelection={clearSelection}
      ></ResetButton>
    </div>
  );
}
