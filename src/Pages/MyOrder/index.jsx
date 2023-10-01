import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { OrderCheckout } from "../../Components/OrderCheckout";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="flex w-80 h-7 flex-row justify-center items-center relative mb-4">
        <Link to="/my-orders" className="absolute left-2">
          <HiOutlineChevronLeft className="stroke-2 text-2xl" />
        </Link>
        <h2 className="font-semibold text-lg">My Order</h2>
      </div>

      <div className="flex flex-col gap-4 px-2 pb-3 h-[77%]">
        {order.at(-1)?.products.map(({ product, imageUrl, price, count }) => {
          return (
            <OrderCheckout
              key={product}
              product={product}
              imageUrl={imageUrl}
              price={price}
              qty={count}
            />
          );
        })}
      </div>
    </>
  );
};

export { MyOrder };
