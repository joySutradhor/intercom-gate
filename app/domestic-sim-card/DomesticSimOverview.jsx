import Image from "next/image";
import React from "react";

const DomesticSimOverview = () => {
  return (
    <main className="max__width section__top">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-6xl mx-auto">
        <h2 className="title">
          What Is a Domestic SIM Card & Who Should Use It?
        </h2>
        <p className="para mt-4">
          A Domestic SIM card is a dedicated SIM solution for single residential
          intercom and smart home access systems in the UK. It provides
          reliable voice and data connectivity, secure remote gate and door
          access, and seamless integration with modern intercom devices.
          Perfect for UK homeowners looking for a hassle-free, always-on
          solution for their home entry systems.
        </p>
      </div>

      {/* Content Area */}
      <div>
        <section className="lg:px-[8%] bg-white">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Text Card */}
            <div className="bg-gray-100 rounded-xl p-5 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Is a Domestic SIM Card?
              </h2>
              <p className="para">
                Domestic SIM cards are specifically designed for single-family
                homes and residential properties. Unlike standard SIMs, they
                deliver stable, high-reliability connectivity for home intercoms
                and smart gates, allowing homeowners to manage access remotely
                and securely from their phone or tablet.
              </p>
            </div>

            {/* Image */}
            <div>
              <Image
                src="/gate-photos/image/Domestic/DomesticSim3.webp"
                height={1000}
                width={1000}
                alt="Domestic SIM cards for UK homes"
                className="h-[40vh] object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 h-full gap-10 mt-10">
            {/* Image */}
            <div>
              <Image
                src="/gate-photos/image/Domestic/DomesticSim4.webp"
                height={1000}
                width={1000}
                alt="Domestic SIM cards for home intercom systems"
                className="h-[45vh] object-cover rounded-2xl"
              />
            </div>

            {/* Who Should Use */}
            <div className="bg-gray-100 rounded-xl p-5 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">
                Who Should Use a Domestic SIM Card?
              </h2>
              <div className="space-y-2.5">
                {[
                  "Homeowners with single-family intercom or smart gate systems",
                  "UK residential properties requiring secure remote access",
                  "Small private driveways and gated homes needing reliable connectivity",
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl">
                    <p className="para">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DomesticSimOverview;
