import React from "react";
import { useParams } from "react-router-dom";
import productData from "../../data/product";
// components
import ProductGallery from "./components/ProductGallery";
import ProductAction from "./components/ProductAction";
import ProductTab from "./components/ProductTab";
import RelatedProducts from "@/components/RelatedProducts";
import BreadcrumbSmall from "@/components/BreadcrumbSmall";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find(
    (product) => product.id === parseInt(id, 10)
  );

  //console.log(product);
  return (
    <main>
      <section className="container mx-auto py-4">
        <BreadcrumbSmall />
      </section>

      <section className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <ProductGallery />
          </div>
          <div className="col-span-5">
            <ProductAction product={product} />
          </div>
        </div>
      </section>

      <section className="container mx-auto my-16">
        <ProductTab />
      </section>

      <section>
        <RelatedProducts />
      </section>
    </main>
  );
};

export default ProductDetail;
