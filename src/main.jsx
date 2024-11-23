import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Dashboard from './Component/Dashboard/Dashboard';
import Statistics from './Component/Statistics/Statistics';
import ProductsDetails from './Component/ProductsDetails/ProductsDetails';

const router = createBrowserRouter([
  {
    path : "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products/:productId",
        element: <ProductsDetails></ProductsDetails>,
        loader: ()=> fetch('./product.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
