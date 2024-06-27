import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
// components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const AddressCard = () => {
  return (
    <div>
      <div className="py-8 px-16 rounded-lg border border-base-500">
        {/* title and modal */}
        <div className="flex justify-between">
          <p className="text-lg font-bold">Address Name</p>
          <Dialog>
            <DialogTrigger asChild>
              <p className="flex items-center gap-1 cursor-pointer font-medium text-base-700 hover:text-black duration-300">
                <AiOutlineEdit className="text-base" />
                Edit
              </p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl px-8">
              <DialogHeader>
                <DialogTitle>Edit Address</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="lname" className="text-right">
                    First Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="First Name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    defaultValue="+66123456789"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Address
                  </Label>
                  <Input
                    id="address"
                    defaultValue="345 Long Island, NewYork, United States"
                    className="col-span-3"
                  />
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Set as Default Address
                  </label>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* address */}
        <article className="mt-2 grid gap-1.5">
          <p>Fname Lname</p>
          <p>+66 123 456 789</p>
          <p>345 Long Island, NewYork, United States</p>
        </article>
      </div>
    </div>
  );
};

export default AddressCard;
