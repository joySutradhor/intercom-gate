import Image from "next/image";
import React from "react";

const UseCases = () => {
  return (
    <div className="section__top max__width">
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <h2 className="title">
          Gate SIM Compatibility, Use Cases & Why Our SIM Cards Are Trusted
        </h2>
        <p className="para mt-4">
          Our Gate SIM cards are fully compatible with most GSM intercom
          systems, dial-to-open gate controllers, and modern access control
          solutions. They are widely used across private driveways, residential
          estates, small commercial premises, and secure entry points where
          reliable remote gate operation is essential. Designed specifically for
          intercom and gate access systems, our Gate SIM cards deliver
          consistent UK network coverage, dependable connectivity, and flexible
          contract options—making them a trusted choice for secure,
          uninterrupted access control performance.
        </p>
      </div>

      {/* use cases seciton  */}
      <div className=" lg:px-[8%] py-10 xl:py-20 xl:bg-gray-50">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 xl:gap-10 items-stretch">
          {/* How It Works Card */}
          <section className="bg-white p-5 xl:p-8 rounded-2xl border border-black/10 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Does a Gate SIM Card Work?
            </h2>
            <ol className="space-y-3 text-gray-600 flex-1">
              <li>
                1. Insert the Gate SIM card into your intercom or gate
                controller.
              </li>
              <li>2. The system connects securely to the mobile network.</li>
              <li>3. Visitors call the intercom to request access.</li>
              <li>
                4. You receive the call and remotely open the gate using your
                phone or access control system.
              </li>
            </ol>
          </section>

          {/* Image Card */}
          <div className=" flex items-center justify-center">
            <Image
              src="/gate-photos/image/Commercial/CommercialSIM2.webp"
              alt="Use cases for Intercom SIM cards"
              height={1000}
              width={1000}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* Compatibility & Use Cases Card */}
          <section className="bg-white p-8 rounded-2xl border border-black/10 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gate SIM Compatibility & Use Cases
            </h2>
            <p className="text-gray-600 flex-1">
              Gate SIM cards are compatible with most GSM intercoms,
              dial-to-open gate controllers, and access control systems. They
              are commonly used in private driveways, residential estates, small
              business premises, and secure entry points requiring dependable
              remote access.
            </p>
          </section>
        </div>
      </div>

      <div />
    </div>
  );
};

export default UseCases;
