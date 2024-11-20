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
      <div className="flex h-60 w-auto items-center justify-center rounded-3xl bg-white text-xs sm:h-96">
        <div className="relative h-5/6 w-5/6 overflow-hidden">
          <button
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-md bg-amber-100 hover:scale-110"
            title="copy"
            onClick={onClick}
          >
            {isCopied ? (
              <div className="copied-svg h-6 w-6"></div>
            ) : (
              <div className="content-copy-svg h-5 w-5"></div>
            )}
          </button>
          <div className="h-full w-full overflow-auto">
            <SyntaxHighlighter language="latex" style={tomorrow}>
              {tikzCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
