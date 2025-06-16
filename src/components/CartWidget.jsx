import { ShoppingCart } from 'lucide-react';

export default function CartWidget() {
  return (
      <button className="bg-bg-light cursor-pointer hover:bg-mauve hover:text-bg-light transition-colors duration-200 relative w-12 h-12 flex items-center justify-center !rounded-full">
      <ShoppingCart className="text-almost-black w-6 h-6"/>
      <span className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
        2
      </span>
      </button>
  );
};