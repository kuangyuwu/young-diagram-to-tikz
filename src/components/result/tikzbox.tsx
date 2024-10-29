import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useState } from "react";

export default function TikzBox({ tikzCode }: { tikzCode: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function onClick() {
    navigator.clipboard.writeText(tikzCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    });
  }

  return (
    <div className="w-full p-1.5 md:w-1/2">
      <div className="bg-white w-auto h-96 rounded-3xl text-xs flex justify-center items-center">
        <div className="w-5/6 h-5/6 overflow-auto relative">
          <button
            className="bg-amber-100 w-8 h-8 absolute right-0 top-0 rounded-md flex justify-center items-center hover:scale-110"
            onClick={onClick}
          >
            {isCopied ? (
              <div className="h-6 w-6 copied-svg"></div>
            ) : (
              <div className="h-6 w-6 content-copy-svg"></div>
            )}
          </button>
          <SyntaxHighlighter language="latex" style={tomorrow}>
            {tikzCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
