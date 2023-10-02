import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { OrderGroup } from "../../Components/OrderGroup";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <div>
      <h2 className="font-semibold text-lg text-center mb-2">My Orders</h2>
      <div className="flex flex-col gap-3">
        {order
          .map(({ date, totalProducts, totalPrice, id, products }) => {
            let linkValue = id === order.at(-1).id ? "last" : id;

            return (
              <Link to={`/my-orders/${linkValue}`} key={id}>
                <OrderGroup
                  totalProducts={totalProducts}
                  totalPrice={totalPrice}
                  date={date}
                  products={products}
                />
              </Link>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export { MyOrders };
