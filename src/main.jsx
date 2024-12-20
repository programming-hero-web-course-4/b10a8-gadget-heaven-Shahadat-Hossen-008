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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Gadget from './Component/Gadget/Gadget';
import Errorpage from './Component/ErrorPage/Errorpage';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path : "/",
    element: <Root></Root>,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products/:productId",
        element: <ProductsDetails></ProductsDetails>,
        loader: ()=> fetch('/product.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: ()=> fetch('/product.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: ()=> fetch('/product.json')
      },
      {
        path: "/product",
        element: <Gadget></Gadget>
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer />
   </HelmetProvider>
  </StrictMode>,
)
