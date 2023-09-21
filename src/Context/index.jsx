import { createContext, useState } from "react";
import { useFetch } from "../useFetch";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [count, setCount] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [productInfoShow, setProductInfoShow] = useState({});

  const closeDetail = () => setIsDetailOpen(false);
  const openDetail = () => setIsDetailOpen(true);
  const sumCount = () => setCount(count + 1);

  return (
    <ShoppingCartContext.Provider
      value={{
        data,
        loading,
        error,
        count,
        sumCount,
        isDetailOpen,
        closeDetail,
        openDetail,
        productInfoShow,
        setProductInfoShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
