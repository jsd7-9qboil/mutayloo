import React from "react";
import ProductCard from "../../components/ui/ProductCard";
import productData from "../../data/product";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <main>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {productData.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="cursor-pointer"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
