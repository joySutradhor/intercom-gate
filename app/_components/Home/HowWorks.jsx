"use client"

import React, { useState } from "react";

const HowWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Order SIM (delivered inactive)",
      points: [
        "Order your intercom SIM online in just a few minutes.",
        "You will receive an email asking for direct debit details once filled in. The SIM card will be sent.",
        "Activate the SIM online only when you are ready, ensuring security and peace of mind during delivery.",
      ],
    },
    {
      id: 2,
      title: "Install the SIM & Start Using Your Intercom",
      points: [
        "Once activated and inserted into your intercom, your service starts immediately.",
        "No complicated setup — your intercom works exactly as it should.",
      ],
    },

    {
      id: 3,
      title: "Activate online",
      points: [
        "Visit our website and click the “Activate SIM” button.",
        "Fill in the activation form with your phone number and email address.",
        "Our team activates your SIM online and notifies you once it’s live.",
      ],
    },

    {
      id: 4,
      title: "It works — we monitor and place you on the best package",
      points: [
        "Your SIM works normally while we monitor real usage in the background.",
        "After the initial period, we review your data and move you to the most cost-effective package.",
      ],
    },
  ];

  return (
    <div className="max__width section__top bg-gray-100 py-[15vh] rounded-2xl">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="title">
          How It Works Fast, Secure & Built Around Your Needs
        </h2>
        <p className="para mt-5">
          Once your SIM is installed and activated, it runs on your chosen
          package for an initial 3-month period.
        </p>
        <p className="para mt-2">
          We monitor usage to ensure you’re on the most suitable and
          cost-effective plan. If any changes are needed, we’ll always contact
          you first.
        </p>
      </div>

      {/* TAB Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto  rounded-2xl">
        {/* LEFT SIDE – TABS */}
        <div className="space-y-2">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`w-full text-left p-4 rounded-lg border cursor-pointer transition-all
                    ${
                      activeStep === index
                        ? "bg-[#222] text-white border-black"
                        : "bg-white border-black/10 hover:bg-gray-100"
                    }
                  `}
            >
              <span className="font-semibold text-base">
                {step.id}. {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT SIDE – CONTENT */}
        <div className="md:col-span-2 bg-white  rounded-lg p-6 ">
          <h3 className="font-bold text-2xl xl:text-3xl mb-4">
            {steps[activeStep].title}
          </h3>

          <ul className="space-y-2 leading-relaxed">
            {steps[activeStep].points.map((point, i) => (
              <li key={i} className="text-black/80 font-medium ">
                {i + 1}. {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
