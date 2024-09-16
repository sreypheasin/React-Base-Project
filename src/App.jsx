import ProductCard from "./components/cards/ProductCard";
import { getAllProducts } from "./services/product/productAction";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]); // products =[]
  const [loading, setLoading] = useState(false);

  console.log("products", products);

  useEffect(() => {
    async function fetchAllProducts() {
      setLoading(true);
      let product = await getAllProducts();
      setProducts(product);
      setLoading(false);
    }
    fetchAllProducts();
  }, []);
  return (
    <main className="max-w-screen-2xl mx-auto px-5">
      <section>
        <h1 className="text-blue-800 font-bold text-4xl text-center mt-5">
          List Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {loading && (
            <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" />
          )}
          {!loading &&
            products
              .slice(0, 8)
              .map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  image={product.images[0]}
                  price={product.price}
                  brand={product.brand}
                  id={product.id}
                />
              ))}
        </div>
      </section>
    </main>
  );
}
