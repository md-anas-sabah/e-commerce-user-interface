import {
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { decrease, removeItem } from "../redux/cartSlice";
import { increase } from "../redux/cartSlice";
const CheckoutCard = ({ id, name, price, image, amount }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center border-b-gray-600 w-3/4 ">
        <div className="flex flex-row items-center gap-5 w-96">
          <img src={image[0]} alt="product" className="h-48 w-28" />
          <h1 className="font-roboto font-extralight truncate">{name}</h1>
        </div>
        <div className="flex flex-row gap-2">
          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <p>{amount}</p>
          <button
            onClick={() => {
              dispatch(increase({ id }));
              console.log(dispatch);
            }}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="font-roboto font-extralight">{`₹${price}`}</div>
        <div>
          <button onClick={() => handleRemove(id)}>
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutCard;
