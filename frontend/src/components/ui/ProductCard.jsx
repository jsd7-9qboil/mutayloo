import React from "react";

const ProductCard = () => {
  return (
    <div className="w-full sm:w-[340px] bg-base-200 rounded-tr-3xl rounded-bl-3xl">
      {/* head */}
      <div className="flex justify-between py-2 px-4">
        <div className="flex flex-col gap-2">
          <p className="bg-white px-4 py-1 text-sm font-semibold">New</p>
          <p className="bg-accent px-4 py-1 text-sm font-semibold">-50%</p>
        </div>
        <div>love</div>
      </div>
      <div className="bg-red-500 w-[340px] h-[340px] relative">
        <img src="https://via.placeholder.com/340" alt="" />
        <button className="btn-primary absolute bottom-8 left-1/2 transform -translate-x-1/2">Add to Cart</button>
      </div>
      {/* body */}
      <div className="flex flex-col items-center gap-2 py-2">
        <h4>Product Name</h4>
        <p>$199 <span className="text-base-700 line-through">$299</span> </p>
        <div className="flex gap-2">
          <p className="w-4 h-4 rounded-full bg-primary"></p>
          <p className="w-4 h-4 rounded-full bg-green-500"></p>
          <p className="w-4 h-4 rounded-full bg-yellow-500"></p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
