// import Canvas from "./components/canvas/canvas.tsx";
import useSelectedIndex from "./hooks/useSelectedIndex.tsx";
import useYDData from "./hooks/useYDData.tsx";
// import Result from "./components/result/result.tsx";
import Title from "./components/title.tsx";
// import ToolBar from "./components/toolbar/toolbar.tsx";
import { generateTikzCode } from "./utils/tikzcode.ts";
import { createContext, lazy, Suspense } from "react";
import { YDIndex } from "./constants/ydData.ts";

const ToolBar = lazy(() => import("./components/toolbar/toolbar.tsx"));
const Canvas = lazy(() => import("./components/canvas/canvas.tsx"));
const Result = lazy(() => import("./components/result/result.tsx"));

export const SelectedIndexContext = createContext<YDIndex | null>(null);

function App() {
  const { ydData, getYDData, updateYDData } = useYDData(10, 10);
  const { selectedIndex, updateSelectedIndex, clearSelection } =
    useSelectedIndex();

  const selectedData = selectedIndex !== null ? getYDData(selectedIndex) : null;
  const tikzCode = generateTikzCode(ydData);

  return (
    <div className="flex justify-center">
      <div className="bg-yellow-100 w-full flex flex-wrap justify-center text-nowrap xl:w-4/5">
        <Title />
        <Suspense fallback={<></>}>
          <ToolBar
            selectedIndex={selectedIndex}
            selectedData={selectedData}
            clearSelection={clearSelection}
            updateYDData={updateYDData}
          />
        </Suspense>
        <SelectedIndexContext.Provider value={selectedIndex}>
          <Suspense fallback={<></>}>
            <Canvas
              ydData={ydData}
              updateYDData={updateYDData}
              updateSelectedIndex={updateSelectedIndex}
            />
          </Suspense>
        </SelectedIndexContext.Provider>
        <Suspense fallback={<></>}>
          <Result tikzCode={tikzCode} clearSelection={clearSelection} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
