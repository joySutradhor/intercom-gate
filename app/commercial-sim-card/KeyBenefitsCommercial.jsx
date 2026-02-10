import React from "react";

const KeyBenefitsCommercial = () => {
  return (
    <div className="section__top max__width">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <h2 className="title">
          Key Benefits of Commercial SIM Cards for UK Offices & Multi-Unit Properties
        </h2>
        <p className="para mt-4">
          Commercial SIM cards are designed specifically for businesses, apartment
          blocks, and multi-unit residential properties in the UK. They provide
          reliable connectivity for intercoms, smart gates, and access control
          systems across multiple units. With secure network coverage and scalable
          connectivity, these SIM cards make remote access management simple,
          safe, and efficient for property managers and business owners.
        </p>
      </div>

      {/* Benefits Grid */}
      <section className="lg:px-[8%] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 lg:gap-8">
          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="card__title mb-2">Reliable Multi-Unit Connectivity</h3>
            <p className="para">
              Ensures stable voice and data communication for commercial intercoms and access control systems across offices and
              apartment blocks.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="card__title mb-2">Scalable & Always-On Service</h3>
            <p className="para">
              Commercial SIM cards provide uninterrupted connectivity for multiple
              units, eliminating the need for manual top-ups and supporting large
              residential or commercial properties.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="card__title mb-2">Secure Remote Management</h3>
            <p className="para">
              Property managers and business owners can remotely control intercoms
              and gate systems confidently, using secure, reliable, and scalable
              connectivity for all units.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyBenefitsCommercial;
