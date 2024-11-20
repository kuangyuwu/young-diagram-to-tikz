import { lazy, Suspense } from "react";
import { YDItemType } from "../../constants/enums";
import { CellData, EdgeData, YDIndex } from "../../constants/ydData";

const EdgeToolBar = lazy(() => import("./edge/edgeToolBar.tsx"));
const CellToolBar = lazy(() => import("./cell/cellToolBar.tsx"));

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
    changes: Partial<EdgeData> | Partial<CellData>,
  ) => void;
}) {
  return (
    <div className="w-11/12 p-1.5 lg:w-3/4">
      <div className="flex h-10 items-center justify-center overflow-auto rounded-3xl bg-white">
        {selectedIndex === null ? (
          <></>
        ) : selectedIndex.itemType === YDItemType.HEdge ||
          selectedIndex.itemType === YDItemType.VEdge ? (
          <Suspense fallback={<></>}>
            <EdgeToolBar
              selectedIndex={selectedIndex as YDIndex}
              selectedData={selectedData as EdgeData}
              updateYDData={updateYDData}
              clearSelection={clearSelection}
            />
          </Suspense>
        ) : (
          <Suspense fallback={<></>}>
            <CellToolBar
              selectedIndex={selectedIndex as YDIndex}
              selectedData={selectedData as CellData}
              updateYDData={updateYDData}
              // clearSelection={clearSelection}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
}
