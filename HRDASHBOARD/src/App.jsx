import { useState } from 'react'
import MiniDrawer from './sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MiniDrawer />
      </div>
     
    </>
  )
}

export default App
