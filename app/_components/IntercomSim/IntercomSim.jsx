"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const IntercomSim = () => {
  return (
    <div className="">
      {/* intercom sims */}
      <div className="max__width  bg-black/10 backdrop-blur-md  px-10   rounded-2xl" id="intercom">
        <div className=" py-10">
          <div className="flex items-center justify-center text-center pb-5">
            <div className="text-left">
        
              <h2 className="subTitle mb-2">30-Day Rolling Contract </h2>
              <p className="para">
                All SIMs operate on a 30-day rolling contract, giving you
                flexibility with no long-term commitment.
              </p>
            </div>
          
          </div>

          <div className="">
            <div className="grid grid-cols-1 gap-5   ">
              <div className="relative p-5 bg-black/10 backdrop-blur-sm rounded-2xl group cursor-pointer text-white    overflow-hidden">
                <h5 className="font-semibold mb-2 text-sm">
                  30-day rolling contract on the O2 network
                </h5>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Domestic Sim
                  </h3>
                  <p className="mb-4">
                    Designed for single residential properties (one household).
                  </p>
                  <h4>
                    Price:{" "}
                    <span className="text-2xl font-bold italic">£5.00</span> per
                    month
                  </h4>
                </div>

                <div className="mt-8">
                  <Link href="/gate-form">
                    <button className="flex items-center gap-2 cursor-pointer group-hover:bg-[#111] py-2 px-8 rounded-full text-sm font-medium border border-black/5 bg-white text-black ease-in-out duration-500 group-hover:text-white">
                      Sign Up
                      <span>
                        <MdOutlineArrowOutward />
                      </span>
                    </button>
                  </Link>
                </div>

                {/* SIM card style notch */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-100 clip-sim"></div>

                <style jsx>{`
                  .clip-sim {
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 100% 0);
                  }
                `}</style>
              </div>

              {/* second card */}
              <div className="p-5 bg-black/10 backdrop-blur-sm rounded-2xl group cursor-pointer text-white   relative">
                <h5 className="font-semibold mb-2 text-sm">
                  30-day rolling contract on the O2 network
                </h5>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Commercial SIMS
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
                  <Link href="/gate-form">
                    <button className="flex items-center gap-2 cursor-pointer group-hover:bg-[#111] py-2 px-8 rounded-full text-sm font-medium border border-black/5 bg-white text-black   ease-in-out duration-500  group-hover:text-white">
                      Sign Up
                      <span>
                        {" "}
                        <MdOutlineArrowOutward />{" "}
                      </span>
                    </button>
                  </Link>
                </div>

                {/* SIM card style notch */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-100 clip-sim"></div>

                <style jsx>{`
                  .clip-sim {
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 100% 0);
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntercomSim;
