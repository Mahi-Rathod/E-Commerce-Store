import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Layout from './Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddProducts from "../src/Components/AddProducts/AddProducts"
import ViewProducts from "../src/Components/ViewProducts/ViewProducts"
const router = createBrowserRouter([{
  path:'',
  element:<Layout />,
  children:[
    {path:"/",element:<ViewProducts />},
    {path:"add",element:<AddProducts />},
  ]
}])


function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  )
}

export default App
