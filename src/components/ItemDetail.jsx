import ItemCount from './ItemCount'

export default function ItemDetail({ detail }){
  return(
    <section className="max-w-4xl mx-auto p-8 flex flex-col md:flex-row gap-10 items-center bg-white !rounded-xl shadow-sm">
      <img
        src={detail?.imagen}
        alt={detail?.nombre}
        className="w-full md:w-1/2 h-auto object-contain !rounded-lg"
      />

      <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-almost-black">{detail?.nombre}</h2>
        <p className="text-gray-600">{detail?.descripcion}</p>
        <p className="text-2xl font-semibold text-mauve">${detail?.precio}</p>

        <div className="flex justify-center md:justify-center">
          <ItemCount item={ detail }/>
        </div>
      </div>

    </section>
  );
};