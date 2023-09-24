import { useContext } from "react";
import { Card } from "../../Components/Card";
import { ShoppingCartContext } from "../../Context";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

const Home = () => {
  const { loading, error, data } = useContext(ShoppingCartContext);
  return (
    <>
      <h1>HOME PRODUCTS</h1>
      <section className="flex flex-wrap justify-center gap-4 w-full max-w-5xl px-2">
        {loading && "Cargando..."}
        {error && "Ha ocurrido un error"}
        {!loading &&
          data?.map(({ title, price, category, image, description }) => (
            <Card
              key={title}
              product={title}
              price={price}
              category={category}
              imageUrl={image}
              description={description}
            />
          ))}
      </section>
      <ProductDetail />
      <CheckoutSideMenu />
    </>
  );
};

export { Home };
