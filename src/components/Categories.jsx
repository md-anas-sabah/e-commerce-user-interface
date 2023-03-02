import AthleisureCategory from "./AthleisureCategory";
import CasualCategory from "./CasualCategory";
import FormalCategory from "./FormalCategory";
import SportsCategory from "./SportsCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex w-full flex-col flex-wrap gap-10">
      <div>
        <h1 className="font-bebas ml-20 mt-6 font-extrabold text-5xl">Categories</h1>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div>
          <Link to="/formalsection">
            <FormalCategory />
          </Link>
        </div>
        <div className="flex flex-col gap-4 ">
          <Link to="/casualsection">
            <CasualCategory />
          </Link>

          <Link to="/sportssection">
            <SportsCategory />
          </Link>
        </div>
        <div>
          <Link to="/athleisuresection">
            <AthleisureCategory />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
