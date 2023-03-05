const CartCard = ({ name, price, image }) => {
  return (
    <div className="flex items-center bg-gray-900 shadow rounded-lg gap-3">
      <div className="rounded-lg aspect-video overflow-hidden object-cover  ">
        <img
          src={image}
          alt="img"
          className="h-40 w-40 text-gray-400 bg-gray-900"
        />
      </div>
      <div className="flex flex-col  bg-gray-400 w-3/6 ">
        <h2 className="font-bold text-2xl text-gray-400 bg-gray-900">{name}</h2>

        <h4 className="font-semibold text-gray-400 bg-gray-900">
          {`Cost ₹${price}`}
        </h4>
      </div>
    </div>
  );
};

export default CartCard;
