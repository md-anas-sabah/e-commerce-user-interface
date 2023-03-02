import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
const Card = ({ name, price, image }) => {
  const dispatch = useDispatch();

  const handleCartItems = () => {
    dispatch(addItem());
  };

  return (
    <div
      className="flex flex-col gap-4 bg-white h-[30rem] w-72 hover:drop-shadow-lg transform 
    transition hover:scale-105"
    >
      <div className=" rounded-lg aspect-auto overflow-hidden ">
        <img src={image[0]} alt="image" className="h-80 w-72 " />
        <div className="flex justify-center">
          <img
            src={image[1]}
            alt="image"
            className="h-16 w-16 object-contain"
          />
          <img
            src={image[2]}
            alt="image"
            className="h-16 w-16 object-contain"
          />
          <img
            src={image[3]}
            alt="image"
            className="h-16 w-16 object-contain"
          />
        </div>
      </div>
      <div className="flex justify-between px-3">
        <div className="flex flex-col w-52">
          <h1 className="text-md font-bold truncate font-roboto uppercase">
            {name}
          </h1>
          <h3 className="font-michroma font-semibold text-red-900">
            {`₹${price}`}
          </h3>
        </div>
        <div className="">
          <ShoppingBagIcon
            className="h-8 w-8 cursor-pointer"
            onClick={() => handleCartItems()}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;