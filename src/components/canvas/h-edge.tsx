import { useContext } from "react";
import { EdgeData } from "../../constants/ydData";
import {
  getEdgeColorClassName,
  getThicknessClassName,
} from "../../utils/classname";
import { SelectedIndexContext } from "../../App";
import { YDItemType } from "../../constants/enums";

export default function HEdge({
  i,
  j,
  edgeData,
  createIfNotExist,
}: {
  i: number;
  j: number;
  edgeData: EdgeData;
  createIfNotExist: React.MouseEventHandler<HTMLButtonElement>;
}) {
  let classNameList = ["w-8 md:w-12 rounded-sm hover:scale-110"];
  if (!edgeData.exists) {
    classNameList.push("non-existent h-edge-t-default");
  } else {
    classNameList.push(getEdgeColorClassName(edgeData.color));
    classNameList.push(getThicknessClassName(true, edgeData.thickness));
  }

  const selectedIndex = useContext(SelectedIndexContext);
  if (
    selectedIndex !== null &&
    selectedIndex.itemType === YDItemType.HEdge &&
    i === selectedIndex.i &&
    j === selectedIndex.j
  ) {
    classNameList.push("selected");
  }

  const className = classNameList.join(" ");

  return (
    <div
      className="flex justify-center items-center h-edge-container"
      key={`h-edge-container-${i}-${j}`}
    >
      <button
        className={className}
        onClick={createIfNotExist}
        key={`h-edge-button-${i}-${j}`}
      ></button>
    </div>
  );
}
