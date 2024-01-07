import React from 'react'
import ReactDOM from 'react-dom/client'
 import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import SingUp from './pages/singUp.jsx'
import Home from './pages/Home.jsx'
// import Home from '../pages/Home.jsx'



 const router=createBrowserRouter([
       {
        path:'/',
         element:<App/>,
        children:[
          {
          path:"",
          element:<Login/>
          },
          {
          path:"signup",
          element:<SingUp/>
          },
          {
           path:"home",
           element:<Home/>
          }

        ]
       }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
