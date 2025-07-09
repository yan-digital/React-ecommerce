import { useNavigate } from 'react-router'

export default function Item({prod}){
  const navigate = useNavigate()
  return(
    <div className="flex flex-col gap-3 rounded-xl shadow-md border p-4 bg-bg-light hover:shadow-lg transition-all duration-300">
          <img 
            src={prod.imagen} 
            alt={prod.nombre} 
            className="w-full h-80 md:h-96 object-cover !rounded-lg"/>
          <h2 className="text-lg font-semibold text-dark-green">{prod.nombre}</h2>
          <p className="text-mauve font-bold">$ {prod.precio}</p>
          <p className="text-sm text-gray-600 line-clamp-3">{prod.descripcion}</p>
          <button 
            className="mt-auto bg-light-beige hover:bg-light-pink text-almost-black !rounded-lg py-3 px-6 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => navigate(`/item/${prod.id}`)}
          >
            ver más
          </button>
    </div>
  )
}