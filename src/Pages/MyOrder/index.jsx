import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import OrdersCard from "../../Components/OrdersCard";
import Layout from "../../Components/Navbar/Layout";
import { ChevronDoubleLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <Layout>
      <div className="mb-10 flex items-center justify-center relativo w-80">
        <Link to="/my-orders" className="">
          <ChevronDoubleLeftIcon className=" h-6 w-6 mr-2 text-black cursor-pointer" />
        </Link>
        <h1>Mi orden</h1>
      </div>

      <div className="px-6 py-3 space-y-4 shadow-lg rounded  ">
        {context.order?.[index]?.products.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          );
        })}
      </div>
      <div className=" absolute rounded shadow flex flex-col left-0 ml-20 w-80  ">
        <h1 className="mb-3 pt-2 text-center">Historial de Ordenes</h1>
        {context.order.map((order, index) => (
          <Link className="mb-3 px-4" key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
