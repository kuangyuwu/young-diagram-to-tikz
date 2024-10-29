import { useState } from "react";

export default function Help() {
  const [isHelpVisible, setIsHelpVisible] = useState<boolean>(false);

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
        <div className="bg-yellow-200 w-3/4 sm:w-1/2 h-64 sm:h-auto absolute top-16 right-4 z-50 rounded-3xl p-6 text-sm overflow-scroll">
          1. Click on a cell &#40;square&#41; to create its four edges, or to
          add text in it &#40;wrap LaTeX code in $...$&#41;.
          <div className="h-3"></div>
          2. Click on an edge to change its color and thickness.
          <div className="h-3"></div>
          3. Use the reset button to clear all cells and delete all edges.
          <div className="h-3"></div>
          4. The TikZ code is generated below automatically and can be copied to
          the clipboard
          <div className="h-3"></div>
          5. A preview of how it looks in a LaTeX document is available
          &#40;might take 2-3 seconds to show&#41;.
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
