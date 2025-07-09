import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'
import Checkout from './components/Checkout'
import CartContainer from './components/CartContainer'

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<CartContainer/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
