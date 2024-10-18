import { useEffect, useState } from "react";
import Edge from "./edge";
import { generateTikzCode } from "../utils/tikzcode";
import { YDData } from "../constants/data";

export default function Canvas({
  updateTikzCode,
}: {
  updateTikzCode: (newCode: string) => void;
}) {
  const [exists, setExists] = useState<boolean>(false);

  function toggleExists(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setExists((s) => !s);
  }

  useEffect(() => {
    let d: YDData = {
      hEdges: [[]],
      vEdges: [],
    };
    if (exists) {
      d.hEdges[0].push({});
    }
    const newCode = generateTikzCode(d);
    updateTikzCode(newCode);
  }, [exists]);

  return (
    <div className="w-11/12 p-1.5 lg:w-3/4">
      <div className="bg-white w-auto h-96 rounded-3xl flex justify-center items-center">
        <Edge exists={exists} toggleExists={toggleExists}></Edge>
      </div>
    </div>
  );
}
