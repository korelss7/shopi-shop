import { GrClose } from "react-icons/gr";

const ProductDetail = () => {
  return (
    <aside className="fixed flex flex-col top-[69px] right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-70px)] bg-[#fff]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button>
          <GrClose className="text-xl" />
        </button>
      </div>
    </aside>
  );
};

export { ProductDetail };
