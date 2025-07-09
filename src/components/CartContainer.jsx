import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import CartView from './CartView'

export default function CartContainer(){
  const { cart, removeFromCart, getTotal, emptyOutCart } = useContext(CartContext)
  const total = getTotal()

  if (cart.length === 0) return <EmptyCart />

  return (
    <CartView 
      cart={cart}
      total={total}
      removeFromCart={removeFromCart}
      emptyOutCart={emptyOutCart}
    />
  )
}