import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import "../../others.css";
import { Link } from "react-router-dom";

const NoProducts = () => {
  return (
    <p className="absolute self-center my-auto text-xl font-medium text-center px-6 top-[50%]">
      Aún no tienes productos agregados
    </p>
  );
};
const TotalPrice = ({ price }) => {
  return (
    <p className="flex justify-between font-semibold text-base absolute bottom-[57px] w-full self-center px-[16px] select-none">
      <span>Total price:</span>
      <span className="bg-black text-white text-base px-2 py-[2px] rounded-md">
        $ {Number(price.toFixed(2))}
      </span>
    </p>
  );
};
const BtnCheckout = ({ sendOrder }) => {
  return (
    <Link
      to="/my-orders/last"
      className="absolute w-11/12 self-center bottom-3"
    >
      <button
        className="w-full border border-black rounded-md bg-emerald-300 hover:bg-[#67d7a6] active:bg-[#4fd199] transition-colors text-lg font-medium py-1 select-none"
        onClick={() => sendOrder()}
      >
        Checkout
      </button>
    </Link>
  );
};

const CheckoutSideMenu = () => {
  const {
    isCheckoutOpen,
    closeCheckout,
    cartProducts,
    totalPriceProducts,
    sendOrder,
  } = useContext(ShoppingCartContext);
  const visible = isCheckoutOpen ? "flex" : "hidden";

  return (
    <aside
      className={`${visible} fixed flex-col top-[69px] right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-70px)] bg-[#fff]`}
    >
      <div className="flex justify-between items-center px-5 pt-4 pb-4">
        <h2 className="font-medium text-xl select-none">My Orders</h2>
        <button onClick={closeCheckout}>
          <GrClose className="text-xl" />
        </button>
      </div>

      <div className="flex flex-col gap-4 px-2 pb-3 h-[77%] overflow-auto scroll-smooth scroll-modern">
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
      {!cartProducts.length && <NoProducts />}
      {!!cartProducts.length && <TotalPrice price={totalPriceProducts} />}
      {!!cartProducts.length && <BtnCheckout sendOrder={sendOrder} />}
    </aside>
  );
};

export { CheckoutSideMenu };
