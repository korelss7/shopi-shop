import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import "../../others.css";

const NoProducts = () => {
  return (
    <p className="self-center my-auto text-xl font-medium text-center px-3">
      Aún no tienes productos agregados
    </p>
  );
};

const CheckoutSideMenu = () => {
  const { isCheckoutOpen, closeCheckout, cartProducts, totalPriceProducts } =
    useContext(ShoppingCartContext);
  const visible = isCheckoutOpen ? "flex" : "hidden";

  return (
    <aside
      className={`${visible} fixed flex-col top-[69px] right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-70px)] bg-[#fff]`}
    >
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-xl select-none">My Orders</h2>
        <button onClick={closeCheckout}>
          <GrClose className="text-xl" />
        </button>
      </div>

      <div className="flex flex-col gap-4 px-2 py-3 h-4/5 overflow-auto scroll-smooth scroll-modern">
        {!cartProducts.length && <NoProducts />}
        {cartProducts.map(
          ({ count, imageUrl, price, product, description }) => (
            <OrderCard
              key={product}
              qty={count}
              imageUrl={imageUrl}
              price={price}
              product={product}
              description={description}
            />
          )
        )}
      </div>
      <p className="flex justify-between px-3 font-semibold text-lg absolute bottom-4 w-full">
        <span>Total price:</span>
        <span className="bg-black text-white text-base px-2 py-[3px] rounded-md">
          $ {Number(totalPriceProducts.toFixed(2))}
        </span>
      </p>
    </aside>
  );
};

export { CheckoutSideMenu };
