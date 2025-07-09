import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartProvider from './context/CartProvider.jsx'
import { LoaderProvider } from './context/LoaderProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </LoaderProvider>
  </StrictMode>
)
