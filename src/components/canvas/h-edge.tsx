import { EdgeData } from "../../constants/ydData";
import {
  getColorClassName,
  getThicknessClassName,
} from "../../utils/classname";

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
  let classNameList = ["w-12 rounded-sm hover:scale-110"];
  if (!edgeData.exists) {
    classNameList.push("non-existent h-edge-t-default");
  } else {
    classNameList.push(getColorClassName(true, edgeData.color));
    classNameList.push(getThicknessClassName(true, edgeData.thickness));
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
