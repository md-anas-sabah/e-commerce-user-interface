import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutCard from "../components/CheckoutCard";
import { closeCart } from "../redux/toggleCartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeCart());
  });
  const { items, amount, total } = useSelector((store) => store.cart);

  return (
    <div className="flex flex-col mt-14 w-10/12 ml-auto mr-auto border shadow-2xl">
      <div className="flex flex-col items-center gap-3 ">
        {items.map((item) => {
          return <CheckoutCard {...item.data} key={item.data.id} />;
        })}
      </div>
      <div className="">
        <h1>Total: ₹{total} </h1>
      </div>
    </div>
  );
};

export default Checkout;
