const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative w-full h-5/6 rounded-lg overflow-hidden">
        <span className="absolute bottom-1 left-2 bg-white/60 font-normal px-2 rounded-md text-sm">
          Electronics
        </span>
        <img
          src="https://images.pexels.com/photos/3945668/pexels-photo-3945668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Headphones image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full font-bold">
          +
        </div>
      </figure>
      <p className="flex justify-between h-1/6 items-center px-2">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-base font-medium">$300</span>
      </p>
    </div>
  );
};

export { Card };
