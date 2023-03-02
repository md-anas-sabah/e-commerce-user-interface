import CasualCategory from "./CasualCategory";
import FormalCategory from "./FormalCategory";

const Categories = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-bebas mt-6 font-extrabold text-5xl">Categories</h1>
      </div>
      <div className="flex gap-3">
        <div>
          <FormalCategory />
        </div>
        <div className="flex flex-col gap-4 ">
          <CasualCategory />
          <CasualCategory />
        </div>
        <div>
          <FormalCategory />
        </div>
      </div>
    </div>
  );
};

export default Categories;
