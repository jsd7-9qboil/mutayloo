import React from "react";
// icons
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Trash } from "lucide-react";
import { X } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";

const CartItem = ({ item }) => {
  const { updateItem, removeItem } = useCart();
  const product = item.product;

  const increaseQuantity = () => {
    updateItem(item.product._id, item.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateItem(item.product._id, item.quantity - 1);
    }
  };

  const handleRemove = async () => {
    await removeItem(item.product._id);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-8 lg:col-span-8">
          <div className="flex gap-4">
            <figure className="min-w-32 min-h-32 lg:min-w-56 lg:min-h-56 lg:max-w-56 lg:max-h-56">
              <img
                src={product.image.thumbnail}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="w-full flex flex-col gap-2 justify-center">
              <p className="text-xl lg:text-2xl font-bold">{product.name}</p>
              <p className="text-sm lg:text-base">Color: {product.color}</p>
              <p className="text-sm font-medium lg:hidden">
                {product.price} Bath
              </p>
            </div>
          </div>
        </div>
        <p className="hidden col-span-1 text-xl font-medium lg:flex justify-center items-center">
          {product.price} Bath
        </p>
        <div className="col-span-4 sm:col-span-3 lg:col-span-2 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <div className="flex justify-end sm:hidden">
              <Button variant="ghost" size="icon" onClick={handleRemove}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="flex items-center gap-2 border rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                className="w-8"
                onClick={decreaseQuantity}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="px-2 py-1.5 text-lg font-semibold">
                {item.quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="w-8"
                onClick={increaseQuantity}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden col-span-1 sm:flex justify-center items-center">
          <Button variant="destructive" size="icon" onClick={handleRemove}>
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
