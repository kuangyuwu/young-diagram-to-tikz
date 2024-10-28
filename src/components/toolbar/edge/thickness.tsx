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
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setExpandedTool(
      expandedTool === Tools.EdgeThickness ? Tools.None : Tools.EdgeThickness
    );
  }

  function getThicknessSetter(newThickness: Thickness) {
    return (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setExpandedTool(Tools.None);
      makeUpdate({ thickness: newThickness });
    };
  }

  let options = [
    <div key="edge-thickness-blank" className="w-2 inline-block"></div>,
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
    <div className="h-8 m-1 rounded-full bg-gray-200 flex flex-nowrap">
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
  const className = `w-6 rounded-full bg-black ${getThicknessClassName(true, thickness)}`;
  return (
    <button
      title={thickness}
      className={"w-6 h-6 m-1 rounded-full bg-white hover:scale-110"}
      onClick={onClick}
    >
      <div className={className}></div>
    </button>
  );
}
