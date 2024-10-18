import Canvas from "./canvas/canvas.tsx";
import Result from "./result/result.tsx";
import Title from "./title.tsx";
import ToolBar from "./toolbar/toolbar.tsx";
import { useState } from "react";

function App() {
  const [tikzCode, setTikzCode] = useState<string>("");
  function updateTikzCode(newCode: string) {
    setTikzCode(newCode);
  }
  return (
    <div className="flex justify-center">
      <div className="bg-yellow-100 w-full flex flex-wrap justify-center text-nowrap xl:w-4/5">
        <Title />
        <ToolBar />
        <Canvas updateTikzCode={updateTikzCode} />
        <Result tikzCode={tikzCode} />
      </div>
    </div>
  );
}

export default App;
