import React, { useContext } from "react";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import CouponForm from "./components/CouponForm";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

// context
import { CartContext } from "@/context/CartContext";
import Status from "../Status";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 1.0;
  const discount = 3.0;
  const total = subtotal + shipping - discount;

  return (
    <div className="container mx-auto">
      <Status />
      <div >
        <CardContent className="hidden lg:block md:block lg:mt-8 md:mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>สินค้า</TableHead>
                        <TableHead  >สถานะ</TableHead>
                        <TableHead className="hidden md:table-cell">
                          ราคา
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          จำนวน
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          ราคารวม
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="https://via.placeholder.com/200x200"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Laser Lemonade Machine
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Draft</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $499.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          25
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $499.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ลบ
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="https://via.placeholder.com/200x200"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Hypernova Headphones
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $129.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          100
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $129.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ลบ
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="https://via.placeholder.com/200x200"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          AeroGlow Desk Lamp
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $39.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          50
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $39.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ลบ
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="https://via.placeholder.com/200x200"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          TechTonic Energy Drink
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Draft</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $2.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          0
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $2.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ลบ
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="https://via.placeholder.com/200x200"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Gamer Gear Pro Controller
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $59.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          75
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $59.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ลบ
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="https://via.placeholder.com/200x200"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Luminous VR Headset
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $199.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          30
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $199.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ลบ
                        </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <div className="lg:hidden md:hidden md:w-full md:justify-center md:items-center">
          <div className="md:w-full">
            <div className="md:w-full flex flex-col px-6 py-4 bg-white rounded-md lg:w-full">
              <div className="lg:hidden text-3xl font-medium tracking-tight leading-8 text-neutral-900 max-md:max-w-full mb-6 mt-6">
                Product
              </div>
              <div className=" flex flex-col md:gap-20 justify-center md:justify-center md:items-center py-2  border-b border-gray-200 border-solid md:w-full md:ml-20">
                <div className="flex gap-4 md:gap-12 max-md:flex-wrap max-md:max-w-full border-t border-gray-400">
                  <div className="flex flex-col justify-center">
                    <div className="shrink-0 h-24 bg-purple-600" />
                  </div>
                  <div className="flex pb-1.5 gap-8">
                    <div>
                      <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded  max-md:pr-5">
                        <img
                          src="https://via.placeholder.com/80x96"
                          className="w-4/5 h-full aspect-[3.23] "
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-5 text-neutral-900">
                        Tray Table
                      </div>
                      <div className="mt-2 text-xs leading-5 text-zinc-500">
                        Color: Black
                      </div>
                      <div className="flex items-center self-stretch justify-center gap-3 px-2 py-2 rounded-sm bg-neutral-100">
                        <button className="px-2 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2">
                          -
                        </button>
                        <div>2</div>
                        <button className="px-2 py-2 rounded-sm hover:bg-gray-300 focus:outline-none focus:ring-2">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="justify-end items-end pl-20 ">390 บาท</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:gap-20 justify-center md:justify-center md:items-center py-2  border-b border-gray-200 border-solid md:w-full md:ml-20">
                <div className="flex gap-4 md:gap-12 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col justify-center">
                    <div className="shrink-0 h-24 bg-purple-600" />
                  </div>
                  <div className="flex pb-1.5 gap-8">
                    <div>
                      <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded  max-md:pr-5">
                        <img
                          src="https://via.placeholder.com/80x96"
                          className="w-4/5 h-full aspect-[3.23]"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-5 text-neutral-900">
                        Tray Table
                      </div>
                      <div className="mt-2 text-xs leading-5 text-zinc-500">
                        Color: Black
                      </div>
                      <div className="flex items-center self-stretch justify-center gap-3 px-2 py-2 rounded-sm bg-neutral-100">
                        <button className="px-2 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2">
                          -
                        </button>
                        <div>2</div>
                        <button className="px-2 py-2 rounded-sm hover:bg-gray-300 focus:outline-none focus:ring-2">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="justify-end items-end pl-20 ">390 บาท</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:gap-20 justify-center md:justify-center md:items-center py-2  border-b border-gray-200 border-solid md:w-full md:ml-20">
                <div className="flex gap-4 md:gap-12 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col justify-center">
                    <div className="shrink-0 h-24 bg-purple-600" />
                  </div>
                  <div className="flex pb-1.5 gap-8">
                    <div>
                      <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded  max-md:pr-5">
                        <img
                          src="https://via.placeholder.com/80x200"
                          className="w-4/5 h-full aspect-[3.23]"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-5 text-neutral-900">
                        Tray Table
                      </div>
                      <div className="mt-2 text-xs leading-5 text-zinc-500">
                        Color: Black
                      </div>
                      <div className="flex items-center self-stretch justify-center gap-3 px-2 py-2 rounded-sm bg-neutral-100">
                        <button className="px-2 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2">
                          -
                        </button>
                        <div>2</div>
                        <button className="px-2 py-2 rounded-sm hover:bg-gray-300 focus:outline-none focus:ring-2">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="justify-end items-end pl-20 ">390 บาท</div>
                  </div>
                </div>
              </div>
              <div className="hidden  flex gap-3 mt-6 text-base ">
                <input
                  type="text"
                  className="w-2/3 justify-center px-4 py-3.5 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-600"
                  placeholder="Input"
                />
                <button className="w-1/3 justify-center  px-7 py-3 font-medium tracking-tight leading-7 text-center text-white bg-purple-600 rounded-lg max-md:px-5">
                  Apply
                </button>
              </div>
              <div className="hidden  flex flex-col justify-center py-3.5 mt-4 text-base leading-7 border-b border-gray-200 border-solid max-md:max-w-full">
                <div className="flex gap-5 justify-center w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-2 whitespace-nowrap text-neutral-900">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebfcb5e4788737dcb6dc75251bba3ca921ac5d4f139f9f21b869fccfd6aa970?"
                      className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div>Mutayloo</div>
                  </div>
                  <div className="flex-auto my-auto font-semibold text-right text-green-700">
                    -$20.00 [Remove]
                  </div>
                </div>
              </div>
              <div className="hidden  flex flex-col justify-center py-3.5 text-base leading-7 whitespace-nowrap border-b border-gray-200 border-solid text-neutral-900 max-md:max-w-full">
                <div className="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
                  <div>Shipping</div>
                  <div className="my-auto font-semibold text-right">Free</div>
                </div>
              </div>
              <div className="hidden  flex gap-5 justify-center mt-3.5 text-xl font-medium leading-7 whitespace-nowrap text-neutral-900 max-md:flex-wrap max-md:max-w-full">
                <div>Total</div>
                <div className="my-auto text-right">$95.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-x-4 w-full mr-8 ">
          <div className="lg:w-3/4 w-full mr-8 lg:flex lg:justify-between">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:w-1/4 w-full mb-8 mr-8 lg:flex lg:w-full lg:justify-between">
            <CouponForm />
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              discount={discount}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
