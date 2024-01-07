
import { Outlet } from 'react-router-dom'
import './App.css'
// import SingUp from '../pages/SingUp.jsx'
// import Home from '../pages/Home.jsx'

function App() {

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
     <SingUp/>
     <Home/> */}
     <Outlet/>
    </>
  )
}

export default App
