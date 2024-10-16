// import { useState } from 'react'

import Canvas from "./canvas/canvas.tsx"
import Result from "./result/result.tsx"
import Title from "./title.tsx"
import ToolBar from "./toolbar/toolbar.tsx"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center'>
      <div className='bg-yellow-100 w-full flex flex-wrap justify-center text-nowrap xl:w-4/5'>
        <Title />
        <ToolBar />
        <Canvas />
        <Result />
      </div>
    </div>
  )
}

export default App
