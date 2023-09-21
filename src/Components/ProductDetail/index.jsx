import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const { isDetailOpen, closeDetail } = useContext(ShoppingCartContext);
  const visible = isDetailOpen ? "flex" : "hidden";
  return (
    <aside
      className={`${visible} fixed flex-col top-[69px] right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-70px)] bg-[#fff]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={closeDetail}>
          <GrClose className="text-xl" />
        </button>
      </div>
    </aside>
  );
};

export { ProductDetail };
