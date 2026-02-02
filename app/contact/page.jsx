import Footer from "../_components/Footer/Footer";
import ContactUs from "../_components/Home/ContactUs";
import Navbar from "../_components/Navbar/Navbar";

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
