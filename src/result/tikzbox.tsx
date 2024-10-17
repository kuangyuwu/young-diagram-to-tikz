import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

import { useTikzCode } from "./tikzcode"

export default function TikzBox() {
  const { tikzCode } = useTikzCode();

  return (
    <div className="w-full p-1.5 md:w-1/2">    
      <div className="bg-white w-auto h-96 rounded-3xl text-xs flex justify-center items-center">
        <div className="w-5/6 h-5/6 overflow-auto">
          <SyntaxHighlighter language="latex" style={tomorrow}>{tikzCode}</SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}