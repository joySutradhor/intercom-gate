import Image from "next/image";
import React from "react";

const GateSimOverview = () => {
  return (
    <main className="max__width section__top">
      <div className="text-center mb-16 max-w-6xl mx-auto">
        <h2 className="title">What Is a Gate SIM Card & Who Should Use It?</h2>
        <p className="para mt-4">
          A Gate SIM card is a purpose-built SIM solution for intercom systems,
          dial-to-open gates, and access control devices. Designed for
          residential driveways, small commercial premises, and secure entry
          points, it ensures reliable voice and data connectivity, uninterrupted
          remote gate operation, and seamless integration with modern access
          control systems. Ideal for homeowners, property managers, and
          businesses needing secure, always-on access solutions.
        </p>
      </div>

      {/* content area  */}
      <div>
        <section className="px-5 md:px-[8%] bg-white">
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-gray-100 rounded-xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Is a Gate SIM Card?
              </h2>
              <p className="para">
                A Gate SIM card is a specialist SIM solution created for
                intercom and dial-to-open gate systems. Unlike standard mobile
                SIMs, Gate SIM cards are optimised for access control, ensuring
                reliable voice and data connectivity for remote gate opening,
                visitor communication, and secure property entry.
              </p>
            </div>
            <div>
              <Image
                src="/gate-photos/image/Gate/GateSim3.webp"
                height={1000}
                width={1000}
                alt="intercom sim cards overview"
                className="h-[40vh] object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 h-full gap-10 mt-10">
            <div>
              <Image
                src="/gate-photos/image/Gate/GateSim1.webp"
                height={1000}
                width={1000}
                alt="intercom sim cards overview"
                className="h-[45vh] object-cover rounded-2xl"
              />
            </div>

            <div className="bg-gray-100 rounded-xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">
                Who Should Use a Gate SIM Card?
              </h2>
              <div className="space-y-2.5">
                {[
                  "Automatic gate and barrier systems requiring remote access",
                  "Dial-to-open intercom devices for residential properties",
                  "Secure access control systems for small commercial sites",
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl ">
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

export default GateSimOverview;
