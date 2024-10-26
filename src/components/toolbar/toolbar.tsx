import { YDItemType } from "../../constants/enums";
import { CellData, EdgeData, YDIndex } from "../../constants/ydData";
import CellToolBar from "./cellTools";
import EdgeToolBar from "./edgeTools";

export default function ToolBar({
  selectedIndex,
  selectedData,
  clearSelection,
  updateYDData,
}: {
  selectedIndex: YDIndex | null;
  selectedData: EdgeData | CellData | null;
  clearSelection: () => void;
  updateYDData: (
    ydIndex: YDIndex,
    changes: Partial<EdgeData> | Partial<CellData>
  ) => void;
}) {
  return (
    <div className="w-11/12 p-1.5 lg:w-3/4">
      <div className="bg-white h-10 rounded-3xl flex justify-center items-center overflow-auto">
        {selectedIndex === null ? (
          <></>
        ) : selectedIndex.itemType === YDItemType.HEdge ||
          selectedIndex.itemType === YDItemType.VEdge ? (
          <EdgeToolBar
            selectedIndex={selectedIndex as YDIndex}
            selectedData={selectedData as EdgeData}
            updateYDData={updateYDData}
            clearSelection={clearSelection}
          />
        ) : (
          <CellToolBar
            selectedIndex={selectedIndex as YDIndex}
            selectedData={selectedData as CellData}
            updateYDData={updateYDData}
            // clearSelection={clearSelection}
          />
        )}
      </div>
    </div>
  );
}
