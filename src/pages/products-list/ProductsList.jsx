import React, { useState } from "react";
import ProductCard from "./../../components/ui/ProductCard";
import { FaAngleDown } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import productData from "./../../data/product"
import { Link } from "react-router-dom";


export const ProductsList = () => {
  console.log(productData);

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSortOptions = () => {
    setIsSortOpen(!isSortOpen);
    if (isFilterOpen) setIsFilterOpen(false); // Close filter if it's open
  };

  const toggleFilterOptions = () => {
    setIsFilterOpen(!isFilterOpen);
    if (isSortOpen) setIsSortOpen(false); // Close sort if it's open
  };

  return (
    <main>
      <section className="container"></section>
      <section>
        <div className="flex flex-col justify-center px-16 py-16 text-base leading-6 bg-violet-200 text-neutral-700 max-md:px-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="mr-auto max-md:max-w-full">Home &gt; Product</div>
                <div className="mt-4 mr-auto text-4xl font-bold leading-6 text-black max-md:max-w-full">
                  Product Cate A
                </div>
                <div className="mt-4 mr-auto max-md:max-w-full">Product Cate Description</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex self-stretch justify-between gap-0 py-8 max-md:flex-wrap">
          <div className="flex flex-1 gap-2.5 pr-20 max-md:flex-wrap">
            <div className="shrink-0 bg-zinc-300 h-[30px] rounded-[50px] w-[100px]"></div>
            <div className="shrink-0 bg-zinc-300 h-[30px] rounded-[50px] w-[150px]"></div>
            <div className="shrink-0 bg-zinc-300 h-[30px] rounded-[50px] w-[100px]"></div>
            <div className="shrink-0 w-20 bg-zinc-300 h-[30px] rounded-[50px]"></div>
          </div>
          <div className="relative flex justify-center gap-5 my-auto text-base leading-6 text-black">
            <div className="relative flex gap-2 px-5 cursor-pointer" onClick={toggleSortOptions}>
              <div>Sort by</div>
              <FaAngleDown className="w-6 h-6" />
              {isSortOpen && (
                <div className="absolute left-0 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg top-full">
                  <ul className="py-2">
                    {["Alphabets", "Price High to Low", "Price Low to High", "Newest"].map((category, index) => (
                      <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative flex gap-2 px-5 cursor-pointer" onClick={toggleFilterOptions}>
              <div>Filter</div>
              <IoFilter className="w-6 h-6" />
              {isFilterOpen && (
                <div className="absolute left-0 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg top-full">
                  <ul className="py-2">
                    {["Rings", "Bracelets", "Ear-rings", "Necklaces"].map((category, index) => (
                      <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {productData.map(product => 
          <Link to={`/product/${product.name}`} product={product}>
            <ProductCard key={product.id} product={product} />
          </Link>
          
            )}
        </div>
      </section>
    </main>
  );
};
