import React from "react";
// components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const MyAccount = () => {
  return (
    <section>
      <form action="" className="grid gap-8">
        <div className="grid w-full items-center gap-4">
          <h4 className="font-bold">Account Details</h4>

          <div className="grid w-full gap-2">
            <Label htmlFor="fname">First Name *</Label>
            <Input type="text" id="fname" placeholder="First Name" />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="lname">Last Name *</Label>
            <Input type="text" id="lname" placeholder="Last Name" />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
        </div>

        <div className="grid w-full items-center gap-4">
          <h4 className="font-bold">Password</h4>

          <div className="grid w-full gap-2">
            <Label htmlFor="password">Password *</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="new-password">New Password *</Label>
            <Input type="password" id="new-password" placeholder="Password" />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="rpassword">Repeat New Password *</Label>
            <Input
              type="password"
              id="rpassword"
              placeholder="Repeat New Password"
            />
          </div>
        </div>

        <div className="block">
          <Button className="mb-8">Save Changes</Button>
        </div>
      </form>
    </section>
  );
};

export default MyAccount;
