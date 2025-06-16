import ItemCount from './ItemCount'

export default function ItemDetail({ detail }){
  return(
    <section className="max-w-4xl mx-auto p-8 flex flex-col md:flex-row gap-10 items-center bg-white !rounded-xl shadow-sm">
      <img
        src={detail?.thumbnail}
        alt={detail?.nombre}
        className="w-full md:w-1/2 h-auto object-contain !rounded-lg"
      />

      <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-almost-black">{detail?.title}</h2>
        <p className="text-gray-600">{detail?.description}</p>
        <p className="text-2xl font-semibold text-mauve">${detail?.price}</p>

        <div className="flex justify-center md:justify-center">
          <ItemCount />
        </div>
      </div>

    </section>
  );
};