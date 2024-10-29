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
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
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
    <div className="h-8 m-1 rounded-full bg-red-100 flex flex-nowrap items-center">
      <button
        title="delete"
        className="w-6 h-6 m-1 rounded-full hover:scale-110 delete-svg"
        onClick={toggleIsExpanded}
      ></button>
      {expandedTool === Tools.Delete ? (
        <>
          <div className="w-14 h-5 m-1 text-sm inline-block align-middle">
            Delete?
          </div>
          <button
            className="w-10 h-6 m-1 rounded-full bg-red-300 text-red-600 text-sm"
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
