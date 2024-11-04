import { useState } from "react";

export default function Help() {
  const [isHelpVisible, setIsHelpVisible] = useState<boolean>(true);

  return (
    <>
      <button
        className="bg-yellow-200 w-8 h-8 absolute right-4 top-4 rounded-full flex justify-center items-center hover:scale-110"
        title="help"
        onClick={() => {
          setIsHelpVisible(!isHelpVisible);
        }}
      >
        {isHelpVisible ? (
          <div className="h-6 w-6 close-svg"></div>
        ) : (
          <div className="h-6 w-6 help-svg"></div>
        )}
      </button>
      {isHelpVisible ? (
        <div className="bg-yellow-200/70 backdrop-blur-sm w-3/4 sm:w-1/2 h-64 absolute top-16 right-4 z-50 rounded-3xl p-6 text-sm overflow-auto">
          1. Click on a cell &#40;square&#41; to create it and add text in it
          &#40;wrap LaTeX code in $...$&#41;.
          <div className="h-3"></div>
          2. Click on an edge to change its color and thickness.
          <div className="h-3"></div>
          3. The TikZ code is generated below automatically and can be copied to
          your LaTeX file.
          <div className="h-3"></div>
          4. A preview of how it looks in a LaTeX document is available
          &#40;might take 2-3 seconds to show&#41;.
          <div className="h-3"></div>
          5. Use the reset button to clear all cells and delete all edges.
          <div className="h-3"></div>
          <button
            className="bg-transparent"
            onClick={() => {
              setIsHelpVisible(!isHelpVisible);
            }}
          >
            &#91;X&#93;Close
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
