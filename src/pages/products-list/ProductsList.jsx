import React from "react";
import ProductCard from "@/components/ui/ProductCard";

export const ProductsList = () => {
  return (
    <main>
      <section className="container">
        <h1>Products List</h1>
      </section>
      <section className="container">
        <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-4 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          
        </div>
      </section>
    </main>
  );
};
