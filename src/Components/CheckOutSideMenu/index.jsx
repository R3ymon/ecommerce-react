import { useContext } from "react";
import { Link } from "react-router-dom";
import OrderCard from "../../Components/OrderCard";
import "../CheckOutSideMenu/styles.css";
import { ShoppingCartContext } from "../../Context";
import { totalPrice } from "../utils";

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckOut = () => {
    const orderToAdd = {
      date: "01.02.24",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };
  return (
    <aside
      className={`${
        context.isCheckOutOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      } product-detail transform transition-transform duration-300 ease-in-out flex-col fixed right-0 border-4 mr-2 border-lime-300 shadow-lg rounded-lg bg-white h-full`}
    >
      <div className="flex justify-between items-center px-3 py-2">
        <h2 className="font-medium text-xl flex border-2 border-lime-300 shadow rounded px-2">
          Mi Carrito 🛒
        </h2>
        <div
          onClick={() => context.closeCheckOut()}
          className="border-2 shadow px-2 cursor-pointer border-lime-300  hover:bg-black hover:text-white transition duration-500 "
        >
          X
        </div>
      </div>
      <div className="px-6 py-2 space-y-4 overflow-y-scroll  h-auto max-h-[72vh]">
        {context.cartProducts.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className="px-6 mt-2 ">
        <p className="flex border-4 p-2 border-lime-300 rounded-md justify-between">
          <span className="font-normal text-xl">Total:</span>
          <span className="font-semibold text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <div className="flex justify-center mt-2 border-2 border-red-500 rounded p-2 cursor-pointer hover:bg-red-500 hover:text-white transition duration-500">
            <button onClick={() => handleCheckOut()} className="font-bold">
              CHECK OUT
            </button>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
