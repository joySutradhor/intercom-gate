import React from "react";
import Navbar from "../_components/Navbar/Navbar";
import DomesticSimOverview from "./DomesticSimOverview";
import KeyBenefitsDomestic from "./KeyBenefitsDomestic";
import CTA from "../_components/Home/CTA";
import UseCasesDomestic from "./UseCasesDomestic";
import Footer from "../_components/Footer/Footer";


const Page = () => {
  return (
    <main>
      <nav className="absolute  top-0 w-full z-50">
        <Navbar />
      </nav>

      <section className="relative w-full h-[60vh] md:h-[70vh] pt-[15vh]">
        <img
          src="/gate-photos/image/Domestic/DomesticSim5.webp"
          alt="Gate SIM cards for intercom and dial to open gate access systems"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Domestic SIM Cards for Residential Intercom & Home Access Systems
            </h1>
            <p className="text-sm md:text-lg text-gray-200">
              Our Domestic SIM cards are designed specifically for UK
              homeowners, providing reliable, always-on connectivity for single
              residential intercoms, smart gates, and home access systems. Enjoy
              secure remote control, simple monthly billing, and seamless
              integration with modern residential intercom devices.
            </p>
          </div>
        </div>
      </section>

      <div>
        <DomesticSimOverview/>
        <KeyBenefitsDomestic/>
        <CTA/>
        <UseCasesDomestic/>
        <Footer/>
      </div>
    </main>
  );
};

export default Page;
