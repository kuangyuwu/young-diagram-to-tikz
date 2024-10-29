import { useEffect } from "react";
import { Color, Tools } from "../../../constants/enums";
import { CellData } from "../../../constants/ydData";
import { getTextColorClassName } from "../../../utils/classname";

export default function CellTextColorTool({
  currTextColor,
  makeUpdate,
  expandedTool,
  setExpandedTool,
}: {
  currTextColor: Color;
  makeUpdate: (newData: Partial<CellData>) => void;
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
      expandedTool === Tools.CellTextColor ? Tools.None : Tools.CellTextColor
    );
  }

  function getColorSetter(newColor: Color) {
    return (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setExpandedTool(Tools.None);
      makeUpdate({ textColor: newColor });
    };
  }

  let options = [
    <div key="text-color-blank" className="w-2 inline-block"></div>,
  ];
  for (let [, c] of Object.entries(Color)) {
    const opt = (
      <CellTextColorButtons
        key={`cell-text-color-${c}`}
        textColor={c}
        onClick={getColorSetter(c)}
      />
    );
    options.push(opt);
  }

  return (
    <div className="h-8 m-1 rounded-full bg-amber-100 flex flex-nowrap items-center">
      <CellTextColorButtons
        textColor={currTextColor}
        onClick={toggleIsExpanded}
      />
      {expandedTool === Tools.CellTextColor ? options : <></>}
    </div>
  );
}

function CellTextColorButtons({
  textColor,
  onClick,
}: {
  textColor: Color;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const className = `w-6 h-6 mx-1 rounded-full bg-white font-serif hover:scale-110 ${getTextColorClassName(textColor)}`;
  return (
    <button title={textColor} className={className} onClick={onClick}>
      T
    </button>
  );
}
