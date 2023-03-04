import { casual } from "../database/CasualDB";
import Card from "./Card";

const CasualContainer = () => {
  return (
    <>
      <div>
        <h1 className="font-bebas font-extrabold text-5xl">
          Sneakers & Low-tops
        </h1>
      </div>
      <div className="flex flex-wrap gap-12 p-7 ml-10">
        {casual.map((c) => {
          return (
            <>
              <Card {...c.data} key={c.data.id} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default CasualContainer;
