import { useState } from 'react'
import { Navbar } from './components/Navbar'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex bg-zinc-900">
      <div className='w-[300px] h-full bg-zinc-800 text-white p-5'>
        <Navbar />
      </div>
      <div className='w-[calc(100%-300px)] p-5 text-white'>
        <h1>MENU DROPDOWN</h1>
      </div>
    </div>
  )
}

export default App
