import React from "react";

const KeyBenifits = () => {
  return (
    <div className="section__top">
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <h2 className="title">
          Key Benefits of Gate SIM Cards for Intercom & Access Control Systems
        </h2>
        <p className="para mt-4">
          Gate SIM cards are specifically designed for intercom systems, and dial-to-open access control solutions. They
          provide reliable voice and data connectivity, eliminate the need for
          manual top-ups, and ensure uninterrupted remote gate operation. With
          secure network performance and consistent coverage, Gate SIM cards
          offer a dependable solution for residential and small commercial
          access control systems.
        </p>
      </div>
      <section className="px-5 md:px-[8%]  bg-white">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="card__title mb-2">
              Reliable Intercom Connectivity
            </h3>
            <p className="para">
              Ensures consistent voice and data communication for intercom and
              gate access systems, even in remote locations.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="card__title mb-2">
              No Top-Ups or Interruptions
            </h3>
            <p className="para">
              Purpose-built Gate SIM cards eliminate the need for manual
              top-ups, keeping your gate systems operational at all times.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="card__title mb-2">
              Secure Remote Gate Control
            </h3>
            <p className="para">
              Allows property owners to open and manage gates remotely using
              secure intercom and access control technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyBenifits;
