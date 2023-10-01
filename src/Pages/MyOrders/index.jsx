import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { OrderGroup } from "../../Components/OrderGroup";
import { adjustToUrl } from "../../utils/functions";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);
  return (
    <div>
      <h2>My Orders</h2>
      {order.map(({ date, totalProducts, totalPrice }) => (
        <Link
          to={`/my-orders/${adjustToUrl(date[0] + date[1], [":", "/"])}`}
          key={date[0] + date[0]}
        >
          <OrderGroup
            totalProducts={totalProducts}
            totalPrice={totalPrice}
            date={date}
          />
        </Link>
      ))}
    </div>
  );
};

export { MyOrders };
