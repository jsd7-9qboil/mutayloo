const AboutUs = () => {
  return (
    <section>
      <div className="container grid lg:grid-cols-12 py-16">
        <h1 className="col-span-9 text-4xl lg:text-6xl font-semibold">
          Slogan Here <span className="text-base-600">/</span>
          <br />
          Second Slogan Here<span className="text-base-600">.</span>
        </h1>
        <div className="col-span-3 flex items-center">
          <p>
            <span className="font-bold">Mutayloo</span> is a Lorem Ipsum is
            simply dummy text of the printing and typesetting industry
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
