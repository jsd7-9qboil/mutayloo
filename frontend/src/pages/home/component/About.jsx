import React from "react";

export const About = () => {
  return (
    <section>
      <div className="container">
        <h1>About</h1>
        <div className="flex gap-4">
          <span className="badge">Badge</span>
          <span className="badge-primary">Badge Primary</span>
          <span className="badge-secondary">Badge Secondary</span>
          <span className="badge-accent">Badge Accent</span>
          <span className="badge-ghost">Badge Ghost</span>
        </div>
      </div>
    </section>
  );
};
