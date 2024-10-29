import { useContext } from "react";
import { SelectedIndexContext } from "../../App";
import { Color, YDItemType } from "../../constants/enums";
import { CellData } from "../../constants/ydData";
import { getTextColorClassName } from "../../utils/classname";

export default function Cell({
  i,
  j,
  cellData,
  cellOnClick,
}: {
  i: number;
  j: number;
  cellData: CellData;
  cellOnClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  let classNameList = [
    "h-8 w-8 md:h-11 md:w-11 rounded-sm hover:scale-110 border border-gray-300 font-mono text-xs overflow-auto",
  ];

  const selectedIndex = useContext(SelectedIndexContext);
  if (
    selectedIndex !== null &&
    selectedIndex.itemType === YDItemType.Cell &&
    i === selectedIndex.i &&
    j === selectedIndex.j
  ) {
    classNameList.push("selected");
  }

  if (cellData.textColor !== Color.Black) {
    classNameList.push(getTextColorClassName(cellData.textColor));
  }

  const className = classNameList.join(" ");

  return (
    <div
      className="flex justify-center items-center cell-container"
      key={`cell-container-${i}-${j}`}
    >
      <button
        className={className}
        onClick={cellOnClick}
        key={`cell-button-${i}-${j}`}
      >
        {cellData.text}
      </button>
    </div>
  );
}
