import { EdgeData } from "../constants/data";
import { getColorClassName, getThicknessClassName } from "../utils/classname";

export default function HEdge({
  edgeData,
  createIfNotExist,
}: {
  edgeData: EdgeData;
  createIfNotExist: React.MouseEventHandler<HTMLButtonElement>;
}) {
  let classNameList = ["w-12 rounded-sm hover:scale-110"];
  if (!edgeData.exists) {
    classNameList.push("non-existent");
  } else {
    classNameList.push(getColorClassName(true, edgeData.color));
    classNameList.push(getThicknessClassName(true, edgeData.thickness));
  }
  const className = classNameList.join(" ");

  return <button className={className} onClick={createIfNotExist}></button>;
}
