import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Benefits = () => {
  return (
    <section className="section__top">
      <div>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="title">Intercom SIM Card Benefits</h2>
          <p className="para mt-4">
            Our SIM cards are purpose-built for intercom and gate access
            systems, offering reliable connectivity, simple management, and
            dependable performance across residential and commercial
            environments.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gate SIM */}
        <div className="p-8 rounded-2xl border border-gray-200">
          <h3 className="card__title ">Gate SIM Benefits</h3>
          <ul className="space-y-2 para mt-5">
            <li>• Ideal for dial-to-open gate and entry systems</li>
            <li>• No top-ups required for uninterrupted operation</li>
            <li>• Reliable connectivity for remote gate control</li>
            <li>• 30-day rolling contract with no long-term commitment</li>
            <li>• Designed specifically for intercom usage</li>
          </ul>

          <Link
            href="/gate-sim-card"
            className="btn__sytle !inline-block  mt-6 cursor-pointer "
          >
            <button className="flex gap-x-1.5 items-center cursor-pointer">
              Know More <MdArrowOutward />
            </button>
          </Link>
        </div>

        {/* Domestic SIM */}
        <div className="p-8 rounded-2xl border border-gray-200">
          <h3 className="card__title ">Domestic SIM Benefits</h3>
          <ul className="space-y-2 para mt-5">
            <li>• Perfect for single residential properties</li>
            <li>• Stable voice and data connectivity for home intercoms</li>
            <li>• Simple, predictable monthly billing</li>
            <li>• Supports smart entry and remote access features</li>
            <li>• Easy setup with minimal maintenance</li>
          </ul>

          <Link
            href="/domestic-sim-card"
            className="btn__sytle !inline-block  mt-6 cursor-pointer "
          >
            <button className="flex gap-x-1.5 items-center cursor-pointer">
              Know More <MdArrowOutward />
            </button>
          </Link>
        </div>

        {/* Commercial SIM */}
        <div className="p-8 rounded-2xl border border-gray-200">
          <h3 className="card__title ">Commercial SIM Benefits</h3>
          <ul className="space-y-2 para mt-5">
            <li>• Ideal for flats, apartment blocks, and offices</li>
            <li>• Designed for high-usage and multi-user environments</li>
            <li>• Consistent connectivity across shared access points</li>
            <li>• Scalable solution for growing properties</li>
            <li>
              • Reliable performance for professional access control systems
            </li>
          </ul>

          <Link
            href="/commercial-sim-card"
            className="btn__sytle !inline-block  mt-6 cursor-pointer "
          >
            <button className="flex gap-x-1.5 items-center cursor-pointer">
              Know More <MdArrowOutward />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
