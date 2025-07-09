import { Link } from 'react-router'

export default function EmptyCart() {
  return(
    <div className="flex flex-col items-center justify-center">
      <h2 className="!mb-10 !mt-10 text-xl">Tu carrito está vacío 🫢</h2>
      <Link to="/">
        <button className="bg-peach text-almost-black px-6 py-2 rounded hover:bg-mauve transform hover:scale-110 transition-all duration-300">Ver Productos</button>
      </Link>
    </div>
  )
}