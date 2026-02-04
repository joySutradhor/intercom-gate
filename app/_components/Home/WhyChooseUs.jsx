import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const whyChooseUsData = [
    {
      title: "Experienced Professionals",
      description:
        "Our team has hands-on experience installing and maintaining intercom and automated gate systems. We also work with a trusted network of experienced installers across the UK, allowing us to support customers in their local area. Please get in touch for further information.",
    },
   
    {
      title: "Safety & Compliance",
      description:
        "All installations are completed following UK safety standards, ensuring reliable performance and peace of mind.",
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden costs. We provide clear quotations and honest advice before starting any work.",
    },
    {
      title: "Ongoing Support",
      description:
        "Our service doesn’t stop after installation. We offer maintenance, upgrades, and fast support whenever you need it.",
    },
  ];

  return (
    <div className="max__width section__top">
      <div>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="title">Why Choose Us</h2>
          <p className="para mt-4">
            We provide reliable, secure, and modern intercom and gate automation
            solutions designed for both residential and commercial properties.
            From consultation to installation and ongoing support, we focus on
            quality, safety, and long-term performance.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <Image
              src="/banner.png"
              width={1000}
              height={1000}
              alt="GSM Intercom Sim Card"
              className="object-cover w-full h-[50vh] object-top  rounded-2xl"
            />
          </div>

          <div className=" grid md:grid-cols-2 gap-5">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 bg-gray-100 p-4 rounded-lg   "
              >
                {/* <span className="text-green-600 text-xl">✔</span> */}

                <div>
                  <h3 className="card__title">
                    {item.title}
                  </h3>
                  <p className="para mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
