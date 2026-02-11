import React from "react";
import Navbar from "../_components/Navbar/Navbar";
import Image from "next/image";
import SimCards from "../_components/Home/SimCards";
import Testimonials from "../_components/Home/Review";
import ContactUs from "../_components/Home/ContactUs";
import Benefits from "./Benefits";
import Footer from "../_components/Footer/Footer";
import Link from "next/link";

export const metadata = {
  title: "Intercom SIM Cards | GSM SIMs for Gate & Door Entry Systems",

  description:
    "Dedicated GSM SIM cards for intercom systems. Perfect for gates, doors & access control. Easy setup, reliable connection, flexible plans. Order online today.",

  keywords: [
    "intercom SIM cards",
    "GSM SIM for intercoms",
    "gate intercom SIM card",
    "door entry system SIM",
    "access control GSM SIM",
    "intercom connectivity",
    "GSM SIM for gates",
    "door phone SIM card",
    "intercom system SIM UK",
    "wireless intercom SIM",
    "GSM access control SIM",
    "entry system SIM card",
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
    canonical: "https://intercomsimcards.co.uk/intercom-sim-cards",
  },

  openGraph: {
    title: "Intercom SIM Cards | Dedicated GSM SIMs for Access Control",
    description:
      "Specialised GSM SIM cards built for intercom systems. Reliable connectivity for gate intercoms, door entry units, and access control systems. Simple online ordering, UK delivery, and expert support.",
    url: "https://intercomsimcards.co.uk/intercom-sim-cards",
    siteName: "Intercom SIM Cards",
    images: [
      {
        url: "https://intercomsimcards.co.uk/og-image-intercom-sims.jpg",
        width: 1200,
        height: 630,
        alt: "Intercom SIM Cards for Gate and Door Entry Systems",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Intercom SIM Cards | GSM SIMs for Gate & Door Systems",
    description:
      "Dedicated GSM SIM cards for intercom systems. Perfect for gates, doors & access control. Easy setup, reliable connection, flexible plans.",
    images: ["https://intercomsimcards.co.uk/og-image-intercom-sims.jpg"],
  },

  category: "Telecommunications",
};

const Page = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <div className="relative  h-[80vh] md:h-[60vh]">
        {/* Background Image */}
        <Image
          src="/gallery/intercom SIM 6.webp"
          alt="Intercom SIM cards for gate and access control systems"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center  pt-[15vh] px-5 lg:px-0 ">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="title !text-white mb-4">
              All About Intercom SIM Cards
            </h1>
            <p className="subtitle ">
              Intercom SIM cards provide reliable, secure, and high-performance
              connectivity for intercom and gate access systems. Designed for
              residential and commercial use, they ensure stable voice and data
              communication, seamless platform integration, and consistent
              network coverage for modern smart entry solutions.
            </p>

            <div className="flex justify-center mt-10">
              {/* <button className="btn__sytle ">Call Now</button> */}
              <Link href="/contact">
                <button className="btn__sytle ">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div className=" max__width ">
        <SimCards />
        <Testimonials />
        <Benefits />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
