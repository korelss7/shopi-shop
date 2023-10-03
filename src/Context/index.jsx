import { createContext, useState } from "react";
import { useFetch } from "../useFetch";
import { adjustToUrl } from "../utils/functions";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products",
    []
  );

  // Estado de búsqueda y filtro de elementos
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const categories = {
    "mens-clothing": "men's clothing",
    "womens-clothing": "women's clothing",
    jewelery: "jewelery",
    electronics: "electronics",
  };

  const filterCategory = (category, arr) => {
    category = categories[category];
    if (!category) return arr;
    return [...arr].filter((e) => e.category === category);
  };

  const searchedProducts = filterCategory(category, data).filter((e) => {
    const searchParsed = search.toLowerCase();
    const product = e.title.toLowerCase();
    return product.includes(searchParsed);
  });

  // Nueva Orden de productos en my-orders
  const [order, setOrder] = useState([]);
  const sendOrder = () => {
    const date = new Date();
    setOrder([
      ...order,
      {
        date: [date.toLocaleDateString(), date.toLocaleTimeString()],
        products: [...cartProducts],
        totalProducts: countProductsCart,
        totalPrice: totalPriceProducts,
        id: adjustToUrl(date.toLocaleDateString() + date.toLocaleTimeString(), [
          ":",
          "/",
        ]),
      },
    ]);
    setCartProducts([]);
  };

  // Almacenamiento de productos seleccionados y datos derivados
  const [cartProducts, setCartProducts] = useState([]);
  const countProductsCart = cartProducts.reduce((acc, e) => acc + e.count, 0);
  const totalPriceProducts = cartProducts.reduce(
    (acc, e) => acc + e.price * e.count,
    0
  );
  const findProduct = (name) => {
    const newList = [...cartProducts];
    const element = newList.find((e) => e.product == name);
    const indexElement = newList.findIndex((e) => e.product == name);
    return [newList, element, indexElement];
  };
  const addProductCart = (product) => {
    const [newList, element] = findProduct(product.product);
    element ? element.count++ : newList.push({ ...product, count: 1 });
    setCartProducts(newList);
  };
  const reduceQtyProduct = (product, qty) => {
    const [newList, element] = findProduct(product);
    if (element.count === 1) return true;
    element.count -= qty;
    setCartProducts(newList);
  };
  const deleteProductCart = (product) => {
    const [newList, , indexElement] = findProduct(product);
    newList.splice(indexElement, 1);
    setCartProducts(newList);
  };

  // Mostrar vista para cada distinto producto en ProductDetail
  const [productInfoShow, setProductInfoShow] = useState({});
  // Apertura y cierre de ProductDetail
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const closeDetail = () => setIsDetailOpen(false);
  const openDetail = () => {
    setIsCheckoutOpen(false);
    setIsDetailOpen(true);
  };

  // Apertura y cierre de CheckoutSideMenu
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const closeCheckout = () => setIsCheckoutOpen(false);
  const openCheckout = () => {
    setIsDetailOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        data,
        loading,
        error,
        isDetailOpen,
        closeDetail,
        openDetail,
        isCheckoutOpen,
        closeCheckout,
        openCheckout,
        productInfoShow,
        setProductInfoShow,
        cartProducts,
        countProductsCart,
        addProductCart,
        reduceQtyProduct,
        deleteProductCart,
        totalPriceProducts,
        sendOrder,
        order,
        search,
        setSearch,
        searchedProducts,
        setCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
