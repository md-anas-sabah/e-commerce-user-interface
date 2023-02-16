import { ShoppingBagIcon } from "@heroicons/react/24/outline";
const Card = ({ name, price, image }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className=" rounded-lg aspect-auto overflow-hidden">
        <img src={image} alt="image" className="h-60 w-60 " />
        <div className="flex justify-center">
          <img
            src={image[1]}
            alt="image"
            className="h-16 w-16 object-contain"
          />
          <img
            src={image[2]}
            alt="image"
            className="h-16 w-16 object-contain"
          />
          <img
            src={image[3]}
            alt="image"
            className="h-16 w-16 object-contain"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold truncate font-roboto">{name}</h1>
          <h3 className="font-roboto"> {`₹${price}`} </h3>
        </div>
        <div className="">
          <ShoppingBagIcon className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Card;
