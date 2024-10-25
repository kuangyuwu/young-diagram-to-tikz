import { useContext } from "react";
import { SelectedIndexContext } from "../../App";
import { YDItemType } from "../../constants/enums";

export default function Cell({
  i,
  j,
  cellOnClick,
}: {
  i: number;
  j: number;
  cellOnClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  let classNameList = [
    "h-8 w-8 md:h-12 md:w-12 rounded-sm hover:scale-110 border border-gray-300",
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
      ></button>
    </div>
  );
}
