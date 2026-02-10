import React from "react";
import Navbar from "../_components/Navbar/Navbar";

import CTA from "../_components/Home/CTA";
import CommercialSimOverview from "./CommercialSimOverview";
import KeyBenefitsCommercial from "./KeyBenefitsCommercial";
import UseCasesCommercial from "./UseCasesCommercial";
import Footer from "../_components/Footer/Footer";

const Page = () => {
  return (
    <main>
      <nav className="absolute  top-0 w-full z-50">
        <Navbar />
      </nav>

      <section className="relative w-full h-[70vh] md:h-[70vh] pt-[15vh]">
        <img
          src="/gate-photos/image/Commercial/CommercialSIM.webp"
          alt="Gate SIM cards for intercom and dial to open gate access systems"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Commercial SIM Cards for Offices, Flats & Multi-Unit Access
              Systems
            </h1>
            <p className="text-sm md:text-lg text-gray-200">
              Our Commercial SIM cards are tailored for UK businesses, apartment
              blocks, and multi-unit properties, providing reliable, always-on
              connectivity for intercom systems and access
              control solutions. Enjoy secure remote management, scalable
              connectivity for multiple units, and seamless integration with
              modern commercial intercom and entry systems.
            </p>
          </div>
        </div>
      </section>

      <div>
        <CommercialSimOverview />
        <KeyBenefitsCommercial />
        <CTA />
        <UseCasesCommercial />
        <Footer/>
      </div>
    </main>
  );
};

export default Page;
