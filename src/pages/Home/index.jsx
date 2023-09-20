import { useFetch } from "../../useFetch";
import { Card } from "../../components/Card";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  return (
    <>
      <h1>HOME PRODUCTS</h1>
      <section className="flex flex-wrap justify-center gap-4 w-full max-w-5xl px-2">
        {loading && "Cargando..."}
        {error && "Ha ocurrido un error"}
        {!loading &&
          data?.map(({ title, price, category, image }) => (
            <Card
              key={title}
              product={title}
              price={price}
              category={category}
              imageUrl={image}
            />
          ))}
      </section>
    </>
  );
};

export { Home };
