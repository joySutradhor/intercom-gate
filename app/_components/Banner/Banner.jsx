"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsArrowUpRight, BsSim } from "react-icons/bs";
import logo from "@/public/logo.png";
import { IoMdClose } from "react-icons/io";
import Footer from "../Footer/Footer";
import WorksModalContent from "../WorksModalContent/WorksModalContent";

const Banner = () => {
  const [works, setWorks] = useState(false);
  const [intercom, seIntercom] = useState(false);
  const [activeCancel, setActiveCancel] = useState(false);
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
    seIntercom(false);
  };
  const handleWorks = () => {
    setWorks(true);
    setActiveCancel(false);
    seIntercom(false);
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
                className="ic__logo "
                height={1000}
                width={1000}
              />
            </div>
          </nav>
        </div>

        {/* content parent */}
        <div className="ic__h__parent    ">
          <div className=" ic__h__child__parent">
            <h2 className="title "> 4G & GSM Intercom SIM Cards</h2>
            <div className="ic__h__para__wrapper para">
              <p>
                Welcome to Intercom SIM Cards , the easy and affordable way to
                keep your intercom or gate entry system connected.
              </p>
              <p>
                Intercom SIM Cards Simple, Reliable & Low-Cost Perfect for Gate
                Intercoms, Door Entry Systems & GSM Access Units
              </p>
            </div>

            {/* btn group parent */}
            <div className="ic__h__btns__parent ">
              <button onClick={() => handleWorks()} className="btn__sytle">
                How Its Works{" "}
                <span>
                  {" "}
                  <MdOutlineArrowOutward />{" "}
                </span>
              </button>

              <button onClick={() => seIntercom(true)} className="btn__sytle">
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

      {/* intercom modal */}
      <div className="">
        {intercom && (
          <div
            className=" fixed inset-0 bg-white/90 xl:bg-transparent   max-w-5xl mx-auto flex items-center justify-center z-500     "
            id="intercom"
          >
            <div className=" ic__i__wrapper ">
              <div className="flex justify-between pb-10 ">
                <div>
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

              <div className="ic__i__card__container">
                <div className="ic__i__cards__parent   ">
                  <div
                    className="relative   group  ic__card__parent "
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                      borderRadius: "16px",
                    }}
                  >
                    <h5 className="ic__i__card__sm__title">
                      30-day rolling contract
                    </h5>
                    <div>
                      <h3 className="ic__i__card__title">Domestic SIM</h3>
                      <p className="mb-4">
                        Designed for single residential properties (one
                        household).
                      </p>
                      <h4>
                        Price: <span className="ic__i__card__price">£5.00</span>{" "}
                        per month
                      </h4>
                    </div>

                    <div className="mt-8">
                      <button
                        onClick={() => handleGateForm()}
                        className="btn__sytle"
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
                    className="ic__card__parent group    relative"
                  >
                    <h5 className="ic__i__card__sm__title">
                      30-day rolling contract
                    </h5>
                    <div>
                      <h3 className="ic__i__card__title">Commercial SIM</h3>
                      <p className="mb-4 ">
                        Ideal for flats, apartment blocks, offices
                      </p>
                      <h4 className="">
                        Price:{" "}
                        <span className="ic__i__card__price">£15.00</span> per
                        month
                      </h4>
                    </div>

                    <div className="mt-8">
                      <button
                        onClick={() => handleGateForm()}
                        className="btn__sytle"
                      >
                        Sign Up
                        <span>
                          {" "}
                          <MdOutlineArrowOutward />{" "}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                      borderRadius: "16px",
                    }}
                    className=" relative"
                  >
                    <div className="relative   group  ic__card__parent group">
                      <div>
                        <button className="absolute right-0 top-0 text-shadow-2xs font-medium text-sm rounded-2xl rounded-tr-2xl bg-[#111] text-white py-1.5 px-6 italic">
                          {" "}
                          Billed annually
                        </button>
                      </div>
                      <h5 className="ic__i__card__sm__title text-black">
                        30-day rolling contract
                      </h5>
                      <div>
                        <h3 className="ic__i__card__title">Gate SIM</h3>
                        <p className="mb-1 para">
                          Ideal for dial to open devices, no more top ups.
                        </p>
                        <p className="mb-4 font-medium italic text-black">
                          Billed annually
                        </p>
                        <h4 className="text-black">
                          Price:{" "}
                          <span className="ic__i__card__price ">£1.75</span> per
                          month
                        </h4>
                      </div>

                      <div className="mt-8">
                        <button
                          onClick={() => handleGateForm()}
                          className="btn__sytle"
                        >
                          Sign Up
                          <span>
                            {" "}
                            <MdOutlineArrowOutward />{" "}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {activeCancel && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-white/90 z-50 px-4"
          id="intercom"
        >
          <section className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 sm:p-10 xl:p-20 flex flex-col items-center justify-center relative">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-8 relative w-full">
              <h2 className="subTitle">
                {activeTab === "activate"
                  ? "Activate Your GateSIM"
                  : "Cancel Your Subscription"}
              </h2>
              <p className="text-black/80 mt-2">
                {activeTab === "activate"
                  ? "Great! You received your GateSIM. Activate it here."
                  : "Cancel your subscription anytime. Enter your details below."}
              </p>

              <button
                onClick={() => setActiveCancel(false)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-3xl cursor-pointer"
              >
                <IoMdClose />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-black/20 mb-8">
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
            <div className="w-full flex justify-center">
              {activeTab === "activate" && (
                <div className=" relative max-w-4xl">
                  <div
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                      borderRadius: "16px",
                    }}
                    className="p-5 bg-gray-100 rounded-2xl shadow flex flex-col w-full"
                  >
                    <label className="block text-base font-medium mb-2 text-black">
                      Email Address
                      <input
                        type="email"
                        placeholder="Enter email used for subscription"
                        className="mt-2 w-full px-3 py-2 rounded-lg border border-black/10 text-black outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        className="mt-2 w-full px-3 py-2 rounded-lg border border-black/10 text-black outline-none"
                        value={simNumber}
                        onChange={(e) => setSimNumber(e.target.value)}
                      />
                      <span className="text-xs text-black/60">
                        Enter the full number.
                      </span>
                    </label>

                    <div>
                      <button className="mt-6 inline-block py-2 px-10 text-sm bg-white text-black font-medium rounded-full hover:bg-black hover:text-white transition-all">
                        Activate SIM
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "cancel" && (
                <div className="relative max-w-4xl">
                  <div
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                      borderRadius: "16px",
                    }}
                    className="p-5 bg-gray-100 rounded-2xl shadow flex flex-col w-full"
                  >
                    <label className="block text-base font-medium mb-2 text-black">
                      Email Address
                      <input
                        type="email"
                        placeholder="Enter email used for subscription"
                        className="mt-2 w-full px-3 py-2 rounded-lg border border-black/10 text-black outline-none"
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
                        className="mt-2 w-full px-3 py-2 rounded-lg border border-black/10 text-black outline-none"
                      />
                      <span className="text-xs text-black/60">
                        Enter the full number.
                      </span>
                    </label>

                    <div>
                      <button className="mt-6 inline-block py-2 px-6 bg-white text-black text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all">
                        Cancel Subscription
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {/* works modal  */}
      {works && (
        <div className="fixed inset-0 bg-white/90   flex items-center justify-center z-50 lR__gap ">
          <div className="ic__w__parent__wrapper relative">
            {/* Close Button */}
            <button
              onClick={() => setWorks(false)}
              className="absolute top-3 right-3 hover:text-red-700  text-red-500 text-3xl cursor-pointer"
            >
              ×
            </button>

            <div>
              <WorksModalContent />

              <div className="border-t border-white/10 mt-10 pt-5">
                <button
                  onClick={() => setGateForm(true)}
                  className="btn__sytle "
                >
                  Sign Up Now{" "}
                  <span>
                    {" "}
                    <MdOutlineArrowOutward />{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* gate form modal  */}
      {gateForm && (
        <div className="fixed inset-0    flex items-center justify-center z-50 ">
          {/* Main Content */}
          <main className="max-w-7xl mx-auto  border border-black/10 rounded-2xl  h-[80vh] overflow-y-scroll">
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
                      All prices are subject to VAT at the current rate and may
                      be subject to change.
                    </li>
                    <li>
                      We cannot be held responsible for any GSM network issues,
                      outages, or signal problems outside of our control.
                    </li>
                    <li>
                      We reserve the right to review and adjust your package
                      every 30 days.
                    </li>
                    <li>
                      You have the right to cancel the contract at any time by
                      giving 30 days’ notice through our website.
                    </li>
                    <li>
                      Lost, stolen, or damaged SIM cards may incur an additional
                      replacement fee or additional usage fees. You agree that
                      these costs are your responsibility.
                    </li>
                    <li>
                      All SIMs must remain installed in the intercom and must
                      not be used in any other device or for any other purpose.
                    </li>
                    <li>
                      We have the right to increase prices in line with
                      inflation and GSM network charges. Any changes will always
                      be confirmed by email with more than 30 days’ notice.
                    </li>
                    <li>
                      We reserve the right to bar or suspend your SIM card if
                      any outstanding payments remain unpaid.
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Banner;
