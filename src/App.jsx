import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"

import ProductType from "./pages/ProductType"
import About from "./pages/About"
import Contact from "./pages/Contact"

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
          path: '/product-category/:category',
          element: <ProductType />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
