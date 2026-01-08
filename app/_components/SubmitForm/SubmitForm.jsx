"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

const SubmitForm = () => {
  const [gateForm, setGateForm] = useState(false);
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

  return (
    <div>
      <div className="fixed inset-0    flex items-center justify-center z-50 ">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto  border border-black/10 rounded-2xl  h-[80vh] overflow-y-scroll">
          <div className="bg-white backdrop-blur-sm rounded-lg shadow-md p-8">
            <div className="flex justify-between ">
              <h1 className="subTitle mb-8">
                Pay-Monthly SIM Card Sign-Up Form
              </h1>
              <Link href="/">
                <button className="btn__sytle">
                  Back to Home
                  <span>
                    {" "}
                    <MdOutlineArrowOutward />{" "}
                  </span>
                </button>
              </Link>
            </div>

            {/* YOUR DETAILS Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-6">
                YOUR DETAILS
              </h2>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="ic__common__label">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="ic__common__input"
                    required
                  />
                </div>

                <div>
                  <label className="ic__common__label">
                    Company Name (If applicable)
                  </label>
                  <input
                    type="text"
                    name="companyNameApplicable"
                    value={formData.companyNameApplicable}
                    onChange={handleInputChange}
                    className="ic__common__input"
                  />
                </div>

                <div>
                  <label className="ic__common__label">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="ic__common__input"
                    required
                  />
                  <p className="ic__common__msg">
                    Please note, we will send all correspondence to the email
                    address provided here
                  </p>
                </div>

                <div>
                  <label className="ic__common__label">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="ic__common__input"
                    required
                  />
                  <p className="ic__common__msg">
                    This is your contact number and not the telephone number of
                    the SIM
                  </p>
                </div>
              </div>

              {/* Address Section */}
              <div className="mb-6">
                <label className="ic__common__label">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  placeholder="Address Line 1"
                  className="ic__common__input mb-3"
                  required
                />
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  placeholder="Address Line 2"
                  className="ic__common__input mb-3"
                />
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="ic__common__label">Town/City</label>
                  <input
                    type="text"
                    name="townCity"
                    value={formData.townCity}
                    onChange={handleInputChange}
                    className="ic__common__input"
                  />
                </div>
                <div>
                  <label className="ic__common__label">County</label>
                  <input
                    type="text"
                    name="county"
                    value={formData.county}
                    onChange={handleInputChange}
                    className="ic__common__input"
                  />
                </div>

                <div>
                  <label className="ic__common__label">Post Code</label>
                  <input
                    type="text"
                    name="postCode"
                    value={formData.postCode}
                    onChange={handleInputChange}
                    className="ic__common__input"
                  />
                </div>

                <div>
                  <label className="ic__common__label">Country</label>
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
                <label className="ic__common__label">
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
                  className="ic__common__input"
                  required
                />
              </div>
            </div>

            {/* CONTRACT TERMS Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-6">
                CONTRACT TERMS
              </h2>

              {/* Single Checkbox */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-black text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="contractAgree"
                    checked={formData.contractAgree}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contractAgree: e.target.checked,
                      })
                    }
                    required
                  />
                  <span>
                    I agree to the contract terms{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {/* Contract Terms List */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-48 overflow-y-auto text-sm text-black">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    All prices are subject to VAT at the current rate and may be
                    subject to change.
                  </li>
                  <li>
                    We cannot be held responsible for any GSM network issues,
                    outages, or signal problems outside of our control.
                  </li>
                  <li>
                    We reserve the right to review and adjust your package every
                    30 days.
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
                    All SIMs must remain installed in the intercom and must not
                    be used in any other device or for any other purpose.
                  </li>
                  <li>
                    We have the right to increase prices in line with inflation
                    and GSM network charges. Any changes will always be
                    confirmed by email with more than 30 days’ notice.
                  </li>
                  <li>
                    We reserve the right to bar or suspend your SIM card if any
                    outstanding payments remain unpaid.
                  </li>
                </ul>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex">
              <button
                onClick={handleSubmit}
                className="bg-[#111] text-white hover:bg-[#111] hover:text-white font-semibold px-8 cursor-pointer py-2 rounded-full text-base transition-colors duration-200 border border-black/10"
              >
                Submit
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SubmitForm;
