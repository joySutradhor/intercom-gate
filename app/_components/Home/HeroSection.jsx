"use client";

import Link from "next/link";
import { useState } from "react";

const HeroSection = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    // ✅ EMPTY CHECK FIRST
    if (!orderId.trim()) {
      setError("Please enter a valid Order ID");
      setOrder(null); // ⬅ clear previous result
      return;
    }

    setLoading(true);
    setError("");
    setOrder(null);

    try {
      const res = await fetch(`/api/emails/${orderId}`);
      const data = await res.json();

      if (!res.ok || !data?.data?.length) {
        throw new Error("Order not found");
      }

      setOrder(data.data[0]);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
      setOrderId(""); // optional: clear input after search
    }
  };

  

  return (
    <section>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          src="/intercom-video-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-20" />

        {/* Content */}
        <div className="relative z-40 h-full flex items-center justify-center px-[5%]">
          <div className="w-[60vw] mt-[15vh]">
            <div className="bg-white/70 hover:bg-white backdrop-blur-md rounded-2xl p-8 md:p-12 transition-all duration-300">
              <h1 className="ic__main__title text-center">
                GSM Intercom SIM Cards
              </h1>

              <div className="max-w-xl mx-auto text-center">
                <p className="ic__para mt-5 mb-4">
                  Welcome to Intercom SIM Cards — the simple and affordable way
                  to keep your intercom or gate entry system connected.
                </p>

                <p className="ic__para mb-6">
                  Reliable UK SIM solutions for gate intercoms, door entry
                  systems, and GSM access units.
                </p>

                {/* Search */}
                <div className="flex gap-3 mt-6 mb-4">
                  {/* <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Search by Order ID"
                    className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 px-5 outline-none"
                  /> */}

                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => {
                      setOrderId(e.target.value);
                      setError(""); // ⬅ clears error immediately
                      setOrder(null); // ⬅ prevents old result showing
                    }}
                    placeholder="Search by Order ID"
                    className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 px-5 outline-none"
                  />

                  <button
                    onClick={handleSearch}
                    className="btn__sytle whitespace-nowrap"
                    disabled={loading}
                  >
                    {loading ? "Searching..." : "Search"}
                  </button>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-black/80 text-sm mt-3">
                    <span className="text-red-500" >Order not found.</span> Please check your Order ID or email us at{" "}
                    <a
                      href="mailto:info@intercomsimcards.co.uk/"
                      className="underline font-medium text-green-600"
                    >
                      info@intercomsimcards.co.uk
                    </a>{" "}
                    for assistance.
                  </p>
                )}

                {/* Result */}
                {order && (
                  <div className="mt-6  ">
                    <p className="text-gray-700 text-left mt-2 leading-relaxed">
                      Hello <strong>{order.fullName}</strong>, We’ve found your
                      order. Your{" "}
                      <strong className="capitalize">{order.simType}</strong>{" "}
                      SIM card is currently{" "}
                      <strong className="capitalize">{order.status}</strong>.
                    </p>

                    <p className="text-gray-800 text-sm mt-10 pt-5 border-t border-black/10">
                      If you have any questions or need help with activation,
                      our support team is happy to assist. You can email us at{" "}
                      <a
                        href="mailto:info@intercomsimcards.co.uk"
                        className="underline font-medium"
                      >
                        info@intercomsimcards.co.uk
                      </a>
                      
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
