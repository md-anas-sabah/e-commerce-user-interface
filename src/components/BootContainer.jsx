import { boots } from "../database/BootDB";
import Card from "./Card";

const BootContainer = () => {
  return (
    <>
      <div>
        <h1 className="font-bebas font-extrabold text-5xl">Boots Collection</h1>
      </div>
      <div className="flex flex-wrap gap-12 p-7 ml-10">
        {boots.map((boot) => {
          return (
            <>
              <Card {...boot.data} key={boot.data.id} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default BootContainer;
