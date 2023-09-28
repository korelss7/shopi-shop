function OrderCheckout({
  product = "name",
  qty = 0,
  price = 0,
  imageUrl = "",
}) {
  return (
    <div className="flex justify-between rounded-lg overflow-hidden bg-slate-50 drop-shadow-lg min-h-[80px] min-w-[310px] max-w-[420px] sm:w-[420px]">
      <figure className="flex w-20 h-20 relative items-center justify-center bg-gray-300">
        <img
          className="w-full h-full object-cover bg-transparent select-none absolute top-0"
          alt={product}
          src={imageUrl}
        />
      </figure>

      <div className="flex flex-col justify-around w-2/5">
        <p className="text-base font-medium leading-5 h-10 overflow-hidden  select-none">
          {product}
        </p>
        <p>
          <span className="font-medium">Quantity:</span>
          <span className="ml-3 text-blue-900 font-medium">{qty}</span>
        </p>
      </div>

      <p className="font-semibold select-none w-[90px] flex items-center">
        <span className="font-medium text-lg text-green-400 mr-1">$</span>
        {price}
      </p>
    </div>
  );
}

export { OrderCheckout };
