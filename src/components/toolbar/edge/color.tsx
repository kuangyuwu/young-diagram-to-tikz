import { useEffect } from "react";
import { Color, Tools } from "../../../constants/enums";
import { getEdgeColorClassName } from "../../../utils/classname";
import { EdgeData } from "../../../constants/ydData";

export default function EdgeColorTool({
  currColor,
  makeUpdate,
  expandedTool,
  setExpandedTool,
}: {
  currColor: Color;
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
      expandedTool === Tools.EdgeColor ? Tools.None : Tools.EdgeColor,
    );
  }

  function getColorSetter(newColor: Color) {
    return (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setExpandedTool(Tools.None);
      makeUpdate({ color: newColor });
    };
  }

  let options = [
    <div key="edge-color-blank" className="inline-block w-2"></div>,
  ];
  for (let [, c] of Object.entries(Color)) {
    const opt = (
      <EdgeColorButtons
        key={`edge-color-${c}`}
        color={c}
        onClick={getColorSetter(c)}
      />
    );
    options.push(opt);
  }

  return (
    <div className="m-1 flex h-8 flex-nowrap items-center rounded-full bg-amber-100">
      <EdgeColorButtons color={currColor} onClick={toggleIsExpanded} />
      {expandedTool === Tools.EdgeColor ? options : <></>}
    </div>
  );
}

function EdgeColorButtons({
  color,
  onClick,
}: {
  color: Color;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const className = `w-5 h-5 rounded-full ${getEdgeColorClassName(color)}`;
  return (
    <button
      title={color}
      className="mx-1 flex h-6 w-6 items-center justify-center rounded-full bg-white hover:scale-110"
      onClick={onClick}
    >
      <div className={className}></div>
    </button>
  );
}
