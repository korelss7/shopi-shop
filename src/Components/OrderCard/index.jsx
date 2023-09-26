import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { ShoppingCartContext } from "../../Context";

const OrderCard = ({ imageUrl, qty, product, price, description }) => {
  const {
    addProductCart,
    reduceQtyProduct,
    deleteProductCart,
    setProductInfoShow,
    openDetail,
  } = useContext(ShoppingCartContext);

  const isGreater1 = "hover:bg-red-400 cursor-pointer";

  const showDetail = () => {
    setProductInfoShow({ product, price, imageUrl, description });
    openDetail();
  };
  return (
    <div className="flex justify-between rounded-lg overflow-hidden bg-slate-50 shadow-lg min-h-[80px]">
      <div className="flex">
        <figure
          className="flex w-20 h-20 relative items-center justify-center bg-gray-300"
          onClick={() => showDetail()}
        >
          <HiMagnifyingGlassPlus className="text-5xl" />
          <img
            className="w-full h-full object-cover bg-transparent cursor-pointer select-none hover:opacity-0 transition-all absolute top-0"
            src={imageUrl}
            alt=""
          />
        </figure>

        <div className="flex flex-col justify-around ml-3">
          <p className="text-base font-medium leading-5 h-10 overflow-hidden w-[130px] select-none">
            {product}
          </p>
          <div className="flex items-center gap-2">
            <div
              className={`${
                qty > 1 ? isGreater1 : ""
              } bg-slate-200 p-[2px] rounded-full transition-colors`}
              onClick={() => reduceQtyProduct(product, 1)}
            >
              <AiOutlineMinus />
            </div>
            <p className="font-medium select-none">{qty}</p>
            <div
              className="bg-slate-200 p-[2px] rounded-full hover:bg-emerald-200 cursor-pointer transition-colors"
              onClick={() => addProductCart({ product })}
            >
              <AiOutlinePlus />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mr-2">
        <p className="font-semibold select-none">
          <span className="font-medium text-lg text-green-400 mr-1">$</span>
          {Number((price * qty).toFixed(2))}
        </p>
        <BsTrash
          className="text-xl text-gray-400 cursor-pointer hover:text-red-500 transition-colors"
          onClick={() => deleteProductCart(product)}
        />
      </div>
    </div>
  );
};

export { OrderCard };
