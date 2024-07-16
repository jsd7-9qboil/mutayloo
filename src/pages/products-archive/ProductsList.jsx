import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// components
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
// icons
import { AiOutlineDown } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
// api
import { getProducts } from "@/api/apiProduct";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedPower, setSelectedPower] = useState("");

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const power = params.get("power");
    setSelectedPower(power || "");

    const fetchProducts = async () => {
      try {
        const response = await getProducts(power || "");
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [location.search]);

  const toggleSortOptions = () => {
    setIsSortOpen(!isSortOpen);
  };

  const toggleFilterOptions = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (power) => {
    setSelectedPower(power);
    setIsFilterOpen(false); // Close filter options after selection
  };

  const getBadgeColor = (power) => {
    switch (power) {
      case "luck":
        return "bg-green-600";
      case "love":
        return "bg-pink-600";
      case "success":
        return "bg-yellow-600";
      case "strength":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <main>
      <BreadcrumbBanner />

      {/* filter */}
      <section className="container mx-auto">
        <div className="flex justify-between py-8">
          {/* left */}
          <div className="flex gap-2">
            {selectedPower && (
              <Badge className={`${getBadgeColor(selectedPower)}`}>
                {selectedPower}
              </Badge>
            )}
          </div>
          {/* right */}
          <div className="flex gap-8">
            <div className="flex items-center gap-2 relative">
              <p className={`${isSortOpen ? "font-bold" : ""}`}>Sort by</p>
              <AiOutlineDown
                onClick={toggleSortOptions}
                className={`w-6 h-6 ${
                  isSortOpen
                    ? "rotate-180 duration-300 text-primary"
                    : "duration-300"
                }`}
              />
              {isSortOpen && (
                <div className="absolute left-0 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg top-full">
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
            <div className="flex items-center gap-2 relative">
              <p className={`${isFilterOpen ? "text-primary" : ""}`}>Filter</p>
              <IoFilter
                onClick={toggleFilterOptions}
                className={`w-6 h-6 ${
                  isFilterOpen ? "duration-300 text-primary" : "duration-300"
                }`}
              />
              {isFilterOpen && (
                <div className="absolute left-0 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg top-full">
                  <ul className="py-2">
                    {["luck", "love", "success", "strength"].map(
                      (power, index) => (
                        <li
                          key={index}
                          onClick={() => handleFilterChange(power)}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        >
                          {power}
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
      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
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
