import { useCallback, useEffect } from "react";
import { EdgeData } from "../../../constants/ydData";
import { Color, Thickness, Tools } from "../../../constants/enums";

export default function EdgeDeleteTool({
  makeUpdate,
  expandedTool,
  setExpandedTool,
  clearSelection,
}: {
  makeUpdate: (newData: Partial<EdgeData>) => void;
  expandedTool: Tools;
  setExpandedTool: (e: Tools) => void;
  clearSelection: () => void;
}) {
  useEffect(() => {
    setExpandedTool(Tools.None);
  }, [makeUpdate]);

  function toggleIsExpanded(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    setExpandedTool(expandedTool === Tools.Delete ? Tools.None : Tools.Delete);
  }

  const deleteElement = useCallback(() => {
    makeUpdate({
      exists: false,
      color: Color.Black,
      thickness: Thickness.Default,
    });
    setExpandedTool(Tools.None);
    clearSelection();
  }, [makeUpdate]);

  return (
    <div className="m-1 flex h-8 flex-nowrap items-center rounded-full bg-red-100">
      <button
        title="delete"
        className="delete-svg m-1 h-6 w-6 rounded-full hover:scale-110"
        onClick={toggleIsExpanded}
      ></button>
      {expandedTool === Tools.Delete ? (
        <>
          <div className="m-1 inline-block h-5 w-14 align-middle text-sm">
            Delete?
          </div>
          <button
            className="m-1 h-6 w-10 rounded-full bg-red-300 text-sm text-red-600"
            onClick={deleteElement}
          >
            Yes
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
