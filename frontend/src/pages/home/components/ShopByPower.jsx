import React from "react";
import { Link } from "react-router-dom";

const ShopByPower = () => {
  return (
    <section className=" lg:pt-8 pb-16">
      <div className="container">
        <h2 className="font-bold py-8">Shop By Power</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="p-6 bg-base-100">
            <figure className="w-full">
              <img
                src="https://via.placeholder.com/450x360"
                alt=""
                className="w-full"
              />
            </figure>
            <div className="py-4 flex flex-col gap-2">
              <p className="text-3xl font-semibold">Luck 🍀</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link to="/" className="font-medium text-lg underline">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="py-6 px-6 bg-base-100">
            <figure className="w-full">
              <img
                src="https://via.placeholder.com/450x360"
                alt=""
                className="w-full"
              />
            </figure>
            <div className="py-4 flex flex-col gap-2">
              <p className="text-3xl font-semibold">Love ❤️</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link to="/" className="font-medium text-lg underline">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="py-6 px-6 bg-base-100">
            <figure className="w-full">
              <img
                src="https://via.placeholder.com/450x360"
                alt=""
                className="w-full"
              />
            </figure>
            <div className="py-4 flex flex-col gap-2">
              <p className="text-3xl font-semibold">Success 🎉</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link to="/" className="font-medium text-lg underline">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByPower;
