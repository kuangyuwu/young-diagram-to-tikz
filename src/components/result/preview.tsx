import { useEffect, useRef, useState } from "react";

export default function Preview({
  tikzCode,
  clearSelection,
}: {
  tikzCode: string;
  clearSelection: () => void;
}) {
  const [showPreview, setShowPreview] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setShowPreview(false);
    };
  }, [tikzCode]);

  const srcDoc = getSrcDoc(tikzCode);

  return (
    <div className="w-full p-1.5 md:w-1/2">
      <div className="bg-white w-auto h-60 sm:h-96 flex justify-center items-center p-3 rounded-3xl overflow-hidden">
        {showPreview ? (
          <div className="w-5/6 h-5/6">
            <Loading />
            <iframe
              className="bg-white w-full h-full"
              sandbox="allow-same-origin allow-scripts"
              srcDoc={srcDoc}
            ></iframe>
          </div>
        ) : (
          <button
            className="bg-amber-100 text-amber-600 w-40 h-10 rounded-full hover:scale-105"
            title="show preview"
            onClick={() => {
              setShowPreview(true);
              clearSelection();
            }}
          >
            Show Preview
          </button>
        )}
      </div>
    </div>
  );
}

function Loading() {
  const ref = useRef<HTMLDivElement>(null);
  setTimeout(() => {
    ref.current?.remove();
  }, 1000);

  return (
    <div className="w-full h-full flex justify-center items-center" ref={ref}>
      Loading...
    </div>
  );
}

function getSrcDoc(tikzCode: string): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="https://tikzjax.com/v1/tikzjax.js"></script>
    <link rel="stylesheet" type="text/css" href="https://tikzjax.com/v1/fonts.css">
  </head>
  <body>
    <script type="text/tikz">${tikzCode}</script>
  </body>
</html>`;
}
