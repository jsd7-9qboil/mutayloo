import React, { useEffect, useState } from "react";
// icons
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Trash } from "lucide-react";
import { X } from "lucide-react";
//
import { getProductById } from "@/api/apiProduct";
// components
import { Button } from "@/components/ui/button";

const CartItem = ({ cartItem, updateItem, removeItem }) => {
  const id = cartItem.product._id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  console.log(product);

  return (
    <div className="w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-8 lg:col-span-8">
          <div className="flex gap-4">
            <figure className="min-w-32 min-h-32 lg:w-max-56 lg:h-max-56">
              <img src="" alt="" className="w-full h-full object-cover" />
            </figure>
            <div className="w-full flex flex-col gap-2 justify-center">
              <p className="text-xl lg:text-2xl font-bold">ชื่อสินค้า</p>
              <p className="text-sm lg:text-base">Color: Black</p>
              <p className="text-sm font-medium lg:hidden">199.00$</p>
            </div>
          </div>
        </div>
        <p className="hidden col-span-1 text-xl font-medium lg:flex justify-center items-center">
          199.00$
        </p>
        <div className="col-span-4 sm:col-span-3 lg:col-span-2 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <div className="flex justify-end sm:hidden">
              <Button variant="ghost" size="icon">
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="flex items-center gap-2 border rounded-lg">
              <Button variant="ghost" size="icon" className="w-8">
                <Minus className="w-4 h-4" />
              </Button>
              <span className="px-2 py-1.5 text-lg font-semibold">1</span>
              <Button variant="ghost" size="icon" className="w-8">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden col-span-1 sm:flex justify-center items-center">
          <Button variant="destructive" size="icon">
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
