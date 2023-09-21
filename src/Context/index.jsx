import { createContext, useState } from "react";
import { useFetch } from "../useFetch";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [count, setCount] = useState(0);
  const sumCount = () => setCount(count + 1);

  return (
    <ShoppingCartContext.Provider
      value={{ data, loading, error, count, sumCount }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
