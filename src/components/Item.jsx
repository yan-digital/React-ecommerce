export default function Item({prod}){
  return(
    <div key={prod.id} className="border flex flex-col gap-3 rounded">
          <img src={prod.thumbnail} alt={prod.nombre} className="rounded"/>
          <p>{prod.title}</p>
          <p>$ {prod.price}</p>
          <p>{prod.description}</p>
          <button className="bg-amber-800 cursor-pointer rounded text-amber-200">ver más</button>
    </div>
  );
};