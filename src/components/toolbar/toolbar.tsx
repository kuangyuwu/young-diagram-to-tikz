import { EdgeData, YDIndex } from "../../constants/ydData";
import EdgeToolBar from "./edgeTools";

export default function ToolBar({
  selection,
  selectedData,
  updateYDData,
  clearSelection,
}: {
  selection: YDIndex | null;
  selectedData: EdgeData | null;
  updateYDData: (ydIndex: YDIndex, changes: Partial<EdgeData>) => void;
  clearSelection: () => void;
}) {
  return (
    <div className="w-11/12 p-1.5 lg:w-3/4">
      <div className="bg-white h-10 rounded-3xl flex justify-center items-center overflow-auto">
        {selection === null ? (
          <></>
        ) : selection.isEdge ? (
          <EdgeToolBar
            selection={selection as YDIndex}
            selectedData={selectedData as EdgeData}
            updateYDData={updateYDData}
            clearSelection={clearSelection}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
