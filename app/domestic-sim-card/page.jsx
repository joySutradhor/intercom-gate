import React from "react";
import Navbar from "../_components/Navbar/Navbar";
import DomesticSimOverview from "./DomesticSimOverview";
import KeyBenefitsDomestic from "./KeyBenefitsDomestic";
import CTA from "../_components/Home/CTA";
import UseCasesDomestic from "./UseCasesDomestic";
import Footer from "../_components/Footer/Footer";

export const metadata = {
  title: "Domestic SIM Cards | Residential Gate & Door Entry SIMs UK",

  description:
    "Affordable GSM SIM cards for home gates, domestic intercoms & residential door entry systems. Simple setup, reliable UK network, flexible plans from £3.50/month.",

  keywords: [
    "domestic SIM card",
    "residential intercom SIM",
    "home gate SIM card",
    "domestic gate SIM",
    "residential door entry SIM",
    "home intercom SIM UK",
    "domestic GSM SIM",
    "house gate SIM card",
    "residential access control SIM",
    "home security SIM",
    "domestic door phone SIM",
    "residential gate opener SIM",
    "home entry system SIM",
    "affordable domestic SIM",
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
    canonical: "https://intercomsimcards.co.uk/domestic-sim-card",
  },

  openGraph: {
    title: "Domestic SIM Cards | Home Gate & Intercom SIMs for UK Residences",
    description:
      "Cost-effective GSM SIM cards tailored for domestic use. Perfect for residential gates, home intercoms, and door entry systems. Enjoy hassle-free activation, reliable connectivity, and budget-friendly monthly plans starting from just £3.50. Ideal for homeowners seeking simple, dependable access control.",
    url: "https://intercomsimcards.co.uk/domestic-sim-card",
    siteName: "Intercom SIM Cards",
    images: [
      {
        url: "https://intercomsimcards.co.uk/og-image-domestic-sim.jpg",
        width: 1200,
        height: 630,
        alt: "Domestic SIM Cards for Residential Gates and Home Intercoms",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Domestic SIM Cards | Home Gate & Intercom SIMs UK",
    description:
      "Affordable GSM SIM cards for home gates, domestic intercoms & residential door entry. Simple setup, reliable UK network, flexible plans from £3.50/month.",
    images: ["https://intercomsimcards.co.uk/og-image-domestic-sim.jpg"],
  },

  category: "Telecommunications",

  other: {
    "product:category": "Residential Access Control",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:price:currency": "GBP",
    "product:price:amount": "3.50",
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
          src="/gate-photos/image/Domestic/DomesticSim5.webp"
          alt="Gate SIM cards for intercom and dial to open gate access systems"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Domestic SIM Cards for Residential Intercom & Home Access Systems
            </h1>
            <p className="text-sm md:text-lg text-gray-200">
              Our Domestic SIM cards are designed specifically for UK
              homeowners, providing reliable, always-on connectivity for single
              residential intercoms, smart gates, and home access systems. Enjoy
              secure remote control, simple monthly billing, and seamless
              integration with modern residential intercom devices.
            </p>
          </div>
        </div>
      </section>

      <div>
        <DomesticSimOverview/>
        <KeyBenefitsDomestic/>
        <CTA/>
        <UseCasesDomestic/>
        <Footer/>
      </div>
    </main>
  );
};

export default Page;
