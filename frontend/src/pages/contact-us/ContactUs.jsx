import React from "react";
import { BreadCrums } from "./components/BreadCrums";
import { ContactSection } from "./components/ContactSection";
import { FeatureSection } from "./components/FeatureSection";

export const ContactUs = () => {
  return (
    <section>
      <BreadCrums />
      <FeatureSection />
      <ContactSection />
    </section>
  );
};
