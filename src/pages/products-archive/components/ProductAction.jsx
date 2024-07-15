import React, { useState } from "react";
// icons
import { Star } from "lucide-react";
import { Share2 } from "lucide-react";
import { Heart } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { ShoppingCart } from "lucide-react";

// components
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

//
import useCart from "@/hooks/useCart";

const ProductAction = ({ product }) => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product._id, quantity);
    toast({
      title: "เพิ่มสินค้าในตะกร้าสำเร็จ",
      description: `เพิ่ม ${product.name} จำนวน ${quantity} ชิ้นในตะกร้าเรียบร้อยแล้ว`,
      duration: 3000,
      variant: "success",
    });
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Star fill="#FFC107" className="w-4 h-4 text-[#FFC107]" />
          <Star fill="#FFC107" className="w-4 h-4 text-[#FFC107]" />
          <Star fill="#FFC107" className="w-4 h-4 text-[#FFC107]" />
          <Star className="w-4 h-4 text-[#FFC107]" />
          <Star className="w-4 h-4 text-[#FFC107]" />
        </div>
        <div className="flex gap-2 items-center">
          <p>แชร์</p>
          <Share2 className="w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">{product.name}</p>
        <div className="flex items-center justify-between">
          <p className="font-semibold">{product.price} บาท</p>
          <Heart className="w-4 h-4" />
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold text-base-600">เลือกสี</p>
          <ChevronRight className="w-4 h-4 text-base-600" />
        </div>
        <div className="flex justify-center gap-2">
          <div className="w-8 h-8 bg-teal-400 rounded-full shrink-0"></div>
          <div className="w-8 h-8 bg-pink-600 rounded-full shrink-0"></div>
          <div className="w-8 h-8 rounded-full shrink-0 bg-amber-100"></div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-semibold">เลือกขนาด</p>
          <p className="text-sm">คู่มือขนาด</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {["10", "20", "30", "40", "50"].map((size, index) => (
            <Button key={index} variant="outline" className="w-16 h-10">
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-center mt-4 lg:mt-8">
        <p>จํานวน</p>
        <div className="flex items-center gap-2 border rounded-lg">
          <Button
            variant="none"
            size="icon"
            onClick={decreaseQuantity}
            className="w-8"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="px-2 py-1.5 text-lg font-semibold">{quantity}</span>
          <Button
            variant="none"
            size="icon"
            onClick={increaseQuantity}
            className="w-8"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <p>มีสินค้าอยู่ 96 ชิ้น</p>
      </div>

      <div className="flex gap-4 mt-4 lg:mt-8">
        <Button
          variant="accent"
          onClick={handleAddToCart}
          className="w-48 flex items-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <p>เพิ่มไปยังรถเข็น</p>
        </Button>
        <Button variant="default" className="w-48 flex items-center gap-2">
          <p>ซื้อเลย</p>
        </Button>
      </div>
    </section>
  );
};

export default ProductAction;
