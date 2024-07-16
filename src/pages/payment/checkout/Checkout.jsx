import React from "react";
// icons
import { TicketPercent } from "lucide-react";
import { PackageCheck } from "lucide-react";
import promtPay from "@/assets/icons/promptPay.png";

// components
import Head from "../components/Head";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Checkout = () => {
  return (
    <main className="container">
      <Head step={2} />
      <section className="w-full grid grid-cols-12 gap-8 mb-24">
        {/* left */}
        <div className="col-span-12 lg:col-span-8 ">
          <div className="flex flex-col border rounded-lg p-8">
            <h2 className="pb-6">Contact Infomation</h2>
            <form className="flex flex-col gap-4">
              <div className="grid gap-1.5">
                <Label>Billing Address</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="เลือกที่อยู่สำหรับจัดส่ง" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>เลือกที่อยู่สำหรับจัดส่ง</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="grid gap-1.5">
                  <Label>ชื่อจริง *</Label>
                  <Input type="text" placeholder="สมชาย" />
                </div>
                <div className="grid gap-1.5">
                  <Label>นามสกุล *</Label>
                  <Input type="text" placeholder="ใจดี" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="grid gap-1.5">
                  <Label>โทรศัพท์ *</Label>
                  <Input type="text" placeholder="098 765 4321" />
                </div>
                <div className="grid gap-1.5">
                  <Label>อีเมล * </Label>
                  <Input type="email" placeholder="somchai@mail.com" />
                </div>
              </div>

              <div className="grid gap-8">
                <div className="grid gap-1.5">
                  <Label>บ้านเลขที่ และถนน *</Label>
                  <Input type="text" placeholder="บ้านเลขที่ และถนน" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-1.5">
                    <Label>แขวง / ตำบล</Label>
                    <Input type="email" placeholder="somchai@mail.com" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>เขต / อำเภอ</Label>
                    <Input type="email" placeholder="somchai@mail.com" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-1.5">
                    <Label>จังหวัด</Label>
                    <Input type="email" placeholder="somchai@mail.com" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>รหัสไปรษณีย์</Label>
                    <Input type="email" placeholder="somchai@mail.com" />
                  </div>
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label>ข้อมูลเพิ่มเติม</Label>
                <Input type="text" placeholder="หมายเหตุต่างๆ เช่น ...." />
              </div>
            </form>
          </div>
        </div>

        {/* right */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          {/* Order summary */}
          <div className="flex flex-col border rounded-lg p-8">
            <h2 className="pb-6">Order summary</h2>
            <div>
              <div className="flex justify-between py-4">
                <div className="flex items-start gap-4">
                  <figure className="w-24 h-24">
                    <img
                      src="https://via.placeholder.com/250"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-semibold">ชื่อสินค้า</p>
                    <p className="text-sm">Color: Black</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <p className="text-lg font-semibold">199.00 $</p>
                </div>
              </div>
              <Separator />
            </div>
            <div className="py-4">
              <div className="flex gap-4">
                <Input type="text" placeholder="Coupon code" />
                <Button>Apply</Button>
              </div>
              <div className="flex justify-between py-2 px-1">
                <TicketPercent />
                <p className="text-green-600 text-base font-medium">-3.00 $</p>
              </div>
              <Separator />
              <div className="flex justify-between py-2 px-1">
                <p>Shipping</p>
                <p className="text-green-600 text-base font-medium">Free</p>
              </div>
              <Separator />
              <div className="flex justify-between py-4 px-1">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-base font-medium">199.00 $</p>
              </div>
            </div>
          </div>

          {/* payment method */}
          <div className="flex flex-col border rounded-lg p-8">
            <h2 className="pb-6">Payment method</h2>
            <div>
              <RadioGroup defaultValue="Prompt Pay">
                <div className="flex items-center space-x-4 p-4 border-2 rounded-lg">
                  <RadioGroupItem value="Prompt Pay" />
                  <div className="w-full flex justify-between items-center">
                    <Label htmlFor="r1">Prompt Pay</Label>
                    <img src={promtPay} alt="" className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 border-2 rounded-lg">
                  <RadioGroupItem value="Cash on delivery" />
                  <div className="w-full flex justify-between items-center">
                    <Label htmlFor="r2">Cash on delivery</Label>
                    <PackageCheck />
                  </div>
                </div>
              </RadioGroup>
            </div>
            <Button className="w-full mt-4">Checkout</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
