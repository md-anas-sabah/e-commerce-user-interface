import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutCard from "../components/CheckoutCard";
import { calculateTotals } from "../redux/cartSlice";
import { closeCart } from "../redux/toggleCartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(closeCart());
  });
  const { items, total } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [items]);

  if (items.length < 1) {
    Navigate("/");
  }

  return (
    <div className="flex flex-col mt-14 w-10/12 ml-auto mr-auto border shadow-2xl">
      <div className="flex flex-col items-center gap-3 ">
        {items.map((item) => {
          console.log(items);
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
