import { EdgeData, YDIndex } from "../../constants/ydData";
import EdgeTools from "./edgeTools";

export default function ToolBar({
  selection,
  selectedData,
  updateYDData,
}: {
  selection: YDIndex | null;
  selectedData: EdgeData | null;
  updateYDData: (ydIndex: YDIndex, changes: Partial<EdgeData>) => void;
}) {
  return (
    <div className="w-11/12 p-1.5 lg:w-3/4">
      <div className="bg-white h-10 rounded-3xl flex justify-center items-center">
        {selection === null ? (
          <></>
        ) : selection.isEdge ? (
          <EdgeTools
            selection={selection as YDIndex}
            selectedData={selectedData as EdgeData}
            updateYDData={updateYDData}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
