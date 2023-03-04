import Card from "../components/Card";
import { Store } from "../database/Store";

const Home = () => {
  return (
    <div className="m-10 gap-10 flex flex-row flex-wrap">
      <div>
        <h1 className="font-bebas font-extrabold text-5xl">
          Home
        </h1>
      </div>
      <div className="flex flex-wrap gap-12 p-7 ml-10">
        {Store.map((s) => {
          return (
            <>
              <Card {...s.data} key={s.data.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
