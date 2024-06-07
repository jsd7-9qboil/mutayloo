import React, { useState } from "react";

const DevDocument = () => {
  const [toggle, setToggle] = useState("");

  return (
    <main className="min-h-screen p-6 bg-zinc-800 text-white flex flex-col gap-8">
      <h1 className="font-bold bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
        Dev Document
      </h1>
      <section>
        <h2 className="font-bold">#Class CSS</h2>

        <div className="my-12">
          <h3>Color</h3>
          <div className="grid grid-cols-5 gap-4">
            <p className="bg-primary text-white p-4">primary</p>
            <p className="bg-secondary text-white p-4">secondary</p>
            <p className="bg-accent text-white p-4">accent</p>
            <p className="bg-success text-white p-4">ghost</p>
            <p className="bg-warning text-white p-4">warning</p>
            <p className="bg-danger text-white p-4">error</p>
            <p className="bg-base-100 p-4 text-black">base-100</p>
            <p className="bg-base-200 p-4 text-black">base-200</p>
            <p className="bg-base-300 p-4 text-base-900">base-300</p>
            <p className="bg-base-400 p-4">base-400</p>
            <p className="bg-base-500 p-4">base-500</p>
            <p className="bg-base-600 p-4">base-600</p>
            <p className="bg-base-700 p-4">base-700</p>
            <p className="bg-base-800 p-4">base-800</p>
            <p className="bg-base-900 p-4">base-900</p>
          </div>
        </div>

        <hr />
        <div className="my-12">
          <h3>Typogtaphy</h3>
          <div className="">
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <p>p</p>
            <p className="quote my-4">
              <span className="font-bold">class=&quot;quote&quot;</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Libero velit aperiam modi rem dignissimos nesciunt error! Tempora,
              atque accusamus magni eos repudiandae voluptatum autem. Hic alias
              numquam explicabo dolore, recusandae ut maiores accusamus deserunt
              nihil omnis blanditiis ab eos autem provident vel quasi? Eius
              praesentium doloribus, inventore quibusdam vitae corporis.
            </p>
          </div>
        </div>

        <hr />
        <div className="my-12">
          <h3>Button</h3>
          <div className="flex gap-4 mt-4">
            <button className="btn" onClick={() => setToggle("btn")}>
              Button
            </button>
            <button
              className="btn-accent"
              onClick={() => setToggle("btn-accent")}
            >
              Button
            </button>
          </div>
          <div className="bg-zinc-700 p-6 my-4 rounded">
            {(toggle === "btn-accent" && (
              <p>
                &lt;button
                className=&quot;btn-accent&quot;&gt;Button&lt;/button&gt;
              </p>
            )) || (
              <p>
                &lt;button className=&quot;btn&quot;&gt;Button&lt;/button&gt;
              </p>
            )}
          </div>
        </div>

        <hr />
        <div className="my-12">
          <h3>Badge</h3>
          <div className="flex gap-4">
            <span className="badge text-white">Badge</span>
            <span className="badge-primary">Badge Primary</span>
            <span className="badge-secondary">Badge Secondary</span>
            <span className="badge-accent">Badge Accent</span>
            <span className="badge-ghost">Badge Ghost</span>
          </div>
          <div className="bg-zinc-700 p-6 my-4 rounded">
            <p>&lt;span className=&quot;badge&quot;&gt;Badge&lt;/span&gt;</p>
          </div>
        </div>
        <hr />
      </section>
    </main>
  );
};

export default DevDocument;
