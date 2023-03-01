import { topSalesList } from "../Constant";
import TopSaleCard from "./TopSaleCard";

const TopSaleContainer = () => {
  return (
    <div className="flex flex-wrap gap-10 p-7 ml-10">
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

export default TopSaleContainer;
