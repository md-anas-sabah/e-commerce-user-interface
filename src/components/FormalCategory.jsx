import React from "react";

const FormalCategory = () => {
  return (
    <div className="h-[45rem] w-[33rem] relative">
      <img
        src="https://img.joomcdn.net/9ae9070997efd787c019358020694953aa3a0f82_original.jpeg"
        alt="formal-logo"
        className="absolute inset-0 bg-cover bg-center z-0 h-[45rem] w-[33rem] rounded-2xl"
      />
      <h1 className="opacity-0 hover:opacity-70 bg-black rounded-2xl duration-300 absolute inset-0 z-10 flex justify-center  border  items-center text-6xl text-white font-semibold font-bebas tracking-wider">
        Formals
      </h1>
    </div>
  );
};

export default FormalCategory;
