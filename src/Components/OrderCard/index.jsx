const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderXMark;
  if (handleDelete) {
    renderXMark = (
      <p
        onClick={() => handleDelete(id)}
        className="cursor-pointer border-2 px-2 rounded shadow-lg border-lime-300 hover:bg-red-500 hover:border-black hover:text-white transition duration"
      >
        X
      </p>
    );
  }
  return (
    <div className="flex justify-between items-center border-2 shadow-md border-lime-300 bg-slate-100 rounded px-2 py-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover shadow-lg"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium px-2"> ${price}</p>
        {renderXMark}
      </div>
    </div>
  );
};

export default OrderCard;
