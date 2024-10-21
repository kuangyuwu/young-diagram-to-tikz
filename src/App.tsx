import Canvas from "./components/canvas/canvas.tsx";
import useSelection from "./hooks/useSelection.tsx";
import useYDData from "./hooks/useYDData.tsx";
import Result from "./components/result/result.tsx";
import Title from "./title.tsx";
import ToolBar from "./components/toolbar/toolbar.tsx";
import { generateTikzCode } from "./utils/tikzcode.ts";

function App() {
  const { ydData, getYDData, updateYDData } = useYDData(5, 5);
  const { selection, setSelection } = useSelection();

  const selectedData = selection !== null ? getYDData(selection) : null;
  const tikzCode = generateTikzCode(ydData);

  return (
    <div className="flex justify-center">
      <div className="bg-yellow-100 w-full flex flex-wrap justify-center text-nowrap xl:w-4/5">
        <Title />
        <ToolBar
          selection={selection}
          selectedData={selectedData}
          updateYDData={updateYDData}
        />
        <Canvas
          ydData={ydData}
          updateYDData={updateYDData}
          setSelection={setSelection}
        />
        <Result tikzCode={tikzCode} />
      </div>
    </div>
  );
}

export default App;
