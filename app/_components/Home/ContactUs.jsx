"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max__width section__top ">
      <div className=" grid grid-cols-2 gap-10 justify-between mb-16 ">
        <h2 className="title text-3xl md:text-4xl font-bold">
          Get in Touch with UK’s Trusted Intercom & Automated Gate Experts
        </h2>
        <p className="para mt-4 text-gray-700">
          Have questions about our GSM intercom systems, SIM-enabled intercoms,
          or automated gate installations? Reach out today! Our friendly team
          provides professional advice, fast support, and seamless installation
          services across the UK. Fill out the form and we’ll get back to you
          promptly.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Column - Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/gate-photos/image/Commercial/CommercialSIM3.webp"
            alt="Contact Us"
            className="rounded-xl w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Right Column - Contact Form */}
        <div className="md:w-1/2 w-full bg-white p-8 rounded-xl shadow-lg">
          <h2 className="card__title mb-6">Get In Touch</h2>
          <p className="para mb-6">
            Have questions about our GSM intercom, SIM-enabled intercoms, or
            automated gate solutions? Fill out the form below and we’ll get back
            to you promptly.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none  "
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none  "
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none  "
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#111] text-white font-semibold py-3 rounded-md cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
