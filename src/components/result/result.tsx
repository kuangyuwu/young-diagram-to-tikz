import { lazy, Suspense } from "react";
import TikzBox from "./tikzbox";

const Preview = lazy(() => import("./preview.tsx"));

export default function Result({
  tikzCode,
  clearSelection,
}: {
  tikzCode: string;
  clearSelection: () => void;
}) {
  return (
    <div className="flex w-11/12 flex-shrink flex-wrap lg:w-3/4">
      <TikzBox tikzCode={tikzCode} />
      <Suspense fallback={<></>}>
        <Preview tikzCode={tikzCode} clearSelection={clearSelection} />
      </Suspense>
    </div>
  );
}
