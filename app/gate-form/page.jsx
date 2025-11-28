"use client";
import React, { useState, useRef } from "react";

export default function PayMonthlySIMForm() {
  const [step, setStep] = useState(1);

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
    signatureDate: { day: "", month: "", year: "" },
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
    <div className="min-h-screen  bg-black/10 backdrop-blur-2xl">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 max-h-screen overflow-y-scroll">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Pay-Monthly SIM Card Sign-Up Form
        </h1>

        

        <div className="bg-black/10 backdrop-blur-sm rounded-lg shadow-md p-8">
          {/* Company Name */}
          <div className="mb-8">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              0 of 250 max characters
            </p>
          </div>

          {/* YOUR DETAILS Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              YOUR DETAILS
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Company Name (If applicable)
                </label>
                <input
                  type="text"
                  name="companyNameApplicable"
                  value={formData.companyNameApplicable}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Please note, we will send all correspondence to the email
                  address provided here
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  This is your contact number and not the telephone number of
                  the SIM
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                placeholder="Address Line 1"
                className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 mb-3"
                required
              />
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                placeholder="Address Line 2"
                className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 mb-3"
              />
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Town/City
                </label>
                <input
                  type="text"
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  County
                </label>
                <input
                  type="text"
                  name="county"
                  value={formData.county}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Post Code
                </label>
                <input
                  type="text"
                  name="postCode"
                  value={formData.postCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Other">Other</option>
                </select>
              </div> */}

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value="United Kingdom"
                  disabled
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg bg-gray-100 text-white cursor-not-allowed"
                >
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>
            </div>

            {/* SIM Cards Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
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
                className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-3">
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
                  <span className="text-white">Same address as above</span>
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
                  <span className="text-white">Different address</span>
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
                  <span className="text-white">Other</span>
                </label>
              </div>
            </div> */}
          </div>

          {/* CONTRACT TERMS Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              CONTRACT TERMS
            </h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
                Terms of Contract <span className="text-red-500">*</span>
              </label>
              <select
                name="contractTerms"
                value={formData.contractTerms}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">I agree</option>
                <option value="12months">12 Months</option>
                <option value="24months">24 Months</option>
                <option value="36months">36 Months</option>
              </select>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-48 overflow-y-auto text-sm text-white">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  All prices are subject to VAT at the current rate and you are
                  subject to change
                </li>
                <li>Calls can be up to 30 seconds</li>
                <li>
                  Charges are applied on a per second basis after the first 30
                  seconds
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
                  Calls outside the allocated allowance are charged at 0.01 per
                  calls
                </li>
                <li>
                  Data outside the allocated allowance are charged at 0.01 per
                  calls
                </li>
                <li>
                  Data outside the allocated allowance are charged at 0.01 per
                  MB
                </li>
              </ul>
            </div>
          </div>

          {/* DIRECT DEBIT DETAILS Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              DIRECT DEBIT DETAILS
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">
                  Name(s) of Account Holder(s){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="accountHolder"
                  value={formData.accountHolder}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
                <label className="block text-sm font-medium text-white mb-2">
                  Bank Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  0 of 250 max characters
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Sort Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="sortCode"
                  value={formData.sortCode}
                  onChange={handleInputChange}
                  placeholder="00-00-00"
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  0 of 6 max characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Account Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  0 of 8 max characters
                </p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
                Bank or Building Society Address{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="bankAddressLine1"
                value={formData.bankAddressLine1}
                onChange={handleInputChange}
                placeholder="Address Line 1"
                className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 mb-3"
                required
              />
              <input
                type="text"
                name="bankAddressLine2"
                value={formData.bankAddressLine2}
                onChange={handleInputChange}
                placeholder="Address Line 2"
                className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 mb-3"
              />
              <div className="grid md:grid-cols-4 gap-3">
                <input
                  type="text"
                  name="bankTownCity"
                  value={formData.bankTownCity}
                  onChange={handleInputChange}
                  placeholder="Town/City"
                  className="px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="bankPostCode"
                  value={formData.bankPostCode}
                  onChange={handleInputChange}
                  placeholder="ZIP / Postal Code"
                  className="px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">
                  Your Reference <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="reference"
                  value={formData.reference}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
                <label className="block text-sm font-medium text-white mb-2">
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
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-12 py-4 rounded-full text-lg transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
