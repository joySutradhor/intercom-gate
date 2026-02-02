import React from "react";
import Navbar from "../_components/Navbar/Navbar";
import Image from "next/image";
import SimCards from "../_components/Home/SimCards";
import Testimonials from "../_components/Home/Review";
import ContactUs from "../_components/Home/ContactUs";
import Benefits from "./Benefits";
import Footer from "../_components/Footer/Footer";

const Page = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <div className="relative  h-[60vh] md:h-[60vh]">
        {/* Background Image */}
        <Image
          src="/gallery/intercom SIM 6.webp"
          alt="Intercom SIM cards for gate and access control systems"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center  pt-[15vh] ">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="title !text-white mb-4">
              All About Intercom SIM Cards
            </h3>
            <p className="subtitle ">
              Intercom SIM cards provide reliable, secure, and high-performance
              connectivity for intercom and gate access systems. Designed for
              residential and commercial use, they ensure stable voice and data
              communication, seamless platform integration, and consistent
              network coverage for modern smart entry solutions.
            </p>

            <div className="flex gap-x-2.5 justify-center mt-10">
                <button className="btn__sytle ">Call Now</button>
                <button className="btn__sytle ">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div className="section__top max__width ">
        <SimCards/>
        <Testimonials/>
        <Benefits/>
        <ContactUs/>
        <Footer/>
      </div>
    </div>
  );
};

export default Page;
