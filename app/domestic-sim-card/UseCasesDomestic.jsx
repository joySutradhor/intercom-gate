import Image from "next/image";
import React from "react";

const UseCasesDomestic = () => {
  return (
    <div className="section__top max__width">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <h2 className="title">
          Domestic SIM Compatibility, Use Cases & Why Our SIM Cards Are Trusted
        </h2>
        <p className="para mt-4">
          Our Domestic SIM cards are designed for UK single-family homes, providing
          reliable connectivity for home intercoms, smart gates, and residential
          access control systems. Perfect for homeowners, they ensure stable UK
          network coverage, secure remote access, and uninterrupted operation,
          making them a trusted choice for modern residential properties.
        </p>
      </div>

      {/* Use Cases Section */}
      <div className="px-5 md:px-[8%] py-20 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          
          {/* How It Works Card */}
          <section className="bg-white p-8 rounded-2xl border border-black/10 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Does a Domestic SIM Card Work?
            </h2>
            <ol className="space-y-3 text-gray-600 flex-1">
              <li>1. Insert the Domestic SIM card into your home intercom or smart gate system.</li>
              <li>2. The system connects securely to the UK mobile network.</li>
              <li>3. Visitors or delivery personnel can call the intercom to request access.</li>
              <li>4. Homeowners receive the call and can remotely open the gate or door using their phone or tablet.</li>
            </ol>
          </section>

          {/* Image Card */}
          <div className="flex items-center justify-center">
            <Image
              src="/gate-photos/image/Domestic/DomesticSim2.webp"
              alt="Domestic SIM card use cases for UK homes"
              height={1000}
              width={1000}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* Compatibility & Use Cases Card */}
          <section className="bg-white p-8 rounded-2xl border border-black/10 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Domestic SIM Compatibility & Use Cases
            </h2>
            <p className="text-gray-600 flex-1">
              Domestic SIM cards are compatible with most residential intercoms,
              smart gates, and home access control devices. They are widely used
              across UK single-family homes, private driveways, and gated
              residential properties, providing secure remote access, uninterrupted
              service, and seamless integration with modern home entry systems.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UseCasesDomestic;
