import React from "react";

const KeyBenefitsDomestic = () => {
  return (
    <div className="section__top max__width">
      {/* Section Header */}
      <div className="text-center mb-16 lg:max-w-5xl mx-auto">
        <h2 className="title">
          Key Benefits of Domestic SIM Cards for UK Residential Intercoms
        </h2>
        <p className="para mt-4">
          Domestic SIM cards are designed specifically for single-family homes
          and UK residential properties. They provide reliable connectivity for
          home intercoms, smart gates, and access control systems. With secure
          network coverage and uninterrupted service, these SIM cards make
          remote home access simple, safe, and hassle-free.
        </p>
      </div>

      {/* Benefits Grid */}
      <section className="lg:px-[8%] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 lg:gap-8">
          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="card__title mb-2">Reliable Home Connectivity</h3>
            <p className="para">
              Ensures stable voice and data communication for residential
              intercoms and smart gate systems across UK homes.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="card__title mb-2">No Top-Ups or Interruptions</h3>
            <p className="para">
              Designed for hassle-free monthly service, Domestic SIM cards keep
              your home intercom and gate systems always connected without
              manual top-ups.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="card__title mb-2">Secure Remote Access</h3>
            <p className="para">
              Control your home intercom and smart gate systems remotely with
              confidence, using secure and reliable connectivity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyBenefitsDomestic;
