import { useContext } from "react";
import { Card } from "../../Components/Card";
import { ShoppingCartContext } from "../../Context";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

const Home = () => {
  const { loading, error, search, setSearch, data, searchedProducts } =
    useContext(ShoppingCartContext);
  return (
    <>
      <div className="mb-5">
        <h1 className="font-bold text-xl text-center mb-2">
          Exclusive Products
        </h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search a product"
          className="outline-none border border-black/20 px-3 py-2 rounded-md text-center focus:border-black"
        />
      </div>

      <section className="flex flex-wrap justify-center gap-4 w-full max-w-5xl px-2">
        {loading && "Cargando..."}
        {error && "Ha ocurrido un error"}
        {!loading &&
          searchedProducts?.map(
            ({ title, price, category, image, description }) => (
              <Card
                key={title}
                product={title}
                price={price}
                category={category}
                imageUrl={image}
                description={description}
              />
            )
          )}
      </section>
      <ProductDetail />
      <CheckoutSideMenu />
    </>
  );
};

export { Home };
