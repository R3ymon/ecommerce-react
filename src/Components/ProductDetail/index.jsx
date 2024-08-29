import { useContext } from "react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import "../../Components/ProductDetail/styles.css";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  //cambiar estado del boton
  const [buttonText, setButtonText] = useState("Añadir al Carrito 🛒");

  const handleClick = () => {
    setButtonText("Listo, añadido 😁✔");
    setTimeout(() => {
      setButtonText("Añadir al carrito");
      setClickCount(0);
    }, 2000);
    context.setCount(context.count + 1);
  };

  return (
    <aside
      className={`${
        context.isProductDetailOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      } product-detail transform transition-transform duration-300  ease-in-out flex-col fixed right-0 border-4 mr-2 border-lime-300 shadow-lg rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center px-3 py-2">
        <h2 className="font-medium text-xl flex border-2 border-lime-300 shadow rounded px-2">
          <Bars3Icon className="h-5 mt-1 mr-1 w-5"></Bars3Icon> Detalle
        </h2>
        <div
          onClick={() => context.closeProductDetail()}
          className="border-2 shadow px-2 cursor-pointer border-lime-300  hover:bg-black hover:text-white transition duration-500 "
        >
          X
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full mt-2 border-4 border-lime-300 shadow-lg rounded-lg"
          src={context.productToShow.images[0]}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-normal text-2xl">
          ${context.productToShow.price}
        </span>
        <span className="text-md font-bold mt-2">
          {context.productToShow.title}
        </span>
        <span className="font-medium border-2 p-2 mt-2 border-lime-300">
          {context.productToShow.description}
        </span>
      </p>

      <div className="flex justify-center">
        <button
          onClick={handleClick}
          className="border-2 mt-4 font-bold border-lime-300 rounded px-4 py-2 hover:bg-lime-300 hover:border-black transition duration-500 "
        >
          {buttonText}
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
