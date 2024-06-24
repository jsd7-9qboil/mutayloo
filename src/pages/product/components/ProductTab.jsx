import React, { useState } from "react";

const ProductTab = () => {
  const [tab, setTab] = useState("Detail");

  return (
    <div>
      <div className="flex gap-8">
        <button
          onClick={() => setTab("Detail")}
          className={tab === "Detail" ? "font-bold" : ""}
        >
          Detail
        </button>
        <button
          onClick={() => setTab("Prophecy")}
          className={tab === "Prophecy" ? "font-bold" : ""}
        >
          Prophecy
        </button>
        <button
          onClick={() => setTab("Reviews")}
          className={tab === "Reviews" ? "font-bold" : ""}
        >
          Reviews
        </button>
      </div>

      <div className="bg-base-100 py-8">
        {tab === "Detail" && <p>Detail</p>}
        {tab === "Prophecy" && <p>Prophecy</p>}
        {tab === "Reviews" && <p>Reviews</p>}
      </div>
    </div>
  );
};

export default ProductTab;
