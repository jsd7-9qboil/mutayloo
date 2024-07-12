import React from "react";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox"

const Checkout = () => {
  return (
    <div>
      <div className="min-w-min">
        <div>
          <div className="lg:max-w-4xl w-full  mx-auto ">
            <h1 className="text-center font-bold my-8">Checkout</h1>
            <div className="grid grid-cols-3 gap-8">
              <div className="hidden lg:flex flex items-center gap-4 lg:block">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5 rounded-full  
                    inline-flex items-center justify-center  
                    bg-primary text-white text-xl font-bold"
                >
                  1
                </div>
                <p className="lg:text-xl font-bold">Shopping Cart</p>
              </div>
              <div className="flex items-center gap-4 ">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5  rounded-full  
                    inline-flex items-center justify-center  
                    bg-primary text-white text-xl font-bold text-center"
                >
                  2
                </div>
                <p className="lg:text-xl font-bold text-center">Checkout Detail</p>
              </div>
              <div className="hidden lg:block lg:flex flex items-center gap-4">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5  rounded-full  
                    inline-flex items-center justify-center  
                    bg-primary text-white text-xl font-bold"
                >
                  3
                </div>
                <p className="lg:text-xl font-bold">Oder Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-10 ml-4 mt-12 mr-4">
        <div className="lg:w-3/5 w-full">
          <div className="flex flex-col px-6 py-10 rounded border border-solid border-zinc-500 max-w-[964px] max-md:px-5">
            <div className="text-xl font-medium leading-7 text-black max-md:max-w-full">
              Contact Infomation
            </div>
            <div className="mt-6 text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
              ที่อยู่การจัดส่ง (ถ้ามี)
            </div>
            <div className="flex flex-col justify-center px-4 py-2 mt-3 text-base leading-7 whitespace-nowrap bg-white rounded-md border border-solid border-zinc-500 text-zinc-500 max-md:max-w-full">
              <div className="flex gap-2 max-md:flex-wrap">
                <Select>
                  {" "}
                  <SelectTrigger className="w-[180px]">
                    {" "}
                    <SelectValue placeholder="Select address" />{" "}
                  </SelectTrigger>{" "}
                  <SelectContent>
                    {" "}
                    <SelectGroup>
                      {" "}
                      <SelectLabel>address</SelectLabel>{" "}
                      <SelectItem value="address1">address1</SelectItem>{" "}
                      <SelectItem value="address2">address2</SelectItem>{" "}
                      <SelectItem value="address3">address3</SelectItem>{" "}
                    </SelectGroup>{" "}
                  </SelectContent>{" "}
                </Select>
                
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full  ">
              <div className="flex flex-col max-md:max-w-full ">
                <div className="text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
                  ชื่อจริง *
                </div>
                <input
                  type="text"
                  className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full w-full"
                  placeholder="First name"
                />
              </div>
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
                  นามสกุล *
                </div>
                <input
                  type="text"
                  className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
                  โทรศัพท์ *
                </div>
                <input
                  type="text"
                  className="justify-center px-4 py-2 mt-3 text-base leading-7 whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
                  placeholder="โทรศัพท์"
                />
              </div>
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
                  อีเมล *{" "}
                </div>
                <input
                  type="email"
                  className="justify-center px-4 py-2 mt-3 text-base leading-7 whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
                  placeholder="อีเมล์"
                />
              </div>
            </div>
            <div className="mt-6 text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
              ที่อยู่ *
            </div>
            <input
              type="text"
              className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
              placeholder="บ้านเลขที่ และถนน"
            />
            <div className="flex flex-col justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-zinc-500 text-zinc-500 max-md:max-w-full">
              <Select>
                    {" "}
                    <SelectTrigger className="w-[180px]">
                      {" "}
                      <SelectValue placeholder="เขต/ตำบล" />{" "}
                    </SelectTrigger>{" "}
                    <SelectContent>
                      {" "}
                      <SelectGroup>
                        {" "}
                        <SelectLabel>address</SelectLabel>{" "}
                        <SelectItem value="address1">address1</SelectItem>{" "}
                        <SelectItem value="address2">address2</SelectItem>{" "}
                        <SelectItem value="address3">address3</SelectItem>{" "}
                      </SelectGroup>{" "}
                    </SelectContent>{" "}
              </Select>
            </div>
            <div className="flex flex-col justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-zinc-500 text-zinc-500 max-md:max-w-full">
              <Select>
                    {" "}
                    <SelectTrigger className="w-[180px]">
                      {" "}
                      <SelectValue placeholder="แขวง/อำเภอ" />{" "}
                    </SelectTrigger>{" "}
                    <SelectContent>
                      {" "}
                      <SelectGroup>
                        {" "}
                        <SelectLabel>address</SelectLabel>{" "}
                        <SelectItem value="address1">address1</SelectItem>{" "}
                        <SelectItem value="address2">address2</SelectItem>{" "}
                        <SelectItem value="address3">address3</SelectItem>{" "}
                      </SelectGroup>{" "}
                    </SelectContent>{" "}
              </Select>
            </div>
            <div className="flex gap-5 justify-between mt-3 text-base leading-7 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col justify-center px-4 py-2 bg-white rounded-md border border-solid border-zinc-500 text-zinc-500 max-md:max-w-full">
                <div className="flex gap-2">
                  <input type="text" className="flex-1" placeholder="จังหวัด" />
                </div>
              </div>
              <input
                type="text"
                className="justify-center px-4 py-2 bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
                placeholder="รหัสไปรษณีย์"
              />
            </div>
            <div className="mt-6 text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
              ข้อมูลเพิ่มเติม
            </div>
            <input
              type="text"
              className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
              placeholder=" หมายเหตุต่างๆ เช่น ...."
            />
          </div>
        </div>
        <div className="lg:w-2/5 w-full md:w-full justify-center items-center">
          <div className="md:w-full">
            <div className="flex flex-col px-6 py-4 bg-white rounded-md border border-solid border-zinc-500 max-w-[509px] max-md:px-5">
              <div className="text-3xl font-medium tracking-tight leading-8 text-neutral-900 max-md:max-w-full">
                Order summary
              </div>
              <div className="flex flex-col justify-center py-6 mt-4 border-b border-gray-200 border-solid max-md:max-w-full">
                <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col justify-center">
                    <div className="shrink-0 h-24 bg-purple-600" />
                  </div>
                  <div className="flex flex-col pb-1.5">
                    <div className="text-sm font-semibold leading-5 text-neutral-900">
                      Tray Table
                    </div>
                    <div className="mt-2 text-xs leading-5 text-zinc-500">
                      Color: Black
                    </div>
                    <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded border border-solid border-zinc-500 max-md:pr-5">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="w-16 aspect-[3.23]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-6 mt-6 border-b border-gray-200 border-solid max-md:max-w-full">
                <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col justify-center">
                    <div className="shrink-0 h-24 bg-purple-600" />
                  </div>
                  <div className="flex flex-col pb-1.5">
                    <div className="text-sm font-semibold leading-5 text-neutral-900">
                      Tray Table
                    </div>
                    <div className="mt-2 text-xs leading-5 text-zinc-500">
                      Color: Red
                    </div>
                    <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded border border-solid border-zinc-500 max-md:pr-5">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="w-16 aspect-[3.23]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-6 mt-6 border-b border-gray-200 border-solid max-md:max-w-full">
                <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col justify-center">
                    <div className="shrink-0 h-24 bg-purple-600" />
                  </div>
                  <div className="flex flex-col pb-1.5">
                    <div className="text-sm font-semibold leading-5 text-neutral-900">
                      Table lamp
                    </div>
                    <div className="mt-2 text-xs leading-5 text-zinc-500">
                      Color: gold
                    </div>
                    <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded border border-solid border-zinc-500 max-md:pr-5">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="w-16 aspect-[3.23]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6 text-base  mr-4">
                <input
                  type="text"
                  className="justify-center px-4 py-3.5 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-600"
                  placeholder="Input"
                />
                <button className="justify-center  px-7 py-3 font-medium tracking-tight leading-7 text-center text-white bg-purple-600 rounded-lg max-md:px-5">
                  Apply
                </button>
              </div>
              <div className="flex flex-col justify-center py-3.5 mt-4 text-base leading-7 border-b border-gray-200 border-solid max-md:max-w-full">
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
              <div className="flex flex-col justify-center py-3.5 text-base leading-7 whitespace-nowrap border-b border-gray-200 border-solid text-neutral-900 max-md:max-w-full">
                <div className="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
                  <div>Shipping</div>
                  <div className="my-auto font-semibold text-right">Free</div>
                </div>
              </div>
              <div className="flex gap-5 justify-center mt-3.5 text-xl font-medium leading-7 whitespace-nowrap text-neutral-900 max-md:flex-wrap max-md:max-w-full">
                <div>Total</div>
                <div className="my-auto text-right">$95.00</div>
              </div>
            </div>
          </div>
          <div className="md:w-full">
            <div className="flex flex-col px-6 py-10 rounded border border-solid border-zinc-500 max-w-[509px] max-md:px-5">
              <div className="text-xl font-medium leading-7 text-neutral-900 max-md:max-w-full">
                Payment method
              </div>
              <div className="flex flex-col pb-8 mt-6 border-b border-solid border-zinc-500 max-md:max-w-full">
                <div className="flex flex-col justify-center px-4 py-3.5 bg-gray-100 rounded border border-solid border-neutral-900 max-md:max-w-full">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Pay By Credit Card
                    </label>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start px-4 py-3.5 mt-6 text-base leading-7 bg-white rounded border border-solid border-zinc-500 text-neutral-900 max-md:pr-5 max-md:max-w-full">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Prompt Pay
                    </label>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start px-4 py-3.5 mt-6 text-base leading-7 bg-white rounded border border-solid border-zinc-500 text-neutral-900 max-md:pr-5 max-md:max-w-full">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Cash on delivery
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
                Card Number
              </div>
              <input
                type="text"
                className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-zinc-500 text-zinc-500 max-md:max-w-full"
                placeholder="1234 1234 1234"
              />
              <div className="flex gap-5 justify-between mt-6 text-zinc-500 max-md:flex-wrap">
                <div className="flex flex-col">
                  <div className="text-xs font-bold leading-3 uppercase">
                    Expiration date
                  </div>
                  <input
                    type="text"
                    className="justify-center px-4 py-2 mt-3 text-base leading-7 whitespace-nowrap bg-white rounded-md border border-solid border-zinc-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-xs font-bold leading-3 uppercase">
                    CVC
                  </div>
                  <input
                    type="text"
                    className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-zinc-500"
                    placeholder="CVC code"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12 mt-4 justify-center items-center">
            <button
              type="submit"
              className="justify-center items-center px-24  py-3 text-base font-medium tracking-tight leading-7 text-center text-white whitespace-nowrap bg-purple-600 rounded-lg w-full"
            >
              สั่งซื้อ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

// import {
//   Bird,
//   Book,
//   Bot,
//   Code2,
//   CornerDownLeft,
//   LifeBuoy,
//   Mic,
//   Paperclip,
//   Rabbit,
//   Settings,
//   Settings2,
//   Share,
//   SquareTerminal,
//   SquareUser,
//   Triangle,
//   Turtle,
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Drawer,
//   DrawerContent,
//   DrawerDescription,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// const Checkout = () => {
//   return (
//     <div className="grid h-screen w-full pl-[56px]">
//       <Status />

//       <div className="flex flex-col">
//         <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
//           <Drawer>
//             {/* <DrawerTrigger asChild>
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Settings className="size-4" />
//                 <span className="sr-only">Settings</span>
//               </Button>
//             </DrawerTrigger> */}
//             <DrawerContent className="max-h-[80vh]">
//               {/* <DrawerHeader>
//                 <DrawerTitle>Configuration</DrawerTitle>
//                 <DrawerDescription>
//                   Configure the settings for the model and messages.
//                 </DrawerDescription>
//               </DrawerHeader> */}
//               <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
//                 <fieldset className="grid gap-6 rounded-lg border p-4">
//                   {/* <legend className="-ml-1 px-1 text-sm font-medium">
//                     Settings
//                   </legend> */}
//                   <div className="grid gap-3">
//                     <Label htmlFor="model">ที่อยู่การจัดส่ง</Label>
//                     <Select>
//                       <SelectTrigger
//                         id="model"
//                         className="items-start [&_[data-description]]:hidden"
//                       >
//                         <SelectValue placeholder="กรุณาเลือกที่อยู่" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="genesis">
//                           <div className="flex items-start gap-3 text-muted-foreground">
//                             <Rabbit className="size-5" />
//                             <div className="grid gap-0.5">
//                               <p>
//                                 ที่อยู่{" "}
//                                 <span className="font-medium text-foreground">
//                                   1
//                                 </span>
//                               </p>
//                               <p className="text-xs" data-description>
//                                 Our fastest model for general use cases.
//                               </p>
//                             </div>
//                           </div>
//                         </SelectItem>
//                         {/* <SelectItem value="explorer">
//                           <div className="flex items-start gap-3 text-muted-foreground">
//                             <Bird className="size-5" />
//                             <div className="grid gap-0.5">
//                               <p>
//                                 Neural{" "}
//                                 <span className="font-medium text-foreground">
//                                   Explorer
//                                 </span>
//                               </p>
//                               <p className="text-xs" data-description>
//                                 Performance and speed for efficiency.
//                               </p>
//                             </div>
//                           </div>
//                         </SelectItem> */}
//                         {/* <SelectItem value="quantum">
//                           <div className="flex items-start gap-3 text-muted-foreground">
//                             <Turtle className="size-5" />
//                             <div className="grid gap-0.5">
//                               <p>
//                                 Neural{" "}
//                                 <span className="font-medium text-foreground">
//                                   Quantum
//                                 </span>
//                               </p>
//                               <p className="text-xs" data-description>
//                                 The most powerful model for complex
//                                 computations.
//                               </p>
//                             </div>
//                           </div>
//                         </SelectItem> */}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div className="grid gap-3">
//                     <Label htmlFor="temperature">Temperature</Label>
//                     <Input id="temperature" type="number" placeholder="0.4" />
//                   </div>
//                   <div className="grid gap-3">
//                     <Label htmlFor="top-p">Top P</Label>
//                     <Input id="top-p" type="number" placeholder="0.7" />
//                   </div>
//                   <div className="grid gap-3">
//                     <Label htmlFor="top-k">Top K</Label>
//                     <Input id="top-k" type="number" placeholder="0.0" />
//                   </div>
//                 </fieldset>
//                 <fieldset className="grid gap-6 rounded-lg border p-4">
//                   <legend className="-ml-1 px-1 text-sm font-medium">
//                     Messages
//                   </legend>
//                   <div className="grid gap-3">
//                     <Label htmlFor="role">Role</Label>
//                     <Select defaultValue="system">
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select a role" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="system">System</SelectItem>
//                         <SelectItem value="user">User</SelectItem>
//                         <SelectItem value="assistant">Assistant</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div className="grid gap-3">
//                     <Label htmlFor="content">Content</Label>
//                     <Textarea id="content" placeholder="You are a..." />
//                   </div>
//                 </fieldset>
//               </form>
//             </DrawerContent>
//           </Drawer>
//           {/* <Button
//               variant="outline"
//               size="sm"
//               className="ml-auto gap-1.5 text-sm"
//             >
//               <Share className="size-3.5" />
//               Share
//             </Button> */}
//         </header>
//         <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
//           <div
//             className="relative hidden flex-col items-start gap-8 md:flex"
//             x-chunk="dashboard-03-chunk-0"
//           >
//             <form className="grid w-full items-start gap-6">
//               <fieldset className="grid gap-6 rounded-lg border p-4">
//                 <legend className="-ml-1 px-1 text-sm font-medium">
//                   Settings
//                 </legend>
//                 <div className="grid gap-3">
//                   <Label htmlFor="model">Model</Label>
//                   <Select>
//                     <SelectTrigger
//                       id="model"
//                       className="items-start [&_[data-description]]:hidden"
//                     >
//                       <SelectValue placeholder="Select a model" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="genesis">
//                         <div className="flex items-start gap-3 text-muted-foreground">
//                           <Rabbit className="size-5" />
//                           <div className="grid gap-0.5">
//                             <p>
//                               Neural{" "}
//                               <span className="font-medium text-foreground">
//                                 Genesis
//                               </span>
//                             </p>
//                             <p className="text-xs" data-description>
//                               Our fastest model for general use cases.
//                             </p>
//                           </div>
//                         </div>
//                       </SelectItem>
//                       <SelectItem value="explorer">
//                         <div className="flex items-start gap-3 text-muted-foreground">
//                           <Bird className="size-5" />
//                           <div className="grid gap-0.5">
//                             <p>
//                               Neural{" "}
//                               <span className="font-medium text-foreground">
//                                 Explorer
//                               </span>
//                             </p>
//                             <p className="text-xs" data-description>
//                               Performance and speed for efficiency.
//                             </p>
//                           </div>
//                         </div>
//                       </SelectItem>
//                       <SelectItem value="quantum">
//                         <div className="flex items-start gap-3 text-muted-foreground">
//                           <Turtle className="size-5" />
//                           <div className="grid gap-0.5">
//                             <p>
//                               Neural{" "}
//                               <span className="font-medium text-foreground">
//                                 Quantum
//                               </span>
//                             </p>
//                             <p className="text-xs" data-description>
//                               The most powerful model for complex computations.
//                             </p>
//                           </div>
//                         </div>
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="temperature">Temperature</Label>
//                   <Input id="temperature" type="number" placeholder="0.4" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="grid gap-3">
//                     <Label htmlFor="top-p">Top P</Label>
//                     <Input id="top-p" type="number" placeholder="0.7" />
//                   </div>
//                   <div className="grid gap-3">
//                     <Label htmlFor="top-k">Top K</Label>
//                     <Input id="top-k" type="number" placeholder="0.0" />
//                   </div>
//                 </div>
//               </fieldset>
//               <fieldset className="grid gap-6 rounded-lg border p-4">
//                 <legend className="-ml-1 px-1 text-sm font-medium">
//                   Messages
//                 </legend>
//                 <div className="grid gap-3">
//                   <Label htmlFor="role">Role</Label>
//                   <Select defaultValue="system">
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a role" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="system">System</SelectItem>
//                       <SelectItem value="user">User</SelectItem>
//                       <SelectItem value="assistant">Assistant</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="content">Content</Label>
//                   <Textarea
//                     id="content"
//                     placeholder="You are a..."
//                     className="min-h-[9.5rem]"
//                   />
//                 </div>
//               </fieldset>
//             </form>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
