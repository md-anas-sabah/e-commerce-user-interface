import Categories from "./Categories";
import TopSaleContainer from "./TopSaleContainer";

const Body = () => {
  return (
    <div className="m-10  flex flex-row flex-wrap">
      <Categories />
      <TopSaleContainer />
    </div>
  );
};

export default Body;
