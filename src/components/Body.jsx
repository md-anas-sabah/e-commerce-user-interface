import { topSalesList } from "../Constant";
import Card from "./Card";

const Body = () => {
  return (
    <div className="flex flex-wrap gap-3 ">
      {topSalesList.map((topSales) => {
        return (
          <div>
            <Card {...topSales.data} />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
