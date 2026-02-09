"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Oliver Thompson",
      role: "Homeowner, London",
      message:
        "The GSM intercom and automated gate installation was seamless. Really impressed with the quality and professionalism of the team!",
      image: "/testimonials/oliver.jpg",
    },
    {
      name: "Amelia Clarke",
      role: "Business Owner, Manchester",
      message:
        "Excellent service! Our office SIM-enabled intercom system works perfectly. Quick installation and very friendly staff.",
      image: "/testimonials/amelia.jpg",
    },
    {
      name: "James Wilson",
      role: "Property Manager, Birmingham",
      message:
        "Highly reliable  intercom sim cards . The installation team were thorough and explained everything clearly.",
      image: "/testimonials/james.jpg",
    },
    {
      name: "Emily Davies",
      role: "Residential Client, Bristol",
      message:
        "From consultation to setup, everything was smooth. Very happy with the GSM intercom system  definitely recommend.",
      image: "/testimonials/emily.jpg",
    },
  ];

  return (
    <section className="max__width section__top ">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="title text-3xl md:text-4xl font-bold">
          What Our Clients Say
        </h2>
        <p className="para mt-4 text-gray-700">
          Hear from our clients across the UK about our professional GSM
          intercom systems, SIM-enabled intercom solutions, and automated gate
          installations. Our Works Gallery projects showcase high-quality,
          reliable, and secure access control solutions for homes and
          businesses.
        </p>
      </div>

      {/* Marquee */}
      <Marquee pauseOnHover gradient={true} speed={50} autoFill gradientColor="#fff" >
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex-0 w-72 md:w-[40vw] xl:w-[20vw] 2xl:w-[18vw] h-full bg-white p-6 rounded-xl border border-black/10 mx-4"
          >
            <p className="text-sm mb-4 italic">"{t.message}"</p>
            <div className="flex items-center gap-4">
         
              <div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
