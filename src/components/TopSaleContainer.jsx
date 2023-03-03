import { topSalesList } from "../database/TopSaleListDB";
import TopSaleCard from "./TopSaleCard";

const TopSaleContainer = () => {
  return (
    <div className="">
      <div>
        <h1 className="font-bebas ml-20 font-extrabold text-5xl">
          Our Top Sales
        </h1>
      </div>
      <div className="flex flex-wrap gap-12 p-7 ml-10">
        {topSalesList.map((topSales, i) => {
          return (
            <div>
              <TopSaleCard key={i} {...topSales.data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSaleContainer;
