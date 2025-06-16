import { Plus, Minus } from 'lucide-react';
import { useState } from "react";

export default function ItemCount() {
  const [cantidad, setCantidad] = useState(0);

  const sumar = () => setCantidad(prev => prev + 1);
  const restar = () => setCantidad(prev => (prev > 0 ? prev - 1 : 0));

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
      >
        Agregar al carrito
      </button>
    </div>
  );
}
