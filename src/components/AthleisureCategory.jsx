import React from "react";

const AthleisureCategory = () => {
  return (
    <div className="h-[45rem] w-[33rem] relative">
      <img
        src="https://redtape.com/catalog/view/theme/default/image/newsletter-man.jpg"
        alt="formal-logo"
        className="absolute inset-0 bg-cover bg-center z-0 h-[45rem] w-[33rem] rounded-2xl"
      />
      <h1 className="opacity-0 hover:opacity-70 bg-black rounded-2xl duration-300 absolute inset-0 z-10 flex justify-center  border  items-center text-6xl text-white font-semibold font-bebas tracking-wider">
        Athleisure
      </h1>
    </div>
  );
};

export default AthleisureCategory;
