import Footer from "../_components/Footer/Footer";
import ContactUs from "../_components/Home/ContactUs";
import Navbar from "../_components/Navbar/Navbar";

export const metadata = {
  title: "Contact Us | Intercom SIM Cards UK Support",

  description:
    "Get in touch with our UK-based support team. Expert help for intercom SIM cards, activation, technical queries & orders. Fast, friendly customer service.",

  keywords: [
    "contact intercom SIM cards",
    "intercom SIM support",
    "UK SIM card support",
    "intercom SIM help",
    "customer service",
    "technical support intercom",
    "SIM card queries",
    "contact us UK",
    "intercom SIM assistance",
    "gate intercom support",
    "door entry SIM help",
    "SIM activation support",
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
    canonical: "https://intercomsimcards.co.uk/contact",
  },

  openGraph: {
    title: "Contact Intercom SIM Cards | UK Customer Support",
    description:
      "Need help with your intercom SIM card? Our UK-based support team is here to assist with activation, technical issues, orders, and general queries. Fast response times and expert guidance for all your gate and door entry system connectivity needs.",
    url: "https://intercomsimcards.co.uk/contact",
    siteName: "Intercom SIM Cards",
    images: [
      {
        url: "https://intercomsimcards.co.uk/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Intercom SIM Cards UK Support Team",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Intercom SIM Cards UK Support",
    description:
      "Get in touch with our UK-based support team. Expert help for intercom SIM cards, activation, technical queries & orders. Fast, friendly service.",
    images: ["https://intercomsimcards.co.uk/og-image-contact.jpg"],
  },

  category: "Telecommunications",
};

export default function ContactPage() {
  return (
    <main>
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <img
          src="/gallery/intercom SIM 9.webp"
          alt="Commercial SIM cards for offices, flats and multi-unit access systems in the UK"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Contact Our Commercial SIM & Intercom Experts
            </h1>
            <p className="text-sm md:text-lg text-gray-200">
              Get in touch with our team for expert advice on Commercial SIM
              cards, intercom systems, and secure access solutions for UK
              offices, apartment blocks, and multi-unit properties.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactUs />

      <Footer />
    </main>
  );
}
