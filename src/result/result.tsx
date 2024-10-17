import Preview from "./preview"
import TikzBox from "./tikzbox"

export default function Result({ tikzCode }: { tikzCode: string }) {
  return (
    <div className="w-11/12 flex flex-wrap flex-shrink lg:w-3/4">
      <TikzBox tikzCode={tikzCode}/>
      <Preview tikzCode={tikzCode}/>
    </div>
  )
}