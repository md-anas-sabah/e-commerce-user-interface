const CartCard = ({ name, price, image }) => {
  return (
    <div className="flex flex-row rounded-lg gap-10">
      <div className="rounded-lg overflow-hidden object-cover  ">
        <img
          src={image}
          alt="img"
          className="h-14 w-14 text-gray-400 object-cover"
        />
      </div>
      <div className="flex flex-col w-[250px]">
        <h2 className="text-lg text-black font-extralight font-roboto truncate ">
          {name}
        </h2>
        <h4 className=" text-gray-400 font-roboto">{`₹${price}`}</h4>
      </div>
    </div>
  );
};

export default CartCard;
