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
      <div className="flex h-60 w-auto items-center justify-center overflow-hidden rounded-3xl bg-white p-3 sm:h-96">
        {showPreview ? (
          <div className="h-5/6 w-5/6">
            <Loading />
            <iframe
              className="h-full w-full bg-white"
              sandbox="allow-same-origin allow-scripts"
              srcDoc={srcDoc}
            ></iframe>
          </div>
        ) : (
          <button
            className="h-10 w-40 rounded-full bg-amber-100 text-amber-600 hover:scale-105"
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
    <div className="flex h-full w-full items-center justify-center" ref={ref}>
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
