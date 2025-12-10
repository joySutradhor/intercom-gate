"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const WorksModalContent = () => {
  const [activeStep, setActiveStep] = useState(0);
  // https://i.pinimg.com/1200x/76/fa/60/76fa600426812ba07bb83a9fcc832194.jpg

  const steps = [
    {
      id: 1,
      title: "Order Your SIM – Secure Delivery",
      points: [
        "Place your order on our website.",
        "Your SIM arrives by post, but it only activates when YOU confirm online.",
        "This protects you if it’s delayed or goes missing during delivery.",
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
      title: "Months of Smart Usage Monitoring",
      points: [
        "For the first three months, your SIM runs at the agreed rate.",
        "This allows us to collect real usage data — not estimates.",
      ],
    },
    {
      id: 4,
      title: "We Place You on the Best Package Automatically",
      points: [
        "After the assessment period, we review your usage.",
        "If you're already on the right plan, nothing changes.",
        "If we can save you money — we will.",
      ],
    },
    {
      id: 5,
      title: "Total Transparency",
      points: [
        "You’ll always be notified before any package changes.",
        "No surprises. No hidden fees. Just a plan tailored to your intercom system.",
      ],
    },
    {
      id: 6,
      title: "Your Usage Review (Existing Content)",
      points: [
        "Once your SIM is installed, we allow a 3-month usage period, charged at the rate stated.",
        "This helps calculate your average consumption and ensures you get the most suitable package.",
        "If any changes are required, you will always be informed in advance.",
      ],
    },
  ];

  return (
    <div className="xl:flex justify-center items-center h-screen overflow-y-auto ">
      <div className=" ">
        <div className="max-w-7xl mx-auto p-5 xl:p-10 bg-white/80 xl:rounded-2xl ">
          {/* Header */}
          <div className="xl:flex justify-between mb-10 ">
            <div className=" border-b pb-3 border-black/10 max-w-4xl">
              <h2 className="subTitle ">
                How It Works Fast, Secure & Built Around Your Needs
              </h2>
              <p className="para py-2">
                Once your SIM is installed, we allow a 3-month usage period,
                charged at the rate stated. This gives us enough data to
                calculate your average consumption and ensure you are on the
                most suitable package.
              </p>
              <p className="para">
                If any changes to your package are required, you will always be
                informed in advance.
              </p>
            </div>
            <div className="mt-5 xl:mt-0">
              <Link href="/">
                <button className="btn__sytle">
                  Back to Home
                  <span>
                    {" "}
                    <MdOutlineArrowOutward />{" "}
                  </span>
                </button>
              </Link>
              {/* <button
                onClick={() => seIntercom(true)}
                className="btn__sytle mt-5"
              >
                Get Sim Card
                <span>
                  {" "}
                  <MdOutlineArrowOutward />{" "}
                </span>
              </button> */}
            </div>
          </div>

          {/* TAB Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default WorksModalContent;
