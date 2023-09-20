const Card = ({ category, product, price, imageUrl }) => {
  return (
    <article className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative w-full h-5/6 rounded-lg overflow-hidden">
        <span className="absolute bottom-1 left-2 bg-white/60 font-normal px-2 rounded-md text-sm">
          {category}
        </span>
        <img
          src={imageUrl}
          alt={`${product} image`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full font-bold drop-shadow-xl">
          +
        </div>
      </figure>
      <p className="flex justify-between h-1/6 items-center px-2">
        <span className="text-sm font-light truncate mr-2">{product}</span>
        <span className="text-base font-medium">${price}</span>
      </p>
    </article>
  );
};

export { Card };
