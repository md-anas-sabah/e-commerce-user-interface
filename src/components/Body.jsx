import { topSalesList } from "../Constant";
import TopSaleCard from "./TopSaleCard";
import { useSelector } from "react-redux";

const Body = () => {
  const isOpenCart = useSelector((store) => store.toggle.toggleCart);

  return (
    <div className="flex flex-wrap gap-7 p-10 ">
      {topSalesList.map((topSales) => {
        return (
          <div>
            <TopSaleCard {...topSales.data} />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
