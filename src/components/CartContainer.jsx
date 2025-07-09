import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import { Link } from 'react-router'


export default function Checkout(){
  const { cart, removeFromCart, getTotal, emptyOutCart } = useContext(CartContext)  
  const total = getTotal()

  if (cart.length === 0){
    return <EmptyCart />
  }

  return(
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-2xl mb-4">Tu Carrito</h2>

      {cart.map (prod =>(
        <div key={prod.id} className="flex justify-between items-center border p-4 mb-2 rounded">
          <div>
            <img 
            src={prod.imagen} 
            alt={prod.nombre} 
            className="w-full h-40 md:h-40 object-cover !rounded-lg"/>
            <p className="font-semibold">{prod.nombre}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio unitario: ${prod.precio}</p>
            <p>Subtotal: ${prod.precio * prod.cantidad}</p>
          </div>
          <button 
            onClick={() => removeFromCart(prod.id)} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Eliminar
          </button>
        </div>
      ))}

      <p className="text-xl font-bold text-right">Total: ${total}</p>

      <div className="flex justify-end gap-4 mt-4 text-right">
        <Link to="/checkout">
          <button className="mt-4 bg-peach text-almost-black px-6 py-2 rounded hover:bg-mauve transition">
            Ir a checkout 
          </button>
        </Link>
        <button 
          onClick={emptyOutCart}
          className="mt-4 bg-peach text-almost-black px-6 py-2 rounded hover:bg-mauve transition"
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  )
}