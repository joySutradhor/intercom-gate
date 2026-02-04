import React from "react";
import Navbar from "../_components/Navbar/Navbar";
import GateSimOverview from "./GateSimOverview";
import KeyBenifits from "./KeyBenifits";
import UseCases from "./UseCases";
import CTA from "../_components/Home/CTA";
import Footer from "../_components/Footer/Footer";

const Page = () => {
  return (
    <main>
      <nav className="absolute  top-0 w-full z-50">
        <Navbar />
      </nav>

      <section className="relative w-full h-[60vh] md:h-[70vh] pt-[15vh]">
        <img
          src="/gate-photos/image/Gate/GateSim.webp"
          alt="Gate SIM cards for intercom and dial to open gate access systems"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Gate SIM Cards for Intercom & Dial-to-Open Access Systems
            </h1>
            <p className="text-sm md:text-lg text-gray-200">
              High-reliability Gate SIM cards designed for intercom systems, and access control solutions. Always connected,
              secure, and built specifically for remote gate operation.
            </p>
          </div>
        </div>
      </section>

      <div>
        <GateSimOverview />
        <KeyBenifits/>
        <CTA/>
        <UseCases/>
        <Footer/>
      </div>
    </main>
  );
};

export default Page;
