import Preview from "./preview"
import TikzBox from "./tikzbox"

export default function Result() {
  return (
    <div className="w-11/12 flex flex-wrap flex-shrink lg:w-3/4">
      <TikzBox />
      <Preview />
    </div>
  )
}