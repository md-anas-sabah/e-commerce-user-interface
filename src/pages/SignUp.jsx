import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex justify-between  h-[54.3rem]">
      <div className="bg-black w-4/12 rounded-tr-[6rem] rounded-br-[6rem]">
        <div className="flex flex-col text-center items-center m-14 p-14">
          <h1 className="text-white text-3xl uppercase">
            Already have an account
          </h1>
          <p className=" mt-4 text-sm text-gray-400 uppercase">
            the Trending Collection calls your presence
          </p>
          <Link to="/login">
            <button className="h-12 rounded-full bg-white text-black mt-20 uppercase tracking-widest w-48 align-middle">
              Sign-in
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-3/5 text-center items-center m-14 p-14">
        <h1 className="font-bold font-bebas text-6xl">SignUp to purchase</h1>

        <div className="mt-10 flex flex-col items-center gap-10 w-1/3">
          <input
            type="text"
            placeholder="Display Name"
            className="h-12 w-full font-roboto bg-gray-100 p-4 rounded-full text-lg focus:outline-none"
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="h-12 w-full font-roboto bg-gray-100 p-4 rounded-full text-lg focus:outline-none"
          />
          <button className="h-12 rounded-full bg-black text-white uppercase tracking-widest w-48 align-middle">
            Sign-In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
