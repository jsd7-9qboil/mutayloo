import React from "react";

const CartSummary = ({ subtotal, shipping, discount, total }) => {
  return (
    <div className="p-4 border-t mr-8 lg:w-3/5 ">
      <div className="flex justify-between">
        <p>ราคาสุทธิ</p>
        <p>${subtotal}</p>
      </div>
      <div className="flex justify-between">
        <p>ค่าส่ง</p>
        <p>${shipping}</p>
      </div>
      <div className="flex justify-between">
        <p>ส่วนลด</p>
        <p>${discount}</p>
      </div>
      <div className="flex justify-between text-lg font-bold">
        <p>ราคาทั้งหมด</p>
        <p>${total}</p>
      </div>
      <button className="mt-4 w-full bg-purple-500 text-white py-2">
        Check out
      </button>
    </div>
  );
};

export default CartSummary;
