import CartWidget from "./CartWidget";
import CategorySelect from "./CategorySelect";
import logo from "../assets/logo-danyi.png";

export default function NavBar(){
  return(
    <nav className="bg-light-beige flex justify-between items-center p-2 px-6 py-3">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo de Danyi" className="h-20" />
        <CategorySelect/>
      </div>
      <CartWidget/>
    </nav>
  );
};