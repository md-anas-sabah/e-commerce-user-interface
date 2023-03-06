import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../redux/toggleCartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeCart());
  });
  const cartItem = useSelector((store) => store.cart.items);

  return <div>
    <h1>Cart Will be Shown here</h1>
  </div>;
};

export default Checkout;
