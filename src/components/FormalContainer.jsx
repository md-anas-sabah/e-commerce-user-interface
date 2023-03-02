import { formals } from "../Constant";
import Card from "./Card";

const FormalContainer = () => {
  return (
    <>
      <div>
        <h1 className="font-bebas font-extrabold text-5xl">
          Formal Collections
        </h1>
      </div>
      <div className="flex flex-wrap gap-12 p-7 ml-10">
        {formals.map((formal) => {
          return (
            <>
              <Card key={formal.data.id} {...formal.data} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default FormalContainer;
