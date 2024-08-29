import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useState } from "react";

const Card = (data) => {
  //carrito de compras
  const context = useContext(ShoppingCartContext);

  //agrega items al carrito
  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckOut();
    context.closeProductDetail();
  };

  //para mostrar producto
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckOut();
  };
  const [showText, setShowText] = useState(false);
  const handleMouseEnter = () => {
    setShowText(true);
  };
  const handleMouseLeave = () => {
    setShowText(false);
  };
  return (
    <div
      onClick={() => showProduct(data.data)}
      className="bg-white cursor-pointer w-54 h-61 rounded-lg"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-1 px-2 mb-4 ml-2 rounded-lg bg-white/60 text-sm border-2 border-black text-black">
          {data.data.category.name}
        </span>
        <img
          className="rounded-sm border-2 border-lime-300 shadow "
          src={data.data.images[0]}
          alt={data.data.title}
        />
        <div
          onClick={(event) => addProductToCart(event, data.data)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute top-2 right-2 border border-black flex justify-center items-center text-xs shadow bg-white/40 w-6 h-6 rounded-full hover:w-24 duration-300 ease-in-out hover:bg-lime-300"
        >
          {/* Renderiza "+" cuando showText es false, y "Agregar 🛒" cuando es true */}
          {showText ? (
            <span className="transition-all duration-300  ease-in-out opacity-100 translate-x-0">
              Agregar 🛒
            </span>
          ) : (
            <span className="transition-all duration-300 ease-in-out opacity-100 translate-x-0">
              +
            </span>
          )}
        </div>
      </figure>
      <p className="flex justify-between text-center py-2 bg-lime-300 border-2 border-black shadow rounded-sm">
        <span className="text-sm  font-semibold px-1">{data.data.title}</span>
        <span className="text-md text-center font-bold px-1">
          ${data.data.price}
        </span>
      </p>
    </div>
  );
};

export default Card;
