import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const { isDetailOpen, closeDetail, productInfoShow } =
    useContext(ShoppingCartContext);
  const visible = isDetailOpen ? "flex" : "hidden";

  return (
    <aside
      className={`${visible} fixed flex-col top-[69px] right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-70px)] bg-[#fff]`}
    >
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={closeDetail}>
          <GrClose className="text-xl" />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <figure className="w-4/5 h-[210px]">
          <img
            src={productInfoShow?.imageUrl}
            alt={productInfoShow?.product}
            className="w-full h-full object-scale-down"
          />
        </figure>
        <h3 className="mt-2 text-center text-base px-4 font-bold">
          {productInfoShow?.product}
        </h3>
        <div className="px-4 mt-4 w-full h-fit">
          <p className="font-semibold text-base text-black/90">Description: </p>
          <p className="bg-slate-200/70 text-sm text-zinc-600 p-2 mt-1 max-h-[25vh] overflow-x-auto rounded-md scroll-smooth">
            {productInfoShow?.description}
          </p>
        </div>
      </div>

      <p className="absolute bottom-14 flex justify-between items-center w-11/12 self-center">
        <span className="font-semibold text-base text-black/90">Price:</span>
        <span className="bg-black rounded-md py-1 px-2 text-white">
          ${productInfoShow?.price}
        </span>
      </p>

      <button className="absolute w-11/12 bottom-3 border border-black rounded-md bg-emerald-300 hover:bg-[#67d7a6] active:bg-[#4fd199] transition-colors text-lg font-medium self-center py-1">
        Add to Cart
      </button>
    </aside>
  );
};

export { ProductDetail };
