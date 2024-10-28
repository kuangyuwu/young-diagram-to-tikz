import { useCallback, useState } from "react";
import { CellData, YDIndex } from "../../../constants/ydData";
import { Tools } from "../../../constants/enums";
import CellTextTool from "./text";
import CellTextColorTool from "./textColor";

export default function CellToolBar({
  selectedIndex,
  selectedData,
  updateYDData,
  // clearSelection,
}: {
  selectedIndex: YDIndex;
  selectedData: CellData;
  updateYDData: (ydIndex: YDIndex, changes: Partial<CellData>) => void;
  // clearSelection: () => void;
}) {
  const [expandedTool, setExpandedTool] = useState<Tools>(Tools.None);

  const makeUpdate = useCallback(
    (changes: Partial<CellData>) => {
      updateYDData(selectedIndex, changes);
    },
    [selectedIndex]
  );

  return (
    <>
      <CellTextColorTool
        currTextColor={selectedData.textColor}
        makeUpdate={makeUpdate}
        expandedTool={expandedTool}
        setExpandedTool={setExpandedTool}
      />
      <CellTextTool text={selectedData.text} makeUpdate={makeUpdate} />
    </>
  );
}
