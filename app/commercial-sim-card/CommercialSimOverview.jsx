import Image from "next/image";
import React from "react";

const CommercialSimOverview = () => {
  return (
    <main className="max__width section__top">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-6xl mx-auto">
        <h2 className="title">
          What Is a Commercial SIM Card & Who Should Use It?
        </h2>
        <p className="para mt-4">
          A Commercial SIM card is a dedicated SIM solution for multi-unit
          properties, offices, apartment blocks, and UK businesses. It provides
          reliable, always-on connectivity for intercoms and
          access control systems. Perfect for property managers, building
          owners, and businesses needing secure, scalable remote access
          solutions across multiple units.
        </p>
      </div>

      {/* Content Area */}
      <div>
        <section className="lg:px-[8%] bg-white">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Text Card */}
            <div className="bg-gray-100 rounded-xl p-5 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Is a Commercial SIM Card?
              </h2>
              <p className="para">
                Commercial SIM cards are specifically designed for offices,
                apartment complexes, and multi-unit residential or commercial
                properties. Unlike standard SIMs, they offer stable, secure, and
                high-performance connectivity, enabling property managers and
                business owners to control intercoms and
                access systems remotely across multiple units.
              </p>
            </div>

            {/* Image */}
            <div>
              <Image
                src="/gate-photos/image/Commercial/CommercialSIM6.webp"
                height={1000}
                width={1000}
                alt="Commercial SIM cards for UK offices and multi-unit properties"
                className="h-[40vh] object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 h-full gap-10 mt-10">
            {/* Image */}
            <div>
              <Image
                src="/gate-photos/image/Commercial/CommercialSIM7.webp"
                height={1000}
                width={1000}
                alt="Commercial SIM cards for UK multi-unit intercom systems"
                className="h-[45vh] object-cover rounded-2xl"
              />
            </div>

            {/* Who Should Use */}
            <div className="bg-gray-100 rounded-xl p-5 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">
                Who Should Use a Commercial SIM Card?
              </h2>
              <div className="space-y-2.5">
                {[
                  "Property managers of apartment blocks or multi-unit buildings",
                  "UK businesses with office intercom or automated gate systems",
                  "Building owners needing reliable, secure remote access for multiple units",
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

export default CommercialSimOverview;
