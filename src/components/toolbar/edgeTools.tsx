import { useCallback, useState } from "react";
import { EdgeData, YDIndex } from "../../constants/ydData";
import EdgeColorTool from "./edgeColor";
import DeleteTool from "./delete";
import { Tools } from "../../constants/enums";

export default function EdgeToolBar({
  selection,
  selectedData,
  updateYDData,
  clearSelection,
}: {
  selection: YDIndex;
  selectedData: EdgeData;
  updateYDData: (ydIndex: YDIndex, changes: Partial<EdgeData>) => void;
  clearSelection: () => void;
}) {
  const [expandedTool, setExpandedTool] = useState<Tools>(Tools.None);

  const makeUpdate = useCallback(
    (changes: Partial<EdgeData>) => {
      updateYDData(selection, changes);
    },
    [selection]
  );

  return (
    <>
      <EdgeColorTool
        color={selectedData.color}
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
