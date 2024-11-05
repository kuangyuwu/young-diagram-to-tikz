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
        <div className="bg-yellow-200/70 backdrop-blur-sm w-3/4 sm:w-1/2 lg:w-1/3 h-64 absolute top-16 right-4 z-50 rounded-3xl p-6 text-sm overflow-auto">
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
