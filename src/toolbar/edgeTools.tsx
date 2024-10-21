import { useCallback } from "react";
import { EdgeData, YDIndex } from "../constants/ydData";
import EdgeColorTool from "./edgeColor";

export default function EdgeTools({
  selection,
  selectedData,
  updateYDData,
}: {
  selection: YDIndex;
  selectedData: EdgeData;
  updateYDData: (ydIndex: YDIndex, changes: Partial<EdgeData>) => void;
}) {
  const makeUpdate = useCallback(
    (changes: Partial<EdgeData>) => {
      updateYDData(selection, changes);
    },
    [selection]
  );

  return (
    <>
      <EdgeColorTool color={selectedData.color} makeUpdate={makeUpdate} />
    </>
  );
}
