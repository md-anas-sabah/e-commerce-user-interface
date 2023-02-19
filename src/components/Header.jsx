import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch } from "react-redux";
import { toggleCart } from "../redux/toggleSlice";

const Header = () => {
  // const isOpenCart = useSelector((store) => store.toggle.toggleCart);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCart());
  };

  return (
    <div className="h-12 p-2 flex items-center justify-between bg-[#FFFFFF] shadow">
      <div className="ml-3">
        <Link to="/">
          <h1 className="font-bebas tracking-widest text-4xl">
            Muro<span className="font-bangers">exe</span>
          </h1>
        </Link>
      </div>
      <div className="flex mr-20 gap-3">
        <PersonIcon fontSize="large" />
        <div className="">
          <ShoppingBasketIcon
            className="cursor-pointer"
            fontSize="large"
            onClick={() => handleToggle()}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
