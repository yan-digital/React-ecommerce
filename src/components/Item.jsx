import { useNavigate } from 'react-router'

export default function Item({prod}){
  const navigate = useNavigate()
  return(
    <div className="flex flex-col gap-3 rounded-xl shadow-md border p-4 bg-white hover:shadow-lg transition-all duration-300">
          <img 
            src={prod.thumbnail} 
            alt={prod.nombre} 
            className="w-full h-48 object-cover rounded-lg"/>
          <h2 className="text-lg font-semibold text-gray-800">{prod.title}</h2>
          <p className="text-amber-800 font-bold">$ {prod.price}</p>
          <p className="text-sm text-gray-600 line-clamp-3">{prod.description}</p>
          <button 
            className="mt-auto bg-amber-800 hover:bg-amber-700 text-amber-100 rounded-md py-2 px-4 transition-colors duration-200"
            onClick={() => navigate(`/item/${prod.id}`)}
          >
            ver más
          </button>
    </div>
  );
};