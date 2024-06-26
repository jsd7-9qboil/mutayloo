import React from "react";
// components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MyAccount = () => {
  return (
    <section>
      <div>
        <h5 className="font-bold">Account Details</h5>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="fname">First Name*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>

      <div>
        <h5 className="font-bold">Password</h5>
      </div>
    </section>
  );
};

export default MyAccount;
