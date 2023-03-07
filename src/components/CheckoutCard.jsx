const CheckoutCard = ({ name, price, image }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center border-b-gray-600 w-3/4 ">
        <div className="flex flex-row items-center gap-5">
          <img src={image[0]} alt="product" className="h-48 w-28" />
          <h1 className="font-roboto font-extralight">{name}</h1>
        </div>
        <div>
          <h1>Quantity</h1>
        </div>
        <div className="font-roboto font-extralight">{`₹${price}`}</div>
        <div>
          <h1>Remove</h1>
        </div>
      </div>
      
    </>
  );
};

export default CheckoutCard;
