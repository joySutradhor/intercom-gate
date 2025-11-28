"use client";
import Image from "next/image";
import React, { useState } from "react";
import hero from "@/public/sim.jpg";
import CommonBtn from "../Utilites/CommonBtn/CommonBtn";
import { MdEmail, MdOutlineArrowOutward } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";
import { BsArrowUpRight, BsSim } from "react-icons/bs";
import Link from "next/link";
import WorksModal from "../Utilites/Modal/WorksModal";
import IntercomSim from "../IntercomSim/IntercomSim";
import logo from "@/public/logo.png";
import banner from "@/public/banner.jpg";
import { IoMdClose } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  const [works, setWorks] = useState(false);
  const [intercom, seIntercom] = useState(false);
  const [activeCancel, setActiveCancel] = useState(false);
  const [step, setStep] = useState(1);
  const [gateForm, setGateForm] = useState(false);

  const [activeTab, setActiveTab] = useState("activate");
  const [email, setEmail] = useState("");
  const [simNumber, setSimNumber] = useState("");

  console.log(gateForm, "check clicked");
  const handleActiveCancel = () => {
    console.log("check it it ");
    setActiveCancel(true);
  };

  const [formData, setFormData] = useState({
    companyName: "",
    title: "",
    firstName: "",
    fullName: "",
    companyNameApplicable: "",
    email: "",
    contactNumber: "",
    addressLine1: "",
    addressLine2: "",
    townCity: "",
    county: "",
    postCode: "",
    country: "United Kingdom",
    simCount: "",
    simDestination: "same",
    contractTerms: "",
    accountHolder: "",
    sortCode: "",
    accountNumber: "",
    bankName: "",
    bankAddressLine1: "",
    bankAddressLine2: "",
    bankTownCity: "",
    bankPostCode: "",
    reference: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Signature:", signatureData);
    alert("Form submitted successfully! Check console for data.");
  };

  const handleGateForm = () => {
    setGateForm(true);
    setActiveCancel(false);
    seIntercom(false) ;
  };
  const handleWorks = () => {
    setWorks(true);
    setActiveCancel(false);
    seIntercom(false) ;
  };

  return (
    <div className="max__width ">
      <div className="h-screen">
        <div>
          <nav className="">
            <div className="absolute top-0 left-0 w-full z-50 px-[5%] ">
              <Image
                src={logo}
                alt="intercom sim logo"
                className="w-[10vw] h-full "
                height={1000}
                width={1000}
              />
            </div>
          </nav>
        </div>
        <div className="flex justify-center items-center h-full relative  max-w-4xl mx-auto  ">
          <div className=" bg-white  p-10 rounded-3xl z-50 shadow">
            <h2 className="title "> 4G & GSM Intercom SIM Cards</h2>
            <div className="pt-5 pb-10">
              <p className="mb-2 para max-w-2xl   ">
                Welcome to Intercom SIM Cards , the easy and affordable way to
                keep your intercom or gate entry system connected.
              </p>
              <p className="para max-w-2xl  ">
                Intercom SIM Cards Simple, Reliable & Low-Cost Perfect for Gate
                Intercoms, Door Entry Systems & GSM Access Units
              </p>
            </div>
            <div className="flex gap-x-5 items-center ">
              {/* <CommonBtn
              className="bg-black text-black px-6"
              btnText="How Its Works"
              url="/contact"
              icon={MdOutlineArrowOutward}
            /> */}

              <button
                onClick={() => handleWorks()}
                className="btn__sytle"
              >
                How Its Works{" "}
                <span>
                  {" "}
                  <MdOutlineArrowOutward />{" "}
                </span>
              </button>

              <button
                onClick={() => seIntercom(true)}
                className="btn__sytle"
              >
                Get Intercom Sim
                <span>
                  {" "}
                  <MdOutlineArrowOutward />{" "}
                </span>
              </button>
              <button
                onClick={() => handleActiveCancel()}
                className="btn__sytle"
              >
                Active / Cancel Sim
                <span>
                  {" "}
                  <MdOutlineArrowOutward />{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {intercom && (
        <div
          className=" fixed inset-0   max-w-5xl mx-auto flex items-center justify-center z-50     "
          id="intercom"
        >
          <div className=" p-10 bg-white  rounded-2xl">
            <div className="flex justify-between pb-10 ">
              <div className="text-left">
                <h2 className="subTitle mb-2">30-Day Rolling Contract </h2>
                <p className="para">
                  All SIMs operate on a 30-day rolling contract, giving you
                  flexibility with no long-term commitment.
                </p>
              </div>
              {/* Close Button */}
              <button
                onClick={() => seIntercom(false)}
                className=" hover:text-red-700 text-red-500 text-3xl cursor-pointer"
              >
                <IoMdClose />
              </button>
            </div>

            <div className="">
              <div className="grid grid-cols-2 gap-10   rounded-2xl   ">
                <div
                  className="relative p-5 bg-gray-100  rounded-2xl group cursor-pointer text-black overflow-hidden "
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                    borderRadius: "16px",
                  }}
                >
                  <h5 className="font-semibold mb-2 text-sm">
                    30-day rolling contract
                  </h5>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">
                      Domestic SIM
                    </h3>
                    <p className="mb-4">
                      Designed for single residential properties (one
                      household).
                    </p>
                    <h4>
                      Price:{" "}
                      <span className="text-2xl font-bold italic">£5.00</span>{" "}
                      per month
                    </h4>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => handleGateForm()}
                      className="flex items-center gap-2 cursor-pointer group-hover:bg-[#111] py-2 px-8 rounded-full text-sm font-medium border border-black/5 bg-white text-black ease-in-out duration-500 group-hover:text-white"
                    >
                      Sign Up
                      <BsArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* second card */}
                <div
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                    borderRadius: "16px",
                  }}
                  className="p-5 shadow bg-gray-100  rounded-2xl group cursor-pointer text-black   relative"
                >
                  <h5 className="font-semibold mb-2 text-sm">
                    30-day rolling contract
                  </h5>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">
                      Commercial SIM
                    </h3>
                    <p className="mb-4 ">
                      Ideal for flats, apartment blocks, offices
                    </p>
                    <h4 className="">
                      Price:{" "}
                      <span className="text-2xl font-bold italic">£15.00</span>{" "}
                      per month
                    </h4>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => handleGateForm()}
                      className="flex items-center gap-2 cursor-pointer group-hover:bg-[#111] py-2 px-8 rounded-full text-sm font-medium border border-black/5 bg-white text-black   ease-in-out duration-500  group-hover:text-white"
                    >
                      Sign Up
                      <span>
                        {" "}
                        <MdOutlineArrowOutward />{" "}
                      </span>
                    </button>
                  </div>

                  {/* SIM card style notch */}
                  {/* <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-br-2xl  clip-sim"></div>

                  <style jsx>{`
                    .clip-sim {
                      clip-path: polygon(
                        0 0,
                        100% 0,
                        100% 100%,
                        0 100%,
                        100% 0
                      );
                    }
                  `}</style> */}
                </div>
                <div
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                    borderRadius: "16px",
                  }}
                  className=" relative"
                >
                  <div className=" p-5  bg-gray-100   rounded-2xl group cursor-pointer  shadow">
                    <div>
                      <button className="absolute right-0 top-0 text-shadow-2xs font-medium text-sm rounded-2xl rounded-tr-2xl bg-[#111] text-white py-1.5 px-6 italic">
                        {" "}
                        Billed annually
                      </button>
                    </div>
                    <h5 className="font-semibold mb-2 text-sm text-black">
                      30-day rolling contract
                    </h5>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-1">
                        Gate SIM
                      </h3>
                      <p className="mb-1 para">
                        Ideal for dial to open devices, no more top ups.
                      </p>
                      <p className="mb-4 font-medium italic text-black">
                        Billed annually
                      </p>
                      <h4 className="text-black">
                        Price:{" "}
                        <span className="text-2xl font-bold italic ">
                          £1.75
                        </span>{" "}
                        per month
                      </h4>
                    </div>

                    <div className="mt-8">
                      <button
                        onClick={() => handleGateForm()}
                        className="flex items-center gap-2 cursor-pointer group-hover:bg-[#111] py-2 px-8 rounded-full text-sm font-medium border border-black/5 bg-white text-black   ease-in-out duration-500  group-hover:text-white"
                      >
                        Sign Up
                        <span>
                          {" "}
                          <MdOutlineArrowOutward />{" "}
                        </span>
                      </button>
                    </div>

                    {/* SIM card style notch */}
                    {/* <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-br-2xl clip-sim"></div>

                  <style jsx>{`
                    .clip-sim {
                      clip-path: polygon(
                        0 0,
                        100% 0,
                        100% 100%,
                        0 100%,
                        100% 0
                      );
                    }
                  `}</style> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCancel && (
        <div
          className=" fixed inset-0   max-w-5xl mx-auto flex items-center justify-center z-50     "
          id="intercom"
        >
          <section className=" p-6 sm:px-10 sm:py-16 bg-white  rounded-2xl ">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
              <div>
                <h2 className="text-2xl font-bold text-black">
                  {activeTab === "activate"
                    ? "Activate Your GateSIM"
                    : "Cancel Your Subscription"}
                </h2>
                <p className="text-black/80 mt-1">
                  {activeTab === "activate"
                    ? "Great! You received your GateSIM. Activate it here."
                    : "Cancel your subscription anytime. Enter your details below."}
                </p>
              </div>
              <button
                onClick={() => setActiveCancel(false)}
                className="text-red-500 cursor-pointer hover:text-red-700 text-3xl"
              >
                <IoMdClose />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/20 mb-8">
              <button
                className={`px-4 py-2 font-medium text-base cursor-pointer ${
                  activeTab === "activate"
                    ? "border-b-2 border-black/80 text-black"
                    : "text-black/60"
                }`}
                onClick={() => setActiveTab("activate")}
              >
                Activate SIM
              </button>
              <button
                className={`px-4 py-2 font-medium text-base cursor-pointer ${
                  activeTab === "cancel"
                    ? "border-b-2 border-black/80 text-black"
                    : "text-black/60"
                }`}
                onClick={() => setActiveTab("cancel")}
              >
                Cancel Subscription
              </button>
            </div>

            {/* Forms */}
            {activeTab === "activate" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-gray-100  rounded-2xl shadow">
                  <div>
                    <label className="block text-base font-medium mb-5 text-black">
                      Email Address
                      <input
                        type="email"
                        placeholder="Enter email used for subscription"
                        className="mt-2 w-full px-3 py-2 rounded-lg  border border-black/10 text-black outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="text-xs text-black/60">
                        We'll never share your email with anyone else.
                      </span>
                    </label>
                  </div>

                  <div className="mt-5">
                    <label className="block text-base font-medium mt-4 text-black">
                      SIM Card Number
                      <input
                        type="text"
                        placeholder="Write your number"
                        className="mt-2 w-full px-3 py-2 rounded-lg  border border-black/10 text-black outline-none"
                        value={simNumber}
                        onChange={(e) => setSimNumber(e.target.value)}
                      />
                      <span className="text-xs text-black/60">
                        Enter the full number .
                      </span>
                    </label>

                    <button className="mt-6 w-full py-2 px-6 cursor-pointer bg-white text-black font-medium rounded-full hover:bg-[#111] hover:text-white transition-all">
                      Activate SIM
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "cancel" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-gray-100 rounded-2xl shadow">
                  <label className="block text-base font-medium mb-2 text-black">
                    Email Address
                    <input
                      type="email"
                      placeholder="Enter email used for subscription"
                      className="mt-2 w-full px-3 py-2 rounded-lg  border border-black/10 text-black outline-none"
                    />
                    <span className="text-xs text-black/60">
                      We'll never share your email with anyone else.
                    </span>
                  </label>

                  <label className="block text-base font-medium mt-4 text-black">
                    SIM Card Number
                    <input
                      type="text"
                      placeholder="Write your number"
                      className="mt-2 w-full px-3 py-2 rounded-lg  border border-black/10 text-black outline-none"
                    />
                    <span className="text-xs text-black/60">
                      Enter the full number .
                    </span>
                  </label>

                  <button className="mt-6 w-full py-2 px-6 cursor-pointer bg-white text-black font-medium rounded-full hover:bg-[#111] hover:text-white transition-all">
                    Cancel Subscription
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {/* works modal  */}

      {works && (
        <WorksModal
          open={works}
          onClose={() => setWorks(false)}
          title="How It Works"
          description="Once your SIM is installed, we allow a 3-month usage period. Charged at the rate stated. 
This gives us enough data to calculate your average consumption and ensure you are on the 
most suitable package."
          descriptionTwo="If any changes are required, you will always be informed in advance."
        />
      )}

      {/* gate form modal  */}
      {gateForm && (
        <div className="fixed inset-0    flex items-center justify-center z-50 ">
          {/* Main Content */}
          <main className="max-w-7xl mx-auto rounded-2xl  h-[80vh] overflow-y-scroll">
            <div className="bg-white backdrop-blur-sm rounded-lg shadow-md p-8">
              <div className="flex justify-between ">
                <h1 className="text-3xl font-bold  text-black mb-8">
                  Pay-Monthly SIM Card Sign-Up Form
                </h1>
                <div onClick={() => setGateForm(false)}>
                  <IoMdClose className="text-red-500 text-4xl cursor-pointer"></IoMdClose>
                </div>
              </div>
              {/* Company Name */}
              <div className="mb-8">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  0 of 250 max characters
                </p>
              </div>

              {/* YOUR DETAILS Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black mb-6">
                  YOUR DETAILS
                </h2>

                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Company Name (If applicable)
                    </label>
                    <input
                      type="text"
                      name="companyNameApplicable"
                      value={formData.companyNameApplicable}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Please note, we will send all correspondence to the email
                      address provided here
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      This is your contact number and not the telephone number
                      of the SIM
                    </p>
                  </div>
                </div>

                {/* Address Section */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-black mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    placeholder="Address Line 1"
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none mb-3"
                    required
                  />
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    placeholder="Address Line 2"
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none mb-3"
                  />
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Town/City
                    </label>
                    <input
                      type="text"
                      name="townCity"
                      value={formData.townCity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      County
                    </label>
                    <input
                      type="text"
                      name="county"
                      value={formData.county}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Post Code
                    </label>
                    <input
                      type="text"
                      name="postCode"
                      value={formData.postCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                    />
                  </div>
                  {/* <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                >
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Other">Other</option>
                </select>
              </div> */}

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value="United Kingdom"
                      disabled
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg bg-gray-100  cursor-not-allowed"
                    >
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>

                {/* SIM Cards Section */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-black mb-2">
                    How many SIM cards do you require?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="simCount"
                    value={formData.simCount}
                    onChange={handleInputChange}
                    placeholder="Please enter a number from 1 to 20"
                    min="1"
                    max="20"
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                    required
                  />
                </div>

                {/* <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-3">
                Where would you like the SIM sent?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="simDestination"
                    value="same"
                    checked={formData.simDestination === "same"}
                    onChange={handleInputChange}
                    className="mr-3 w-4 h-4 text-indigo-600"
                  />
                  <span className="text-black">Same address as above</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="simDestination"
                    value="different"
                    checked={formData.simDestination === "different"}
                    onChange={handleInputChange}
                    className="mr-3 w-4 h-4 text-indigo-600"
                  />
                  <span className="text-black">Different address</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="simDestination"
                    value="other"
                    checked={formData.simDestination === "other"}
                    onChange={handleInputChange}
                    className="mr-3 w-4 h-4 text-indigo-600"
                  />
                  <span className="text-black">Other</span>
                </label>
              </div>
            </div> */}
              </div>

              {/* CONTRACT TERMS Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black mb-6">
                  CONTRACT TERMS
                </h2>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-black mb-2">
                    Terms of Contract <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="contractTerms"
                    value={formData.contractTerms}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                    required
                  >
                    <option value="">I agree</option>
                    <option value="12months">12 Months</option>
                    <option value="24months">24 Months</option>
                    <option value="36months">36 Months</option>
                  </select>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-48 overflow-y-auto text-sm text-black">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      All prices are subject to VAT at the current rate and you
                      are subject to change
                    </li>
                    <li>Calls can be up to 30 seconds</li>
                    <li>
                      Charges are applied on a per second basis after the first
                      30 seconds
                    </li>
                    <li>
                      A small amount of data is used for progressing other data
                      roaming costs inc 5G on abandoned networks
                    </li>
                    <li>Calls to 5G are not included</li>
                    <li>
                      Outside the UK usage Plan for more information about our
                      contract terms
                    </li>
                    <li>
                      Calls outside the allocated allowance are charged at 0.01
                      per calls
                    </li>
                    <li>
                      Data outside the allocated allowance are charged at 0.01
                      per calls
                    </li>
                    <li>
                      Data outside the allocated allowance are charged at 0.01
                      per MB
                    </li>
                  </ul>
                </div>
              </div>

              {/* DIRECT DEBIT DETAILS Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black mb-6">
                  DIRECT DEBIT DETAILS
                </h2>

                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-black mb-2">
                      Name(s) of Account Holder(s){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="accountHolder"
                      value={formData.accountHolder}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      0 of 250 max characters
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      As it appears on the account
                    </p>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-black mb-2">
                      Bank Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      0 of 250 max characters
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Sort Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="sortCode"
                      value={formData.sortCode}
                      onChange={handleInputChange}
                      placeholder="00-00-00"
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      0 of 6 max characters
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Account Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      0 of 8 max characters
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-black mb-2">
                    Bank or Building Society Address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="bankAddressLine1"
                    value={formData.bankAddressLine1}
                    onChange={handleInputChange}
                    placeholder="Address Line 1"
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none mb-3"
                    required
                  />
                  <input
                    type="text"
                    name="bankAddressLine2"
                    value={formData.bankAddressLine2}
                    onChange={handleInputChange}
                    placeholder="Address Line 2"
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none mb-3"
                  />
                  <div className="grid md:grid-cols-4 gap-3">
                    <input
                      type="text"
                      name="bankTownCity"
                      value={formData.bankTownCity}
                      onChange={handleInputChange}
                      placeholder="Town/City"
                      className="px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                    />
                    <input
                      type="text"
                      name="bankPostCode"
                      value={formData.bankPostCode}
                      onChange={handleInputChange}
                      placeholder="ZIP / Postal Code"
                      className="px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-black mb-2">
                      Your Reference <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="reference"
                      value={formData.reference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      0 of 250 max characters
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      This will be shown on your invoice
                    </p>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-black mb-2">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.signatureDate} // should be a string like "YYYY-MM-DD"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          signatureDate: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex">
                <button
                  onClick={handleSubmit}
                  className="bg-[#111] text-white hover:bg-white hover:text-white font-semibold px-8 cursor-pointer py-2 rounded-full text-base transition-colors duration-200 border border-black/10"
                >
                  Submit
                </button>
              </div>
            </div>
          </main>
        </div>
      )}

      {/* footer */}
      <div className="">
        <div className="px-[5%] mb-10  text-black  w-full fixed bottom-0 left-0  ">
          <div>
            <div className="  text-xl ">
              <div className="flex items-center gap-x-5 justify-between  w-full ">
                <div className="flex items-center  gap-5 bg-white backdrop-blur-2xl py-2 px-8 rounded-full">
                  <div className="flex items-center gap-1">
                    <MdEmail size={20} />
                    <span>info@gatesim.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white backdrop-blur-2xl py-3 px-8 rounded-full">
                  <a href="#" className="hover:text-gray-300">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
