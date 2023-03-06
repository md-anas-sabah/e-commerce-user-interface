import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { closeCart } from "../redux/toggleCartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeCart());
  });
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div>
      <div>
        {cartItem.map((item) => {
          return <CartCard {...item.data} key={item.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Checkout;
