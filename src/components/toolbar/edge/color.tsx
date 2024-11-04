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
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setExpandedTool(
      expandedTool === Tools.EdgeColor ? Tools.None : Tools.EdgeColor
    );
  }

  function getColorSetter(newColor: Color) {
    return (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setExpandedTool(Tools.None);
      makeUpdate({ color: newColor });
    };
  }

  let options = [
    <div key="edge-color-blank" className="w-2 inline-block"></div>,
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
    <div className="h-8 m-1 rounded-full bg-amber-100 flex flex-nowrap items-center">
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
      className="bg-white w-6 h-6 mx-1 rounded-full hover:scale-110 flex items-center justify-center"
      onClick={onClick}
    >
      <div className={className}></div>
    </button>
  );
}
