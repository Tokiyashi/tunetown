import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {CssBaseline} from "@mui/material";
import './index.css'
import StoreProvider from "@/store/storeProvider";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline/>
    <StoreProvider>
      <App/>
    </StoreProvider>
  </React.StrictMode>,
)
