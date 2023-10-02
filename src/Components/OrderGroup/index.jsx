import React from "react";

function OrderGroup({ date, totalPrice, totalProducts, products }) {
  return (
    <div className="flex bg-zinc-400/20 p-2 gap-4 rounded hover:bg-zinc-400/40 transition-colors">
      <div className="grid grid-cols-2 grid-rows-2 w-[77px] h-[77px] gap-[3px]">
        {products.slice(0, 4).map((e, index) => {
          return (
            <figure key={index} className="rounded-md overflow-hidden">
              <img
                src={e.imageUrl}
                className="w-full h-full object-cover"
              ></img>
            </figure>
          );
        })}
      </div>
      <div className="flex flex-col justify-between w-[200px] md:w-[300px] ">
        <p className="text-base font-medium text-center ">
          {date[0]} - {date[1]}
        </p>
        <p className="flex flex-col text-sm font-mono">
          <span>Total price: ${totalPrice}</span>
          <span>Total products: {totalProducts}</span>
        </p>
      </div>
    </div>
  );
}

export { OrderGroup };
