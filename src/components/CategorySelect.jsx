export default function CategorySelect(){
  return(
    <select className="px-2 py-2 rounded text-base border border-dark-green bg-light-beige text-almost-black focus:outline-none focus:ring-2 focus:ring-dark-green transition-colors duration-150" defaultValue=""
>
  <option value="" disabled hidden>
    Opciones de Fotos
  </option>
      <option value="op1">Foto Individual</option>
      <option value="op2">Foto Grupal</option>
      <option value="op3">Foto con Profesor/a</option>
      <option value="op4">Packs</option>
    </select>
  );
};