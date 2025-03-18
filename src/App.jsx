import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Archive from './Pages/Home/Archive'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}/>
    </Routes>
      
    </>
  )
}

export default App
