import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex justify-between  h-[54.3rem]">
      <div className="flex flex-col w-3/5 text-center items-center m-14 p-14">
        <h1 className="font-bold font-bebas text-6xl">Login to your account</h1>
        <p className="font-roboto text-gray-400 mt-1 uppercase">
          Login using social network
        </p>
        <div className="flex flex-row mt-4 gap-10">
          <button className="h-14 w-14 border bg-blue-300 text-2xl text-white font-bold rounded-full">
            F
          </button>
          <button className="h-14 w-14 border bg-blue-500 text-2xl text-white font-bold rounded-full">
            G
          </button>
          <button className="h-14 w-14 border bg-blue-700 text-2xl text-white font-bold rounded-full">
            in
          </button>
        </div>
        <div className="w-1/4 mt-10">
          <span className=" uppercase font-roboto font-bold ">or</span>
        </div>

        <div className="mt-10 flex flex-col items-center gap-10 w-1/3">
          <input
            type="text"
            placeholder="Email"
            className="h-12 w-full font-roboto bg-gray-100 p-4 rounded-full text-lg focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-12 w-full font-roboto bg-gray-100 p-4 rounded-full text-lg focus:outline-none"
          />
          <button className="h-12 rounded-full bg-black text-white uppercase tracking-widest w-48 align-middle">
            Sign-In
          </button>
        </div>
      </div>
      <div className="bg-black w-4/12 rounded-tl-[6rem] rounded-bl-[6rem]">
        <div className="flex flex-col text-center items-center m-14 p-14">
          <h1 className="text-white text-6xl uppercase">New Here?</h1>
          <p className=" mt-4 text-sm text-gray-400 uppercase">
            the Trending Collection calls your presence
          </p>
          <Link to="/signup">
            <button className="h-12 rounded-full bg-white text-black mt-20 uppercase tracking-widest w-48 align-middle">
              Sign-Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
