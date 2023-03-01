import TopSaleContainer from "./TopSaleContainer";

const Body = () => {
  return (
    <div className="">
      <div className="m-10 flex flex-row flex-wrap">
        <h1 className="font-bebas font-extrabold text-5xl">Our Top Sales</h1>
        <TopSaleContainer />
      </div>
    </div>
  );
};

export default Body;
