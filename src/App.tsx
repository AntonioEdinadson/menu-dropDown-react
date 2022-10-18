import { useState } from 'react'
import { Navbar } from './components/Navbar'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <Navbar />
    </div>
  )
}

export default App
