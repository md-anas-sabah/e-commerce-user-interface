import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/toggleCartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  const isOpenCart = useSelector((store) => store.toggleCart.isOpenCart);

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <div className="h-12 p-2 flex items-center justify-between sticky top-0 z-50 bg-[#FFFFFF] shadow">
      <div className="ml-3">
        <Link to="/">
          <h1 className="font-bebas tracking-widest text-4xl">
            Muro<span className="font-bangers">exe</span>
          </h1>
        </Link>
      </div>
      <div className="flex mr-20 gap-60">
        <div className="flex flex-col ">
          <div className="flex ">
            <ShoppingBasketIcon
              className="cursor-pointer"
              fontSize="large"
              onClick={() => handleToggle()}
            />
            <p className="font-bold font-roboto"> {cartItem.length} </p>
          </div>
          <div className="px-10">{!isOpenCart && <h1>Hello cart</h1>}</div>
        </div>
        <PersonIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Header;
