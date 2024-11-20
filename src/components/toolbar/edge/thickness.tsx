import { useEffect } from "react";
import { Thickness, Tools } from "../../../constants/enums";
import { EdgeData } from "../../../constants/ydData";
import { getThicknessClassName } from "../../../utils/classname";

export default function EdgeThicknessTool({
  currThickness,
  makeUpdate,
  expandedTool,
  setExpandedTool,
}: {
  currThickness: Thickness;
  makeUpdate: (newData: Partial<EdgeData>) => void;
  expandedTool: Tools;
  setExpandedTool: (t: Tools) => void;
}) {
  useEffect(() => {
    setExpandedTool(Tools.None);
  }, [makeUpdate]);

  function toggleIsExpanded(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    setExpandedTool(
      expandedTool === Tools.EdgeThickness ? Tools.None : Tools.EdgeThickness,
    );
  }

  function getThicknessSetter(newThickness: Thickness) {
    return (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setExpandedTool(Tools.None);
      makeUpdate({ thickness: newThickness });
    };
  }

  let options = [
    <div key="edge-thickness-blank" className="inline-block w-2"></div>,
  ];
  for (let [, t] of Object.entries(Thickness)) {
    const opt = (
      <EdgeThicknessButtons
        key={`edge-thickness-${t}`}
        thickness={t}
        onClick={getThicknessSetter(t)}
      />
    );
    options.push(opt);
  }

  return (
    <div className="m-1 flex h-8 flex-nowrap items-center rounded-full bg-amber-100">
      <EdgeThicknessButtons
        thickness={currThickness}
        onClick={toggleIsExpanded}
      />
      {expandedTool === Tools.EdgeThickness ? options : <></>}
    </div>
  );
}

function EdgeThicknessButtons({
  thickness,
  onClick,
}: {
  thickness: Thickness;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const className = `w-5 rounded-full bg-black ${getThicknessClassName(true, thickness)}`;
  return (
    <button
      title={thickness}
      className={
        "mx-1 flex h-6 w-6 items-center justify-center rounded-full bg-white hover:scale-110"
      }
      onClick={onClick}
    >
      <div className={className}></div>
    </button>
  );
}
