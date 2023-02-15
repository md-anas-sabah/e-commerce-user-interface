import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
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
          <ShoppingBasketIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Header;
