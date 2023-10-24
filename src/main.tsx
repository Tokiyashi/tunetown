import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {CssBaseline} from "@mui/material";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import StoreProvider from "@/store/storeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline/>
    <StoreProvider>
      <RouterProvider router={router}/>
    </StoreProvider>
  </React.StrictMode>,
)
