import { useEffect, useState } from "react";
import HEdge from "./h-edge";
import { generateTikzCode } from "../utils/tikzcode";
import { EdgeData, YDData } from "../constants/data";
import { Color, Thickness } from "../constants/enums";

export default function Canvas({
  updateTikzCode,
}: {
  updateTikzCode: (newCode: string) => void;
}) {
  const [edge, setEdge] = useState<EdgeData>({
    exists: false,
    color: Color.Blue,
    thickness: Thickness.UltraThick,
  });

  function createIfNotExist(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (!edge.exists) {
      setEdge((e) => {
        return {
          exists: true,
          color: e.color,
          thickness: e.thickness,
        };
      });
    }
  }

  useEffect(() => {
    const d: YDData = {
      hEdges: [[edge]],
      vEdges: [],
    };
    const newCode = generateTikzCode(d);
    updateTikzCode(newCode);
  }, [edge]);

  return (
    <div className="w-11/12 p-1.5 lg:w-3/4">
      <div className="bg-white w-auto h-96 rounded-3xl flex justify-center items-center">
        <HEdge edgeData={edge} createIfNotExist={createIfNotExist}></HEdge>
      </div>
    </div>
  );
}
