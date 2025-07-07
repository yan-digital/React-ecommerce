import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { createOrden } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

export default function Checkout() {
  const { cart } = useContext(CartContext)

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const nombre = form.nombre.value
    const apellido = form.apellido.value
    const telefono = form.telefono.value

    createOrden({
      email,
      nombre,
      apellido,
      telefono,
      products:cart,
      time: serverTimestamp()
    })
  }

  return (
  <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label htmlFor="nombre" className="block text-sm font-medium mb-1">Nombre</label>
      <input id="nombre" placeholder="Pepito" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-mauve focus:outline-none" />
    </div>

    <div>
      <label htmlFor="apellido" className="block text-sm font-medium mb-1">Apellido</label>
      <input id="apellido" placeholder="Prego" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-mauve focus:outline-none" />
    </div>
  </div>

  <div>
    <label htmlFor="telefono" className="block text-sm font-medium mb-1">Teléfono</label>
    <input id="telefono" type="tel" placeholder="1122334456" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-mauve focus:outline-none"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
    <input id="email" type="email" placeholder="pepitoprego@mail.com" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-mauve focus:outline-none"
    />
  </div>

  <button 
    type="submit" 
    className="w-full bg-mauve text-white py-2 rounded-lg hover:bg-mauve-dark transition"
  >
    Finalizar compra
  </button>
</form>

  );
}
