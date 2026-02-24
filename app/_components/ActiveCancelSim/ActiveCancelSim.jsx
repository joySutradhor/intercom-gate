"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import Image from "next/image";

const ActiveCancelSim = () => {
  const [activeTab, setActiveTab] = useState("activate");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const confirm = await Swal.fire({
      title:
        activeTab === "activate" ? "Activate SIM?" : "Cancel Subscription?",
      text: "Please confirm before continuing.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#111",
      confirmButtonText: "Yes, confirm",
      cancelButtonText: "No",
    });

    if (!confirm.isConfirmed) return;

    try {
      Swal.fire({
        title: "Processing...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      await axios.post("/api/active-cancel", {
        email: data.email,
        simNumber: data.simNumber,
        action: activeTab,
      });

      await Swal.fire({
        icon: "success",
        title: "Success",
        confirmButtonColor: "#111",
        text:
          activeTab === "activate"
            ? "SIM activation request submitted successfully."
            : "Subscription cancellation request submitted successfully.",
      });

      reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="max__width h-full">
      <section className=" border border-black/10 rounded-2xl p-5  lg:p-10  xl:max-w-7xl mx-auto 2xl:mt-[5vh]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 ">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-black">
              {activeTab === "activate"
                ? "Activate Your GateSIM"
                : "Cancel Your Subscription"}
            </h1>
            <p className="text-black/70 mt-2 text-sm sm:text-base">
              {activeTab === "activate"
                ? "You’ve received your GateSIM. Activate it using the form below."
                : "You can cancel your subscription anytime by submitting the form."}
            </p>
          </div>

          <Link href="/">
            <button className="btn__sytle flex items-center gap-2 w-fit">
              Back to Home <MdOutlineArrowOutward />
            </button>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-black/20 mt-10">
          <button
            className={`flex-1 py-3 text-sm sm:text-base font-medium transition cursor-pointer ${
              activeTab === "activate"
                ? "border-b-2 border-black text-black"
                : "text-black/50"
            }`}
            onClick={() => setActiveTab("activate")}
          >
            Activate SIM
          </button>

          <button
            className={`flex-1 py-3 text-sm sm:text-base font-medium transition cursor-pointer ${
              activeTab === "cancel"
                ? "border-b-2 border-black text-black"
                : "text-black/50"
            }`}
            onClick={() => setActiveTab("cancel")}
          >
            Cancel Subscription
          </button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 order-2 lg:order-1">
            <div>
              <label className="ic__common__label">Email Address</label>
              <input
                type="email"
                className="ic__common__input"
                placeholder="Email used for subscription"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="ic__common__label">SIM Card Number</label>
              <p className="text-sm italic mt-1 mb-1.5">Please check your SIM number as shown in the image.</p>
              <input
                type="text"
                className="ic__common__input"
                placeholder="Enter SIM number"
                {...register("simNumber", {
                  required: "SIM number is required",
                })}
              />
              {errors.simNumber && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.simNumber.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-10 py-2 rounded-full text-sm font-medium transition  mt-5 cursor-pointer ${
                isSubmitting
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-black text-white hover:bg-black/90"
              }`}
            >
              {isSubmitting
                ? "Processing..."
                : activeTab === "activate"
                  ? "Activate SIM"
                  : "Cancel Subscription"}
            </button>
          </form>

          {/* Image */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <Image
              src="/simCard.jpeg"
              alt="SIM card number location"
              width={500}
              height={500}
              className="rounded-xl object-cover w-full max-h-[280px] sm:max-h-[340px] "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActiveCancelSim;
