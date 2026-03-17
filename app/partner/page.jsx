"use client";
import React from "react";
import {
  FaMoneyBillWave,
  FaUsers,
  FaTools,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import Navbar from "../_components/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";
import Link from "next/link";

const Section = ({ title, des, children }) => (
  <section className="max-w-7xl mx-auto px-4 py-16">
    <div className="max-w-3xl mx-auto text-center mb-10">
      <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
      <p className="mt-3 text-base md:text-lg text-gray-600">{des}</p>
    </div>
    {children}
  </section>
);

export default function Page() {
  const features = [
    {
      icon: <FaMoneyBillWave />,
      title: "Earn Recurring Income",
      desc: "Receive £1.00 per active SIM per month and grow steady income over time.",
    },
    {
      icon: <FaUsers />,
      title: "Free Listing",
      desc: "Get listed on our platform so customers can easily find you.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Local Enquiries",
      desc: "Receive customer leads in your area for installation and repairs.",
    },
    {
      icon: <FaTools />,
      title: "We Handle SIMs",
      desc: "We manage activation, billing, and support so you focus on work.",
    },
  ];

  const steps = [
    "Apply to join the installer network",
    "Get approved and order SIM cards",
    "Install SIM in GSM intercom",
    "We manage SIM operations",
    "Earn monthly recurring income",
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white pt-[25vh] pb-[10vh]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Become an Approved Installer Partner
            </h1>
            <p className="text-gray-300 mb-6">
              Earn recurring income while receiving local intercom installation
              enquiries.
            </p>
            <Link href="/contact">
              <button className="bg-white cursor-pointer text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                Apply Now
              </button>
            </Link>
          </div>

          <img
            src="/partner.jpg"
            alt="installer"
            className="rounded-xl shadow-lg w-full h-[35vh] object-cover"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50">
        <Section
          title="Why Join Our Installer Network"
          des="Build a reliable income stream, attract local customers, and focus on installations while we handle the SIM management."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-4 text-black/80">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* INCOME */}
      <Section
        title="A Small Amount That Builds Over Time"
        des="Start with just a few active SIMs and build your way up—each one adds to your monthly income, helping you create a steady and reliable stream that grows naturally over time."
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[50, 125, 250, 500].map((num, i) => (
            <div key={i} className="p-6 border border-black/10 rounded-xl bg-white shadow-sm">
              <p className="text-lg font-medium">{num} SIMs</p>
              <p className="text-2xl font-bold mt-2">£{num}</p>
              <p className="text-gray-500 text-sm">per month</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INFO GRID */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* STEPS */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl md:text-2xl font-bold mb-2">How It Works</h2>
          <p className="text-gray-500 text-sm mb-6">
            A simple process to start earning recurring income from every
            installation.
          </p>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="min-w-[28px] h-[28px] flex items-center justify-center rounded-full bg-gray-100 font-semibold text-sm">
                  {i + 1}
                </span>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHO */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Who This Is For
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Ideal for professionals working with intercom, access, and security
            systems.
          </p>

          <div className="space-y-3">
            {[
              "Electric gate installers",
              "GSM intercom installers",
              "Security installers",
              "Electricians",
              "Access control engineers",
              "Service & maintenance companies",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-sm" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* INCOME SUMMARY */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Monthly Examples
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            See how quickly your earnings can grow as your active SIM base
            increases.
          </p>

          <div className="space-y-4">
            {[50, 125, 250, 500].map((num, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg"
              >
                <span className="text-gray-700 text-sm">
                  <strong>{num}</strong> SIMs
                </span>
                <span className="font-semibold text-black">£{num}/month</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white text-center py-[10vh] px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Start Earning Monthly Income Today
        </h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Join our installer network and turn every installation into recurring
          revenue.
        </p>
        <Link href="/contact">
          <button className="bg-white cursor-pointer text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
            Apply Now
          </button>
        </Link>
      </section>

      <Footer />
    </>
  );
}
