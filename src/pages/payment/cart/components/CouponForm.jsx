import React from "react";

const CouponForm = () => {
  return (
    <div className="p-4 border-t">
      <p>Have a coupon?</p>
      <input
        type="text"
        placeholder="Coupon Code"
        className="border p-2 w-full mt-2"
      />
      <button className="mt-2 w-full bg-gray-200 py-2">Apply</button>
    </div>
  );
};

export default CouponForm;
