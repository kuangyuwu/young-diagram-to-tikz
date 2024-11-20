import { useState } from "react";

export default function Help() {
  const [isHelpVisible, setIsHelpVisible] = useState<boolean>(true);

  return (
    <>
      <button
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-200 hover:scale-110"
        title="help"
        onClick={() => {
          setIsHelpVisible(!isHelpVisible);
        }}
      >
        {isHelpVisible ? (
          <div className="close-svg h-6 w-6"></div>
        ) : (
          <div className="help-svg h-6 w-6"></div>
        )}
      </button>
      {isHelpVisible ? (
        <div className="absolute right-4 top-16 z-50 h-64 w-3/4 overflow-auto rounded-3xl bg-yellow-200/70 p-6 text-sm backdrop-blur-sm sm:w-1/2 lg:w-1/3">
          <b>How to use?</b>
          <div className="h-3"></div>
          1. Click on a square cell to create it and add text in it &#40;wrap
          LaTeX code in $...$&#41;.
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
          <div className="h-6"></div>
          <b>Introduction</b>
          <div className="h-3"></div>
          This website allows one to create Young diagrams using a graphical UI
          and generates TikZ code for LaTeX files.
          <div className="h-3"></div>
          Young diagrams &#40;
          <a
            href="https://en.wikipedia.org/wiki/Young_tableau"
            className="text-blue-500 underline"
          >
            Wiki
          </a>
          &#41; consist of certain configurations of square cells, sometimes
          with numbers, and they are commonly seen in discrete math and other
          fields in math.
          <div className="h-6"></div>
          <button
            className="bg-transparent"
            onClick={() => {
              setIsHelpVisible(!isHelpVisible);
            }}
          >
            <b>&#91;X&#93;Close</b>
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
