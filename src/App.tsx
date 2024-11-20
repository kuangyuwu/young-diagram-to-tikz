import useSelectedIndex from "./hooks/useSelectedIndex.tsx";
import useYDData from "./hooks/useYDData.tsx";
import Title from "./components/title.tsx";
import { generateTikzCode } from "./utils/tikzcode.ts";
import { createContext, lazy, Suspense } from "react";
import { YDIndex } from "./constants/ydData.ts";
import Help from "./components/help.tsx";

const ToolBar = lazy(() => import("./components/toolbar/toolbar.tsx"));
const Canvas = lazy(() => import("./components/canvas/canvas.tsx"));
const Result = lazy(() => import("./components/result/result.tsx"));

export const SelectedIndexContext = createContext<YDIndex | null>(null);

function App() {
  const n = window.innerWidth > 640 ? 7 : 5;
  const { ydData, getYDData, updateYDData, resetYDData } = useYDData(n, n);
  const { selectedIndex, updateSelectedIndex, clearSelection } =
    useSelectedIndex();

  const selectedData = selectedIndex !== null ? getYDData(selectedIndex) : null;
  const tikzCode = generateTikzCode(ydData);

  return (
    <div className="flex w-full justify-center bg-yellow-100 font-mono">
      <div className="flex w-full flex-wrap justify-center xl:w-4/5">
        <Help />
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
              resetYDData={resetYDData}
              updateSelectedIndex={updateSelectedIndex}
              clearSelection={clearSelection}
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
