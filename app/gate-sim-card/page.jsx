import React from "react";
import Navbar from "../_components/Navbar/Navbar";
import GateSimOverview from "./GateSimOverview";
import KeyBenifits from "./KeyBenifits";
import UseCases from "./UseCases";
import CTA from "../_components/Home/CTA";
import Footer from "../_components/Footer/Footer";

export const metadata = {
  title: "Gate SIM Cards | GSM SIMs for Electric Gates & Intercoms UK",

  description:
    "Reliable GSM SIM cards for electric gates and gate intercoms. Low-cost plans, instant activation, UK coverage. Keep your gate access control connected 24/7.",

  keywords: [
    "gate SIM card",
    "electric gate SIM",
    "GSM gate SIM card",
    "gate intercom SIM",
    "automatic gate SIM",
    "gate access control SIM",
    "GSM SIM for gates",
    "electric gate GSM SIM",
    "gate opener SIM card",
    "sliding gate SIM",
    "swing gate SIM card",
    "gate controller SIM UK",
    "wireless gate SIM",
    "remote gate access SIM",
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
    canonical: "https://intercomsimcards.co.uk/gate-sim-card",
  },

  openGraph: {
    title: "Gate SIM Cards | Reliable GSM SIMs for Electric Gates UK",
    description:
      "Specialised GSM SIM cards designed for electric gates and gate intercom systems. Ensure uninterrupted access control with reliable UK network coverage, flexible monthly plans, and instant online activation. Perfect for residential, commercial, and industrial gate systems.",
    url: "https://intercomsimcards.co.uk/gate-sim-card",
    siteName: "Intercom SIM Cards",
    images: [
      {
        url: "https://intercomsimcards.co.uk/og-image-gate-sim.jpg",
        width: 1200,
        height: 630,
        alt: "GSM SIM Cards for Electric Gates and Gate Intercoms",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gate SIM Cards | GSM SIMs for Electric Gates UK",
    description:
      "Reliable GSM SIM cards for electric gates and gate intercoms. Low-cost plans, instant activation, UK coverage. Keep your gate access control connected.",
    images: ["https://intercomsimcards.co.uk/og-image-gate-sim.jpg"],
  },

  category: "Telecommunications",

  other: {
    "product:category": "Gate Access Control",
    "product:availability": "in stock",
    "product:condition": "new",
  },
};

const Page = () => {
  return (
    <main>
      <nav className="absolute  top-0 w-full z-50">
        <Navbar />
      </nav>

      <section className="relative w-full h-[60vh] md:h-[70vh] pt-[15vh]">
        <img
          src="/gate-photos/image/Gate/GateSim.webp"
          alt="Gate SIM cards for intercom and dial to open gate access systems"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Gate SIM Cards for Intercom & Dial-to-Open Access Systems
            </h1>
            <p className="text-sm md:text-lg text-gray-200">
              High-reliability Gate SIM cards designed for intercom systems, and access control solutions. Always connected,
              secure, and built specifically for remote gate operation.
            </p>
          </div>
        </div>
      </section>

      <div>
        <GateSimOverview />
        <KeyBenifits/>
        <CTA/>
        <UseCases/>
        <Footer/>
      </div>
    </main>
  );
};

export default Page;
