import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { editProfile, updateProfile } from "@/api/authApi";
import { useToast } from "@/components/ui/use-toast";

const MyAccount = () => {
  const { toast } = useToast();

  const [errorMsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await editProfile();
        setUserData({
          fname: response.data.fname || "",
          lname: response.data.lname || "",
          email: response.data.email || "",
          password: "",
          newPassword: "",
          repeatNewPassword: "",
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.newPassword !== userData.repeatNewPassword) {
      return setErrorMsg("Passwords do not match");
    }

    try {
      const dataToUpdate = {
        fname: userData.fname,
        lname: userData.lname,
        email: userData.email,
      };

      if (userData.password && userData.newPassword) {
        dataToUpdate.password = userData.password;
        dataToUpdate.newPassword = userData.newPassword;
      }

      await updateProfile(dataToUpdate);
      console.log("Profile updated successfully");

      // Clear password fields after successful update
      setUserData((prev) => ({
        ...prev,
        password: "",
        newPassword: "",
        repeatNewPassword: "",
      }));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <section>
      <form className="grid gap-8" onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-4">
          <h4 className="font-bold">Account Details</h4>

          <div className="grid w-full gap-2">
            <Label htmlFor="fname">First Name *</Label>
            <Input
              type="text"
              id="fname"
              placeholder="First Name"
              value={userData.fname}
              onChange={handleChange}
              aria-required="true"
            />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="lname">Last Name *</Label>
            <Input
              type="text"
              id="lname"
              placeholder="Last Name"
              value={userData.lname}
              onChange={handleChange}
              aria-required="true"
            />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
              aria-required="true"
            />
          </div>

          <div className="grid w-full items-center gap-4">
            <h4 className="font-bold">Change Password</h4>

            <div className="grid w-full gap-2">
              <Label htmlFor="password">Current Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Current Password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>

            <div className="grid w-full gap-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                type="password"
                id="newPassword"
                placeholder="New Password"
                value={userData.newPassword}
                onChange={handleChange}
              />
            </div>

            <div className="grid w-full gap-2">
              <Label htmlFor="repeatNewPassword">Repeat New Password</Label>
              <Input
                type="password"
                id="repeatNewPassword"
                placeholder="Repeat New Password"
                value={userData.repeatNewPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="block">
          <Button className="mb-8" type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </section>
  );
};

export default MyAccount;
