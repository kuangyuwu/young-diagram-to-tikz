import { useState } from "react";
import { Color } from "../../constants/enums";
import { getColorClassName } from "../../utils/classname";
import { EdgeData } from "../../constants/ydData";

export default function EdgeColorTool({
  color,
  makeUpdate,
}: {
  color: Color;
  makeUpdate: (newData: Partial<EdgeData>) => void;
}) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function toggleIsExpanded(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setIsExpanded((b) => !b);
  }

  function getColorSetter(newColor: Color) {
    return (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setIsExpanded(false);
      makeUpdate({ color: newColor });
    };
  }

  let options = [<div className="w-1 inline-block"></div>];
  for (let [, c] of Object.entries(Color)) {
    if (c === Color.Black) continue;
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
    <span className="h-8 m-1 rounded-full bg-gray-200">
      <EdgeColorButtons color={color} onClick={toggleIsExpanded} />
      {isExpanded ? options : <></>}
    </span>
  );
}

function EdgeColorButtons({
  color,
  onClick,
}: {
  color: Color;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const className = `w-6 h-6 m-1 rounded-full hover:scale-110 ${getColorClassName(true, color)}`;
  return <button className={className} onClick={onClick}></button>;
}
