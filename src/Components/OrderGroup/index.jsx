import React from "react";

function OrderGroup({ date, totalPrice, totalProducts }) {
  return (
    <div>
      <p>
        {date[0]} -{date[1]}
      </p>
      <p>{totalPrice}</p>
      <p>{totalProducts}</p>
    </div>
  );
}

export { OrderGroup };
