import React from "react";
import Navbar from "../_components/Navbar/Navbar";

import CTA from "../_components/Home/CTA";
import CommercialSimOverview from "./CommercialSimOverview";
import KeyBenefitsCommercial from "./KeyBenefitsCommercial";
import UseCasesCommercial from "./UseCasesCommercial";
import Footer from "../_components/Footer/Footer";

export const metadata = {
  title: "Commercial SIM Cards | Business Gate & Intercom SIMs UK",

  description:
    "Enterprise-grade GSM SIM cards for commercial gates, business intercoms & multi-site access control. Reliable connectivity, bulk ordering, priority UK support.",

  keywords: [
    "commercial SIM card",
    "business intercom SIM",
    "commercial gate SIM",
    "enterprise GSM SIM",
    "business door entry SIM",
    "commercial access control SIM",
    "multi-site intercom SIM",
    "business gate SIM card UK",
    "corporate intercom SIM",
    "commercial property SIM",
    "industrial gate SIM",
    "business premises SIM card",
    "bulk intercom SIM",
    "commercial GSM connectivity",
  ],

  authors: [{ name: "Intercom SIM Cards" }],
  creator: "Intercom SIM Cards",
  publisher: "Intercom SIM Cards",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://intercomsimcards.co.uk/commercial-sim-card",
  },

  openGraph: {
    title: "Commercial SIM Cards | Enterprise Gate & Intercom Solutions UK",
    description:
      "Professional GSM SIM cards designed for commercial and industrial applications. Ideal for business gates, office intercoms, warehouses, and multi-site access control systems. Enjoy enhanced reliability, bulk discount options, dedicated account management, and priority technical support. Trusted by businesses across the UK.",
    url: "https://intercomsimcards.co.uk/commercial-sim-card",
    siteName: "Intercom SIM Cards",
    images: [
      {
        url: "https://intercomsimcards.co.uk/og-image-commercial-sim.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial SIM Cards for Business Gates and Enterprise Intercoms",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial SIM Cards | Business Gate & Intercom SIMs UK",
    description:
      "Enterprise-grade GSM SIM cards for commercial gates, business intercoms & multi-site access control. Reliable connectivity, bulk ordering, priority support.",
    images: ["https://intercomsimcards.co.uk/og-image-commercial-sim.jpg"],
  },

  category: "Telecommunications",

  other: {
    "product:category": "Commercial Access Control",
    "product:availability": "in stock",
    "product:condition": "new",
    "business:contact_data:street_address": "",
    "business:contact_data:locality": "United Kingdom",
    "business:contact_data:country_name": "UK",
  },
};

const Page = () => {
  return (
    <main>
      <nav className="absolute  top-0 w-full z-50">
        <Navbar />
      </nav>

      <section className="relative w-full h-[70vh] md:h-[70vh] pt-[15vh]">
        <img
          src="/gate-photos/image/Commercial/CommercialSIM.webp"
          alt="Gate SIM cards for intercom and dial to open gate access systems"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Commercial SIM Cards for Offices, Flats & Multi-Unit Access
              Systems
            </h1>
            <p className="text-sm md:text-lg text-gray-200">
              Our Commercial SIM cards are tailored for UK businesses, apartment
              blocks, and multi-unit properties, providing reliable, always-on
              connectivity for intercom systems and access control solutions.
              Enjoy secure remote management, scalable connectivity for multiple
              units, and seamless integration with modern commercial intercom
              and entry systems.
            </p>
          </div>
        </div>
      </section>

      <div>
        <CommercialSimOverview />
        <KeyBenefitsCommercial />
        <CTA />
        <UseCasesCommercial />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
