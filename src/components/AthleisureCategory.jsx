import React from "react";

const AthleisureCategory = () => {
  return (
    <div className="h-[45rem] w-[24rem] relative">
      <img
        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRfhvuA6nrtB7FjqhlKCTmfKhE_pkKvR5OClPHcAtVl2dwLa4LciT6AY5iC-NeE9gRR_8qmdJe3IcP6eLZYKrtfDA7I7kjsKg&usqp=CAE"
        alt="formal-logo"
        className="absolute inset-0 bg-cover bg-center z-0 h-[45rem] w-[24rem] object-cover rounded-2xl"
      />
      <h1 className="opacity-0 hover:opacity-70 bg-black rounded-2xl duration-300 absolute inset-0 z-10 flex justify-center  border  items-center text-6xl text-white font-semibold font-bebas tracking-wider">
        Athleisure
      </h1>
    </div>
  );
};

export default AthleisureCategory;
