import { useContext } from "react";
import Layout from "../../Components/Navbar/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="mb-10 flex items-center justify-center relativo w-80">
        <h1>Mis ordenes</h1>
      </div>
      {context.order.map((order, index) => (
        <Link className="mb-3" key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
