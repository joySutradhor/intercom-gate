"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

const ActiveCancelSim = () => {
  const [activeTab, setActiveTab] = useState("activate");
  const [email, setEmail] = useState("");
  const [simNumber, setSimNumber] = useState("");
  return (
    <div>
      <div
        className="fixed inset-0 flex items-center justify-center bg-white/50 z-50 px-4"
        id="intercom"
      >
        <section className="ic__ac__parent relative">
          {/* Header */}
          <div className="flex justify-between  gap-10 w-full relative">
            <div>
              <h2 className="subTitle ">
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

            <div>
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
          </div>

          {/* Tabs */}
          <div className="flex border-b border-black/20 mb-8 mt-14">
            <button
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
              className={`ic__ac__tab__btn ${
                activeTab === "cancel"
                  ? "ic__ac__tab__activek"
                  : "text-black/60"
              }`}
              onClick={() => setActiveTab("cancel")}
            >
              Cancel Subscription
            </button>
          </div>

          {/* Forms */}
          <div className="w-full flex  ">
            {activeTab === "activate" && (
              <div className=" relative w-full ">
                <div
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                    borderRadius: "16px",
                  }}
                  className="ic__ac__form__wrapper"
                >
                  <label className="ic__common__label">
                    Email Address
                    <input
                      type="email"
                      placeholder="Enter email used for subscription"
                      className="ic__common__input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="text-xs text-black/60">
                      We'll never share your email with anyone else.
                    </span>
                  </label>

                  <label className="ic__common__label mt-5">
                    SIM Card Number
                    <input
                      type="text"
                      placeholder="Write your number"
                      className="ic__common__input"
                      value={simNumber}
                      onChange={(e) => setSimNumber(e.target.value)}
                    />
                    <span className="text-xs text-black/60">
                      Enter the full number.
                    </span>
                  </label>

                  <div>
                    <button className="cursor-pointer mt-6 inline-block py-2 px-10 text-sm bg-white text-black font-medium rounded-full hover:bg-black hover:text-white transition-all">
                      Activate SIM
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "cancel" && (
              <div className="relative w-full">
                <div
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                    borderRadius: "16px",
                  }}
                  className="ic__ac__form__wrapper"
                >
                  <label className="ic__common__label">
                    Email Address
                    <input
                      type="email"
                      placeholder="Enter email used for subscription"
                      className="ic__common__input"
                    />
                    <span className="text-xs text-black/60">
                      We'll never share your email with anyone else.
                    </span>
                  </label>

                  <label className="ic__common__label mt-5">
                    SIM Card Number
                    <input
                      type="text"
                      placeholder="Write your number"
                      className="ic__common__input"
                    />
                    <span className="text-xs text-black/60">
                      Enter the full number.
                    </span>
                  </label>

                  <div>
                    <button className="cursor-pointer mt-6 inline-block py-2 px-6 bg-white text-black text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all">
                      Cancel Subscription
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActiveCancelSim;
