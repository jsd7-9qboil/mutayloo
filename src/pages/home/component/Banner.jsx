import React from "react";

export const Banner = () => {
  const data = [
    {
      title: "Title",
      description: "Description",
      img: "https://via.placeholder.com/1920x650",
    },
    {
      title: "Title",
      description: "Description",
      img: "https://via.placeholder.com/1920x650",
    },
    {
      title: "Title",
      description: "Description",
      img: "https://via.placeholder.com/1920x650",
    },
    {
      title: "Title",
      description: "Description",
      img: "https://via.placeholder.com/1920x650",
    },
  ];

  return (
    <section className="bg-[url({data.img})] w-full h-full">
      <div className="inner-text">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </section>
  );
};
