import React, { useState } from "react";
import { Link } from "react-router-dom";
// mockup data
import productData from "@/data/product";
// components
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// icons
import { AiOutlineDown } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";

const ProductsList = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSortOptions = () => {
    setIsSortOpen(!isSortOpen);
  };

  const toggleFilterOptions = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  console.log(`
    sort: ${isSortOpen}
    filter: ${isFilterOpen}
  `);

  return (
    <main>
      <BreadcrumbBanner />

      {/* fillter */}
      <section className="container mx-auto">
        <div className="flex justify-between py-8">
          {/* left */}
          <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-10 xl:grid-cols-12 gap-2">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Badge</Badge>
            <Badge variant="accent">Badge</Badge>
            <Badge variant="destructive">Badge</Badge>
            <Badge variant="outline">Badge</Badge>
          </div>
          {/* right */}
          <div className="flex gap-2 md:gap-4 lg:gap-8">
            <div className="flex itms-center gap-2 relative">
              <p className={`hidden md:block ${isSortOpen ? "font-bold" : ""}`}>
                Short by
              </p>
              <AiOutlineDown
                onClick={toggleSortOptions}
                className={`w-6 h-6 ${
                  isSortOpen
                    ? "rotate-180 duration-300 text-primary"
                    : "duration-300"
                }`}
              />
              {isSortOpen && (
                <div className="absolute -right-4 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg top-full">
                  <ul className="py-2">
                    {[
                      "Alphabets",
                      "Price High to Low",
                      "Price Low to High",
                      "Newest",
                    ].map((category, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex itms-center gap-2 relative">
              <p
                className={`hidden md:block ${
                  isFilterOpen ? "text-primary" : ""
                }`}
              >
                Filter
              </p>
              <IoFilter
                onClick={toggleFilterOptions}
                className={`w-6 h-6 ${
                  isFilterOpen ? "duration-300 text-primary" : "duration-300"
                }`}
              />
              {isFilterOpen && (
                <div className="absolute -right-2 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg top-full">
                  <ul className="py-2">
                    {["Rings", "Bracelets", "Ear-rings", "Necklaces"].map(
                      (category, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        >
                          {category}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* grid */}
      <section className="container mx-auto mb-16">
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

        {/* pagination */}
        <div className="w-full pt-16">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </main>
  );
};

export default ProductsList;
