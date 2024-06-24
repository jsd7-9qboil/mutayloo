import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import productData from "@/data/product";
import { Badge } from "@/components/ui/badge";

const ProductsList = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main>
      {/* fillter */}
      <section className="container mx-auto">
        <div className="flex justify-between">
          <Badge>Badge</Badge>asdasd
        </div>
      </section>

      {/* grid */}
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

export default ProductsList;
