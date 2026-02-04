import Image from "next/image";
import React from "react";

const UseCasesCommercial = () => {
  return (
    <div className="section__top max__width">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <h2 className="title">
          Commercial SIM Compatibility, Use Cases & Why Our SIM Cards Are Trusted
        </h2>
        <p className="para mt-4">
          Our Commercial SIM cards are designed for UK businesses, apartment blocks,
          offices, and multi-unit properties. They provide reliable connectivity for
          intercom systems, smart gates, and access control solutions. Ideal for
          property managers and business owners, they ensure secure, uninterrupted
          remote access and seamless operation across multiple units.
        </p>
      </div>

      {/* Use Cases Section */}
      <div className="px-5 md:px-[8%] py-20 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">

          {/* How It Works Card */}
          <section className="bg-white p-8 rounded-2xl border border-black/10 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Does a Commercial SIM Card Work?
            </h2>
            <ol className="space-y-3 text-gray-600 flex-1">
              <li>
                1. Insert the Commercial SIM card into your office intercom, multi-unit system, or automated gate controller.
              </li>
              <li>
                2. The system connects securely to the UK mobile network for all units.
              </li>
              <li>
                3. Visitors, delivery personnel, or residents can call the intercom to request access.
              </li>
              <li>
                4. Property managers or business owners receive the call and can remotely grant access securely across multiple units.
              </li>
            </ol>
          </section>

          {/* Image Card */}
          <div className="flex items-center justify-center">
            <Image
              src="/gate-photos/image/Commercial/CommercialSIM4.webp"
              alt="Commercial SIM card use cases for UK offices and apartment blocks"
              height={1000}
              width={1000}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* Compatibility & Use Cases Card */}
          <section className="bg-white p-8 rounded-2xl border border-black/10 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Commercial SIM Compatibility & Use Cases
            </h2>
            <p className="text-gray-600 flex-1">
              Commercial SIM cards are compatible with most multi-unit intercoms and access control devices. Widely used across UK
              offices, apartment complexes, and commercial properties, they deliver
              secure remote access, uninterrupted service, and seamless integration
              with modern multi-unit entry systems.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default UseCasesCommercial;
