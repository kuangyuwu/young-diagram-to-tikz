import Canvas from "./canvas/canvas.tsx";
import useYDData from "./hooks/useYDData.tsx";
import Result from "./result/result.tsx";
import Title from "./title.tsx";
import ToolBar from "./toolbar/toolbar.tsx";
import { generateTikzCode } from "./utils/tikzcode.ts";

function App() {
  const { ydData, updateHEdge, updateVEdge } = useYDData(5, 5);
  const tikzCode = generateTikzCode(ydData);

  return (
    <div className="flex justify-center">
      <div className="bg-yellow-100 w-full flex flex-wrap justify-center text-nowrap xl:w-4/5">
        <Title />
        <ToolBar />
        <Canvas
          ydData={ydData}
          updateHEdge={updateHEdge}
          updateVEdge={updateVEdge}
        />
        <Result tikzCode={tikzCode} />
      </div>
    </div>
  );
}

export default App;
