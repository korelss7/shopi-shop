import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCheckout } from "../../Components/OrderCheckout";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <div className="flex flex-col gap-4 px-2 pb-3 h-[77%] overflow-auto scroll-smooth scroll-modern">
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
  );
};

export { MyOrder };
