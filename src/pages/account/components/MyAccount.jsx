import React from "react";

const MyAccount = () => {
  return (
    <section className="flex flex-col grow px-20 text-xs leading-3 text-zinc-500 w-full">
      <h2 className="mr-7 text-xl font-semibold leading-8 text-black max-md:mr-2.5 max-md:max-w-full">
        Account Details
      </h2>
      <form>
        <label
          htmlFor="firstName"
          className="mt-6 mr-7 font-bold uppercase max-md:mr-2.5 max-md:max-w-full"
        >
          First name *
        </label>
        <input
          id="firstName"
          type="text"
          className="justify-center px-4 py-2 mt-3 mr-7 text-base leading-7 bg-white rounded-md 
          border border-solid border-stone-300 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
          placeholder="First name"
        />
        <label
          htmlFor="lastName"
          className="mt-6 mr-7 font-bold uppercase max-md:mr-2.5 max-md:max-w-full"
        >
          Last name *
        </label>
        <input
          id="lastName"
          type="text"
          className="justify-center px-4 py-2 mt-3 mr-7 text-base leading-7 bg-white rounded-md 
          border border-solid border-stone-300 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
          placeholder="Last name"
        />
        <label
          htmlFor="displayName"
          className="mt-6 mr-7 font-bold uppercase max-md:mr-2.5 max-md:max-w-full"
        >
          Display name *
        </label>
        <input
          id="displayName"
          type="text"
          className="justify-center px-4 py-2 mt-3 mr-7 text-base leading-7 bg-white rounded-md 
          border border-solid border-stone-300 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
          placeholder="Display name"
        />
        <p className="mt-3 mr-7 italic leading-[167%] max-md:mr-2.5 max-md:max-w-full">
          This will be how your name will be displayed in the account section
          and in reviews
        </p>
        <label
          htmlFor="email"
          className="mt-6 mr-7 font-bold uppercase max-md:mr-2.5 max-md:max-w-full"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          className="justify-center px-4 py-2 mt-3 mr-7 text-base leading-7 whitespace-nowrap bg-white 
          rounded-md border border-solid border-stone-300 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
          placeholder="Email"
        />
        <h2 className="mt-10 mr-7 text-xl font-semibold leading-8 text-black max-md:mr-2.5 max-md:max-w-full">
          Password
        </h2>
        <label
          htmlFor="oldPassword"
          className="mt-6 mr-7 font-bold uppercase max-md:mr-2.5 max-md:max-w-full"
        >
          Old password
        </label>
        <input
          id="oldPassword"
          type="password"
          className="justify-center px-4 py-2 mt-3 mr-7 text-base leading-7 bg-white rounded-md 
          border border-solid border-stone-300 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
          placeholder="Old password"
        />
        <label
          htmlFor="newPassword"
          className="mt-6 mr-7 font-bold uppercase max-md:mr-2.5 max-md:max-w-full"
        >
          New password
        </label>
        <input
          id="newPassword"
          type="password"
          className="justify-center px-4 py-2 mt-3 mr-7 text-base leading-7 bg-white rounded-md 
          border border-solid border-stone-300 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
          placeholder="New password"
        />
        <label
          htmlFor="repeatNewPassword"
          className="mt-6 mr-7 font-bold uppercase max-md:mr-2.5 max-md:max-w-full"
        >
          Repeat new password
        </label>
        <input
          id="repeatNewPassword"
          type="password"
          className="justify-center px-4 py-2 mt-3 mr-7 text-base leading-7 bg-white rounded-md 
          border border-solid border-stone-300 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
          placeholder="Repeat new password"
        />
        <button
          type="submit"
          className="justify-center self-start px-10 py-3 mt-6 text-base font-medium tracking-tight leading-7 
          text-center text-white bg-purple-600 rounded-lg max-md:px-5"
        >
          Save changes
        </button>
      </form>
    </section>
  );
};

export default MyAccount;
