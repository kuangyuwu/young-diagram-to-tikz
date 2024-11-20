import { useCallback, useState } from "react";
import { EdgeData, YDIndex } from "../../../constants/ydData";
import EdgeColorTool from "./color";
import EdgeDeleteTool from "./delete";
import { Tools } from "../../../constants/enums";
import EdgeThicknessTool from "./thickness";

export default function EdgeToolBar({
  selectedIndex,
  selectedData,
  updateYDData,
  clearSelection,
}: {
  selectedIndex: YDIndex;
  selectedData: EdgeData;
  updateYDData: (ydIndex: YDIndex, changes: Partial<EdgeData>) => void;
  clearSelection: () => void;
}) {
  const [expandedTool, setExpandedTool] = useState<Tools>(Tools.None);

  const makeUpdate = useCallback(
    (changes: Partial<EdgeData>) => {
      updateYDData(selectedIndex, changes);
    },
    [selectedIndex],
  );

  return (
    <>
      <EdgeColorTool
        currColor={selectedData.color}
        makeUpdate={makeUpdate}
        expandedTool={expandedTool}
        setExpandedTool={setExpandedTool}
      />
      <EdgeThicknessTool
        currThickness={selectedData.thickness}
        makeUpdate={makeUpdate}
        expandedTool={expandedTool}
        setExpandedTool={setExpandedTool}
      />
      <EdgeDeleteTool
        makeUpdate={makeUpdate}
        expandedTool={expandedTool}
        setExpandedTool={setExpandedTool}
        clearSelection={clearSelection}
      />
    </>
  );
}
