"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineArrowOutward } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";

const SubmitForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "United Kingdom",
      simType: "domestic",
    },
  });

  const onSubmit = async (data) => {
    if (!data.contractAgree) {
      const agreeResult = await Swal.fire({
        title: "Agreement Required",
        text: "You must agree to the contract terms before submitting.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#111",
        confirmButtonText: "OK, I Agree",
        cancelButtonText: "Cancel",
      });

      if (!agreeResult.isConfirmed) return;

      setValue("contractAgree", true);
      return;
    }

    const result = await Swal.fire({
      title: "Submit form?",
      text: "Do you want to send this information now?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#111",
      confirmButtonText: "Yes, send it",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      setLoading(true);

      Swal.fire({
        title: "Sending...",
        text: "Please wait while we submit your form",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await axios.post("/api/email", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Success! Check your email for the direct debit form.",
        confirmButtonColor: "#111",
      });

      router.push("/");

      console.log("SERVER RESPONSE:", response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });

      console.error(
        "FORM SUBMISSION ERROR:",
        error.response?.data || error.message,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <main className="xl:w-[70vw] w-full mx-auto border border-black/10 rounded-2xl h-[80vh] overflow-y-scroll">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between flex-wrap">
            <h1 className="subTitle mb-5 lg:mb-8 ">
              Pay-Monthly SIM Card Sign-Up Form
            </h1>

            <Link href="/">
              <button className="btn__sytle mb-10 lg:mb-0">
                Back to Home <MdOutlineArrowOutward />
              </button>
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* YOUR DETAILS */}
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
                    className="ic__common__input"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                <div>
                  <label className="ic__common__label">
                    Company Name (If applicable)
                  </label>
                  <input
                    className="ic__common__input"
                    {...register("companyNameApplicable")}
                  />
                </div>

                <div>
                  <label className="ic__common__label">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="ic__common__input"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                <div>
                  <label className="ic__common__label">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="ic__common__input"
                    {...register("contactNumber", { required: true })}
                  />
                  {errors.contactNumber && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="ic__common__label">
                    Select Sim Cards <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="ic__common__input cursor-pointer"
                    {...register("simType", { required: true })}
                  >
                    <option value="domestic">Domestic SIM</option>
                    <option value="commercial">Commercial SIM</option>
                    <option value="gate">Gate SIM</option>
                  </select>
                  {errors.simType && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                {/* Address */}
                <div className="mb-6">
                  <label className="ic__common__label">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Address Line 1"
                    className="ic__common__input mb-3"
                    {...register("addressLine1", { required: true })}
                  />
                  {errors.addressLine1 && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="ic__common__label">
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Town / City"
                    className="ic__common__input"
                    {...register("townCity", { required: true })}
                  />
                  {errors.townCity && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                <div>
                  <label className="ic__common__label">
                    County name <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="County"
                    className="ic__common__input"
                    {...register("county", { required: true })}
                  />
                  {errors.county && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                <div>
                  <label className="ic__common__label">
                    Post Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Post Code"
                    className="ic__common__input"
                    {...register("postCode", { required: true })}
                  />
                  {errors.postCode && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                <div>
                  <label className="ic__common__label">
                    country <span className="text-red-500">*</span>
                  </label>
                  <select
                    disabled
                    className="w-full px-4 py-3  rounded-lg bg-gray-100"
                    {...register("country")}
                  >
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CONTRACT TERMS */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-6">
                CONTRACT TERMS
              </h2>

              <label className="flex items-center gap-2 text-sm cursor-pointer mb-6">
                <input type="checkbox" {...register("contractAgree")} />
                <span>
                  I agree to the contract terms
                  <span className="text-red-500">*</span>
                </span>
              </label>

              <div className="bg-gray-50 border rounded-lg p-4 max-h-48 overflow-y-auto text-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>All prices are subject to VAT.</li>
                  <li>Network issues are outside our control.</li>
                  <li>Packages may be reviewed every 30 days.</li>
                  <li>30 days' notice required for cancellation.</li>
                  <li>Replacement SIMs may incur charges.</li>
                  <li>SIMs must only be used in intercom systems.</li>
                  <li>Prices may increase with inflation.</li>
                  <li>Unpaid accounts may be suspended.</li>
                </ul>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-lg text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#111] cursor-pointer"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SubmitForm;
