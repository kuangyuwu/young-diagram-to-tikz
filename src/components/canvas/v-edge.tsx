import { EdgeData } from "../../constants/ydData";
import {
  getColorClassName,
  getThicknessClassName,
} from "../../utils/classname";

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
  let classNameList = ["h-12 rounded-sm hover:scale-110"];
  if (!edgeData.exists) {
    classNameList.push("non-existent v-edge-t-default");
  } else {
    classNameList.push(getColorClassName(true, edgeData.color));
    classNameList.push(getThicknessClassName(false, edgeData.thickness));
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
