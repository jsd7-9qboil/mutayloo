import React from "react";
import horoscopeData from "../../data/horoscope";
import { Link } from "react-router-dom";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";

const Horoscope = () => {
  console.log(horoscopeData);

  return (
    <div>
      <BreadcrumbBanner />
      <section className="container">
        <h2>Horoscope</h2>
        <div className="grid grid-cols-4 gap-4">
          {horoscopeData.map((horoscope) => (
            <Link to={`/horoscope/${horoscope.id}`} key={horoscope.id}>
              <div key={horoscope.id}>
                <p>{horoscope.name}</p>
                <p>{horoscope.description}</p>
                <img src={horoscope.image} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Horoscope;
