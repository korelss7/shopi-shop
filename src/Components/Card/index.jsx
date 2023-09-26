import { useContext } from "react";
import { GrAdd } from "react-icons/gr";
import { ShoppingCartContext } from "../../Context";

const Card = ({ category, product, price, imageUrl, description }) => {
  const { openDetail, setProductInfoShow, addProductCart, openCheckout } =
    useContext(ShoppingCartContext);

  const showDetail = () => {
    setProductInfoShow({ category, product, price, imageUrl, description });
    openDetail();
  };

  return (
    <article className="bg-white w-52 h-56">
      <figure className="relative w-full h-5/6 rounded-lg overflow-hidden cursor-pointer">
        <span
          className="absolute bottom-1 left-2 bg-white/60 font-normal px-2 rounded-md text-sm"
          onClick={showDetail}
        >
          {category}
        </span>
        <img
          src={imageUrl}
          alt={`${product} image`}
          className="w-full h-full object-cover"
          onClick={showDetail}
        />
        <button
          className="absolute top-1 right-1 flex justify-center items-center bg-gray-100 w-7 h-7 rounded-full font-bold drop-shadow-xl hover:bg-gray-200 active:bg-gray-300 transition-colors"
          onClick={() => {
            addProductCart({ product, price, imageUrl, description });
            openCheckout();
          }}
        >
          <GrAdd />
        </button>
      </figure>
      <p className="flex justify-between h-1/6 items-center px-2">
        <span
          className="text-sm font-light truncate mr-2 cursor-pointer"
          onClick={showDetail}
        >
          {product}
        </span>
        <span className="text-base font-medium">${price}</span>
      </p>
    </article>
  );
};

export { Card };
