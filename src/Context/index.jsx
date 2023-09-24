import { createContext, useState } from "react";
import { useFetch } from "../useFetch";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [cartProducts, setCartProducts] = useState([]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [productInfoShow, setProductInfoShow] = useState({});

  const countProductsCart = cartProducts.reduce((acc, e) => acc + e.count, 0);
  const addProductCart = (product) => {
    const newList = [...cartProducts];
    const element = newList.find((e) => e.product == product.product);
    element ? element.count++ : newList.push({ ...product, count: 1 });
    setCartProducts(newList);
  };
  const closeDetail = () => setIsDetailOpen(false);
  const openDetail = () => setIsDetailOpen(true);

  return (
    <ShoppingCartContext.Provider
      value={{
        data,
        loading,
        error,
        isDetailOpen,
        closeDetail,
        openDetail,
        productInfoShow,
        setProductInfoShow,
        cartProducts,
        countProductsCart,
        addProductCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
