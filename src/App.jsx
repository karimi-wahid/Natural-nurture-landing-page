import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import BathBody from "./pages/BathBody"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/product-category/bath&body',
          element: <BathBody />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
