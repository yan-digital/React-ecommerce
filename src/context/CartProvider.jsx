import { useState } from 'react'
import { CartContext } from './CartContext'

export default function CartProvider ({ children}) {
  const[cart, setCart] = useState([])

  const addToCart = (prod) => {
    const isInCart = cart.some(item => item.id == prod.id)

    if (isInCart) {
      const repeatedProd = cart.find (item => item.id == prod.id)
      const unrepeatedProd = cart.filter(item => item.id != prod.id)

      setCart ([... unrepeatedProd, {... repeatedProd, cantidad: repeatedProd.cantidad + prod.cantidad}])
    } else{
    setCart ([... cart, prod])
    }
}

  const removeFromCart = (id) => {
    const updatedCart = (cart.filter(item => item.id != id))
    setCart(updatedCart)
  }

  
  const getQuantity = () => {
    const quantity = cart.map(prod => prod.cantidad)
    const amount = quantity.reduce((acc, current) => acc + current, 0)
    
    return amount
  }

  const getTotal = () => {
    const totals = cart.map(prod => prod.cantidad * prod.precio)
    const total = totals.reduce((acc, current) => acc + current, 0)

    return total
  }
  
  const emptyOutCart = () => setCart ([])


  return(
    <CartContext.Provider 
      value={{ cart, addToCart, getQuantity, removeFromCart, getTotal, emptyOutCart }}>
      {children}
    </CartContext.Provider>
  )
}