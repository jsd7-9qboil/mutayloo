import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const Hastag = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-4 lg:gap-6">
        <h2 className="text-center leading-tight">#mutayloojewelry</h2>
        <p className="text-center text-base-800">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="https://via.placeholder.com/350x350"
              alt=""
              className="w-full"
            />
            <div className="flex justify-center items-center gap-2">
              <AiOutlineInstagram className="w-6 h-6" />
              <p className="my-4">@ABCDE</p>
            </div>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/350x350"
              alt=""
              className="w-full"
            />
            <div className="flex justify-center items-center gap-2">
              <AiOutlineInstagram className="w-6 h-6" />
              <p className="my-4">@ABCDE</p>
            </div>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/350x350"
              alt=""
              className="w-full"
            />
            <div className="flex justify-center items-center gap-2">
              <AiOutlineInstagram className="w-6 h-6" />
              <p className="my-4">@ABCDE</p>
            </div>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/350x350"
              alt=""
              className="w-full"
            />
            <div className="flex justify-center items-center gap-2">
              <AiOutlineInstagram className="w-6 h-6" />
              <p className="my-4">@ABCDE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hastag;
