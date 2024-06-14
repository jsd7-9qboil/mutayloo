import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div className="flex flex-col justify-center bg-base-100 rounded-tr-3xl rounded-bl-3xl">
      {/* head */}
      <div className="flex gap-2.5 justify-between p-4 w-full">
        <div className="flex flex-col text-base font-bold leading-4 text-center uppercase whitespace-nowrap">
          <div className="justify-center px-3.5 py-1 bg-white rounded-lg text-base-900 uppercase shadow-lg shadow-base-200">
            NEW
          </div>
          <div className="justify-center px-3.5 py-1 mt-2 text-white bg-accent rounded-lg uppercase shadow-lg shadow-base-200">
            -50%
          </div>
        </div>
        <button className="flex justify-center items-center p-1.5 my-auto w-8 h-8 bg-white shadow-lg rounded-[32px] hover:scale-110 hover:shadow-xl duration-300">
          <AiOutlineHeart className="w-6 h-6" />
        </button>
      </div>
      {/* body */}
      <figure className="relative w-full">
        <img
          src={product.image.thumbnail}
          alt={product.image.alt}
          className="w-full h-full object-cover"
        />
        <button className="hidden lg:block btn-primary px-8 absolute bottom-4 left-1/2 transform -translate-x-1/2">
          Add to cart
        </button>
        <button className="lg:hidden btn-primary px-8 absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <AiOutlineShoppingCart className="w-6 h-6" />
        </button>
      </figure>
      {/* footer */}
      <div className="flex flex-col items-center px-4 py-6 w-full">
        <p className="self-stretch text-xl font-bold leading-4 text-center uppercase text-stone-700">
          {product.name}
        </p>
        <div className="flex gap-3 mt-2 text-sm leading-5 whitespace-nowrap">
          <p className="font-semibold text-neutral-900">
            {product.discount ? `$${product.discount}` : `$${product.price}`}
          </p>
          <p className="text-base-700 line-through">
            {product.discount ? `$${product.price}` : null}
          </p>
        </div>
        <div className="flex gap-2 justify-center mt-2">
          <div className="shrink-0 w-4 h-4 bg-teal-400 rounded-xl" />
          <div className="shrink-0 w-4 h-4 bg-pink-600 rounded-xl" />
          <div className="shrink-0 w-4 h-4 bg-amber-100 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
