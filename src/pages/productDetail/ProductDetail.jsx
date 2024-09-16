import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProducts } from "../../services/product/productAction";
import { ProductDetailCard } from "../../components/cards/ProductDetailCard";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const param = useParams();
  const id = param.id;
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const product = await getSingleProducts(id);
      //   console.log("product in block", product);
      setProduct(product);
    };
    fetchSingleProduct();
  }, []);
  console.log("product", product);
  console.log("param", param);
  return (
    <main className="flex justify-center items-center h-[70vh]">
      <ProductDetailCard
        thumbnail={product.thumbnail}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    </main>
  );
}
