import { useContext } from "react";
import { EdgeData } from "../../constants/ydData";
import {
  getEdgeColorClassName,
  getThicknessClassName,
} from "../../utils/classname";
import { SelectedIndexContext } from "../../App";
import { YDItemType } from "../../constants/enums";

export default function VEdge({
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
  let classNameList = ["h-8 md:h-11 rounded-sm hover:scale-110"];
  if (!edgeData.exists) {
    classNameList.push("non-existent v-edge-t-default");
  } else {
    classNameList.push(getEdgeColorClassName(edgeData.color));
    classNameList.push(getThicknessClassName(false, edgeData.thickness));
  }

  const selectedIndex = useContext(SelectedIndexContext);
  if (
    selectedIndex !== null &&
    selectedIndex.itemType === YDItemType.VEdge &&
    i === selectedIndex.i &&
    j === selectedIndex.j
  ) {
    classNameList.push("selected");
  }

  const className = classNameList.join(" ");

  return (
    <div
      className="flex justify-center items-center v-edge-container"
      key={`v-edge-container-${i}-${j}`}
    >
      <button
        className={className}
        onClick={createIfNotExist}
        key={`v-edge-button-${i}-${j}`}
      ></button>
    </div>
  );
}
