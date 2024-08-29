const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date;
  };
  const generateUniqueId = () => {
    return `${Math.random().toString(36)}`;
  };

  return (
    <div className="flex justify-between items-center border-2 shadow-md border-lime-300 bg-slate-100 rounded px-2 py-2 hover:bg-slate-200 transition duration-300">
      <p className="flex text-left flex-col">
        <span>Orden Id: </span>
        <span>Fecha: </span>
        <span>Productos Totales: </span>
        <span>Precio total: </span>
      </p>
      <p className="flex text-left flex-col">
        <span>{generateUniqueId()}</span>
        <span>{currentDate()}</span>
        <span>{totalProducts}</span>
        <span>${totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
