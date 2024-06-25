import React, { useState } from "react";
import { Link } from "react-router-dom";
// components
import ProductCard from "@/components/ProductCard";
import productData from "@/data/product";
import { Badge } from "@/components/ui/badge";
// icons
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineFilter } from "react-icons/ai";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";

const ProductsList = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main>
      <BreadcrumbBanner />

      {/* fillter */}
      <section className="container mx-auto">
        <div className="flex justify-between py-8">
          {/* left */}
          <div className="flex gap-2">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Badge</Badge>
            <Badge variant="accent">Badge</Badge>
            <Badge variant="destructive">Badge</Badge>
            <Badge variant="outline">Badge</Badge>
          </div>
          {/* right */}
          <div className="flex gap-8">
            <div className="flex itms-center gap-2">
              <p>Short by</p>
              <AiOutlineDown className="w-6 h-6" />
            </div>
            <div className="flex itms-center gap-2">
              <p>Filter</p>
              <AiOutlineFilter className="w-6 h-6" />
            </div>
          </div>
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
