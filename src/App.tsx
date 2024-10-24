import Canvas from "./components/canvas/canvas.tsx";
import useSelectedIndex from "./hooks/useSelectedIndex.tsx";
import useYDData from "./hooks/useYDData.tsx";
import Result from "./components/result/result.tsx";
import Title from "./components/title.tsx";
import ToolBar from "./components/toolbar/toolbar.tsx";
import { generateTikzCode } from "./utils/tikzcode.ts";
import { createContext } from "react";
import { YDIndex } from "./constants/ydData.ts";

export const SelectedIndexContext = createContext<YDIndex | null>(null);

function App() {
  const { ydData, getYDData, updateYDData } = useYDData(5, 5);
  const { selectedIndex, updateSelectedIndex, clearSelection } =
    useSelectedIndex();

  const selectedData = selectedIndex !== null ? getYDData(selectedIndex) : null;
  const tikzCode = generateTikzCode(ydData);

  return (
    <div className="flex justify-center">
      <div className="bg-yellow-100 w-full flex flex-wrap justify-center text-nowrap xl:w-4/5">
        <Title />
        <ToolBar
          selectedIndex={selectedIndex}
          selectedData={selectedData}
          clearSelection={clearSelection}
          updateYDData={updateYDData}
        />
        <SelectedIndexContext.Provider value={selectedIndex}>
          <Canvas
            ydData={ydData}
            updateYDData={updateYDData}
            updateSelectedIndex={updateSelectedIndex}
          />
        </SelectedIndexContext.Provider>
        <Result tikzCode={tikzCode} clearSelection={clearSelection} />
      </div>
    </div>
  );
}

export default App;
