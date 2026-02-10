"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirm = await Swal.fire({
      title: "Send message?",
      text: "Do you want to submit this message now?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor : "#111" , 
      confirmButtonText: "Yes, send",
      cancelButtonText: "Cancel",
    });

    if (!confirm.isConfirmed) return;

    try {
      setLoading(true);

      Swal.fire({
        title: "Sending...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      console.log("CONTACT FORM DATA:", formData);

      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("SERVER RESPONSE:", response.data);

      await Swal.fire({
        icon: "success",
        title: "Message Sent",
        text: "Thank you! We will get back to you shortly.",
        confirmButtonColor: "#111"
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(
        "CONTACT FORM ERROR:",
        error.response?.data || error.message,
      );

      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max__width section__top">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 justify-between mb-10 xl:mb-16">
        <h2 className="title text-3xl md:text-4xl font-bold">
          Get in Touch with UK’s Trusted Intercom  Experts
        </h2>
        <p className="para mt-4 text-gray-700">
          Have questions about our GSM intercom systems, SIM-enabled intercoms
          installations? Reach out today! Our friendly team
          provides professional advice, fast support, and seamless installation
          services across the UK.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src="/gate-photos/image/Commercial/CommercialSIM3.webp"
            alt="Contact Us"
            className="rounded-xl w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Form */}
        <div className="lg:w-1/2 w-full bg-white p-5 xl:p-8 rounded-xl shadow-lg">
          <h2 className="card__title mb-6">Get In Touch</h2>
          <p className="para mb-6">
            Fill out the form below and our team will respond as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`font-semibold py-3 rounded-md transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#111] text-white hover:bg-black cursor-pointer"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
