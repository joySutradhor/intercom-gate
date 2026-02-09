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

      const payload = {
        email: data.email,
        simNumber: data.simNumber,
        action: activeTab, // activate | cancel
      };

      console.log("FORM DATA:", payload);

      const response = await axios.post("/api/active-cancel", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("SERVER RESPONSE:", response.data);

      await Swal.fire({
        icon: "success",
        title: "Success",
        confirmButtonColor: "#111",
        text:
          activeTab === "activate"
            ? "SIM activate request successfully"
            : "Subscription cancel request successfully",
        confirmButtonText: "OK",
      });

      reset();
    } catch (error) {
      console.error("SUBMISSION ERROR:", error.response?.data || error.message);

      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-50 px-4">
      <section className="ic__ac__parent relative w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between gap-10">
          <div>
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
          </div>

          <Link href="/">
            <button className="btn__sytle">
              Back to Home <MdOutlineArrowOutward />
            </button>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-black/20 mb-8 mt-14">
          <button
            type="button"
            className={`ic__ac__tab__btn ${
              activeTab === "activate"
                ? "ic__ac__tab__activek"
                : "text-black/60"
            }`}
            onClick={() => setActiveTab("activate")}
          >
            Activate SIM
          </button>
          <button
            type="button"
            className={`ic__ac__tab__btn ${
              activeTab === "cancel" ? "ic__ac__tab__activek" : "text-black/60"
            }`}
            onClick={() => setActiveTab("cancel")}
          >
            Cancel Subscription
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="ic__ac__form__wrapper"
            >
              <label className="ic__common__label">
                Email Address
                <input
                  type="email"
                  placeholder="Enter email used for subscription"
                  className="ic__common__input"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <span className="text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <label className="ic__common__label mt-5">
                SIM Card Number
                <input
                  type="text"
                  placeholder="Write your number"
                  className="ic__common__input"
                  {...register("simNumber", {
                    required: "SIM number is required",
                  })}
                />
                {errors.simNumber && (
                  <span className="text-xs text-red-500">
                    {errors.simNumber.message}
                  </span>
                )}
              </label>

              <div>
                {" "}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-6 inline-block py-2 px-10 text-sm font-medium rounded-full transition-all ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-white text-black hover:bg-black hover:text-white cursor-pointer"
                  }`}
                >
                  {isSubmitting
                    ? "Processing..."
                    : activeTab === "activate"
                      ? "Activate SIM"
                      : "Cancel Subscription"}
                </button>
              </div>
            </form>
          </div>
          <div>
            <Image src="/sim_number.jpeg" height={1000} width={1000} alt="intercom sim number" className="h-[30vh] object-cover  " >

            </Image>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActiveCancelSim;
