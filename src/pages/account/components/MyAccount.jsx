import React from "react";

const MyAccount = () => {
  return (
  <div className="container">
    <div className="flex flex-col justify-center items-center pt-4 w-full bg-white h-full">
      <div className="flex flex-col pt-4 lg:pt-0 pb-10 w-full font-medium bg-white">
        <div className="flex gap-1 self-start  text-sm leading-6 whitespace-nowrap text-zinc-600 lg:hidden">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/248cdae6db3f07246219743ced74a85f18d452ccca7b9bbcdfd47edc9f91c26b?"
            className="shrink-0 my-auto w-full aspect-square"
          />
          <div>back</div>
        </div>
        <div className="flex flex-col justify-center  mt-10 w-full text-4xl tracking-tight leading-10 text-black">
          <div className="justify-center text-center  lg:hidden">My Account</div>
        </div>
      </div>
      <div className="flex flex-col  w-full bg-white">
        <div className="flex flex-col items-center px-4 py-10 w-full bg-gray-100 rounded-lg lg:hidden">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02498d4bd3dce7d4aa0bfdee0ea6100e10b07dc0c451ae2911fc443830dd8fc5?"
            className="aspect-square w-[82px]"
          />
          <div className="mt-1.5 text-xl font-semibold leading-8 text-black">
            Narathip Thakham
          </div>
          <div className="flex gap-5 justify-between self-stretch py-2 pr-2 pl-4 mt-10 bg-white rounded-lg border-2 border-solid border-zinc-500">
            <div className="my-auto text-base font-semibold leading-7 text-neutral-900">
              Account
            </div>
            <div className="flex justify-center items-center p-1 rounded-[100px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6556996aa3f4a3c86d89e3d0686f793f44d2d30536607a1a2d2e23b205bc8977?"
                className="w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  pt-10 lg:pt-0 pb-20 text-xs leading-3 text-zinc-500">
          <div className="text-xl font-semibold leading-8 text-black">
            Account Details
          </div>
          <div>
            <form className="flex flex-col">
              <label htmlFor="firstName" className="mt-6 font-bold uppercase">
                First name *
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500"
              />
              <label htmlFor="firstName" className="mt-6 font-bold uppercase">
                Last name *
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500"
              />
              <label htmlFor="displayName" className="mt-6 font-bold uppercase">
              Display name *
              </label>
              <input
                type="text"
                id="displayName"
                placeholder="Display name"
                className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500"
              />
              <label htmlFor="email" className="mt-6 font-bold uppercase">
              Email *
              </label>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500"
              />
            </form>
          </div>
            <div className="mt-10 text-xl font-semibold leading-8 text-black">
               Password
            </div>
            <div>
                <form className="flex flex-col">
                      <label htmlFor="firstName" className="mt-6 font-bold uppercase">
                      Old password
                      </label>
                      <input
                        type="text"
                        id="oldPassword"
                        placeholder="Oldpassword"
                        className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500"
                      />
                      <label htmlFor="firstName" className="mt-6 font-bold uppercase">
                      new password
                      </label>
                      <input
                        type="text"
                        id="mewPassword"
                        placeholder="newPassword"
                        className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500"
                      />
                      <label htmlFor="email" className="mt-6 font-bold uppercase">
                      REPEAT NEW PASSWORD
                      </label>
                      <input
                        type="text"
                        id="repeatNewPassword"
                        placeholder="Repeat new password"
                        className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500"
                      />
                </form>
                <button className="justify-center px-10 py-3 mt-6 text-base font-medium tracking-tight leading-7 text-center text-white bg-purple-600 rounded-lg">
                    Save changes
                </button>
            </div>
        </div>      
      </div>
    </div>
  </div>   
  );
};

export default MyAccount;
