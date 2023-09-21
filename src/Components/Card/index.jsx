import { useContext } from "react";
import { GrAdd } from "react-icons/gr";
import { ShoppingCartContext } from "../../Context";

const Card = ({ category, product, price, imageUrl }) => {
  const { sumCount, openDetail } = useContext(ShoppingCartContext);
  return (
    <article className="bg-white w-56 h-60">
      <figure
        className="relative w-full h-5/6 rounded-lg overflow-hidden cursor-pointer"
        onClick={openDetail}
      >
        <span className="absolute bottom-1 left-2 bg-white/60 font-normal px-2 rounded-md text-sm">
          {category}
        </span>
        <img
          src={imageUrl}
          alt={`${product} image`}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-1 right-1 flex justify-center items-center bg-gray-100 w-7 h-7 rounded-full font-bold drop-shadow-xl hover:bg-gray-200 active:bg-gray-300 transition-colors"
          onClick={sumCount}
        >
          <GrAdd />
        </button>
      </figure>
      <p className="flex justify-between h-1/6 items-center px-2">
        <span className="text-sm font-light truncate mr-2">{product}</span>
        <span className="text-base font-medium">${price}</span>
      </p>
    </article>
  );
};

export { Card };
