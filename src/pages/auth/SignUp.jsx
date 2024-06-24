import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { validateEmail, validatePassword } from "@/lib/validation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};
    if (email.length > 0 && !validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }
    if (password.length > 0 && !validatePassword(password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include at least one uppercase letter and one number";
    }
    if (confirmPassword.length > 0 && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
  }, [email, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted");
      // ส่งข้อมูลฟอร์ม
    }
  };

  return (
    <main className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Register
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          ลงทะเบียนวันนี้เพื่อเปลี่ยนโชคชะตาของคุณ
        </p>
      </div>
      <div className="bg-white xl:w-3/5 w-full mx-auto p-4 shadow-lg rounded-tr-[3rem] rounded-bl-[3rem] mt-2">
        {/* form start */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 p-6">
          {/* name */}
          <div className="grid grid-cols-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="Fname">Fname</Label>
              <Input type="text" id="Fname" placeholder="Fname" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="Lname">Lname</Label>
              <Input type="text" id="Lname" placeholder="Lname" />
            </div>
          </div>

          {/* mail, number */}
          <div className="grid grid-cols-2">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </Label>
              <Input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email.length > 0 && errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="Phone">Phone</Label>
              <Input type="text" id="Phone" placeholder="Phone" />
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-2">
            <Label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length > 0 && errors.password && (
              <p className="text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div className="grid w-full max-w-sm items-center gap-2">
            <Label
              htmlFor="confirm-password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Confirm Password
            </Label>
            <Input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPassword.length > 0 && errors.confirmPassword && (
              <p className="text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
