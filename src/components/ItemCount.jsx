import { Plus, Minus } from 'lucide-react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

export default function ItemCount({ item }) {
  const [cantidad, setCantidad] = useState(1)
  const { addToCart } = useContext(CartContext)


  const sumar = () => setCantidad(prev => prev + 1)
  const restar = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1))
  const handleAdd = () => {
    addToCart({...item, cantidad })
    Swal.fire({
      icon: "success",
      title: "¡Agregado!",
      text: `${item.nombre} fue agregado al carrito`,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1800,
      background: "#fff7f0",
      color: "#2f2f2f",
    })
  }
  return (
    <div className="flex flex-col items-center gap-4 p-4 border-none w-64 bg-white shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">Cantidad: {cantidad}</h2>

      <div className="flex gap-6 items-center">
        <button
          onClick={restar}
          className="text-xl font-bold bg-peach hover:bg-orange-300 text-white px-4 py-2 !rounded-full transition"
        >
          <Minus />
        </button>

        <button
          onClick={sumar}
          className="text-xl font-bold bg-green-600 hover:bg-green-500 text-white px-4 py-2 !rounded-full transition"
        >
          <Plus />
        </button>
      </div>

      <button
        className="mt-4 bg-mauve hover:bg-peach text-amber-100 hover:text-almost-black px-4 py-2 !rounded-md transition"
        onClick={handleAdd}
      >
        Agregar al carrito
      </button>
    </div>
  )
}
