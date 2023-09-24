import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { ShoppingCartContext } from "../../Context";

const CheckoutSideMenu = () => {
  const { isCheckoutOpen, closeCheckout } = useContext(ShoppingCartContext);
  const visible = isCheckoutOpen ? "flex" : "hidden";

  return (
    <aside
      className={`${visible} fixed flex-col top-[69px] right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-70px)] bg-[#fff]`}
    >
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-xl">My Orders</h2>
        <button onClick={closeCheckout}>
          <GrClose className="text-xl" />
        </button>
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
