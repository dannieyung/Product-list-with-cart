import { createBrowserRouter,RouterProvider } from "react-router-dom"

import { Product } from "./New Cart/Pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Product />,
   
  },
])


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
