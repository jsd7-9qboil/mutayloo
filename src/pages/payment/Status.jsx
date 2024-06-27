import React from "react";

const Status = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center font-bold my-8">Cart</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full  
            inline-flex items-center justify-center  
            bg-primary text-white text-xl font-bold"
          >
            1
          </div>
          <p className="text-xl font-bold">Shopping Cart</p>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full  
            inline-flex items-center justify-center  
            bg-primary text-white text-xl font-bold"
          >
            2
          </div>
          <p className="text-xl font-bold">Checkout Detail</p>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full  
            inline-flex items-center justify-center  
            bg-primary text-white text-xl font-bold"
          >
            3
          </div>
          <p className="text-xl font-bold">Oder Complete</p>
        </div>
      </div>
    </div>
  );
};

export default Status;