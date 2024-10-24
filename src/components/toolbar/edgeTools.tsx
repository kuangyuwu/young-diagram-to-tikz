import { useCallback, useState } from "react";
import { EdgeData, YDIndex } from "../../constants/ydData";
import EdgeColorTool from "./edgeColor";
import DeleteTool from "./delete";
import { Tools } from "../../constants/enums";
import EdgeThicknessTool from "./edgeThickness";

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
    [selectedIndex]
  );

  return (
    <>
      <EdgeColorTool
        color={selectedData.color}
        makeUpdate={makeUpdate}
        expandedTool={expandedTool}
        setExpandedTool={setExpandedTool}
      />
      <EdgeThicknessTool
        thickness={selectedData.thickness}
        makeUpdate={makeUpdate}
        expandedTool={expandedTool}
        setExpandedTool={setExpandedTool}
      />
      <DeleteTool
        makeUpdate={makeUpdate}
        expandedTool={expandedTool}
        setExpandedTool={setExpandedTool}
        clearSelection={clearSelection}
      />
    </>
  );
}
