"use client";
import Image from "next/image";
import React, { useState } from "react";
import hero from "@/public/sim.jpg";
import CommonBtn from "../Utilites/CommonBtn/CommonBtn";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";
import { BsSim } from "react-icons/bs";
import Link from "next/link";
import WorksModal from "../Utilites/Modal/WorksModal";
import IntercomSim from "../IntercomSim/IntercomSim";
import logo from "@/public/logo.png";

const Banner = () => {
  const [works, setWorks] = useState(false);
  const [intercom, seIntercom] = useState(false);
  return (
    <div className="max__width h-screen">
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
      <div className="flex justify-center items-center h-full  max-w-4xl mx-auto  ">
        <div className=" bg-black/10 backdrop-blur-xl p-10 rounded-2xl">
          <h2 className="title "> 4G & GSM Intercom SIM Cards</h2>
          <div className="pt-5 pb-10">
            <p className="mb-2 para max-w-2xl  ">
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
              className="bg-black text-white px-6"
              btnText="How Its Works"
              url="/contact"
              icon={MdOutlineArrowOutward}
            /> */}

            <button
              onClick={() => setWorks(true)}
              className="flex items-center gap-2 cursor-pointer bg-[#111] py-2 px-8 rounded-full text-sm font-medium border border-black/5  shadow ease-in-out duration-500  text-white"
            >
              How Its Works{" "}
              <span>
                {" "}
                <MdOutlineArrowOutward />{" "}
              </span>
            </button>

            <button
              onClick={() => seIntercom(true)}
              className="flex items-center gap-2 cursor-pointer bg-white py-2 px-8 rounded-full text-sm font-medium border border-black/5  shadow ease-in-out duration-500  text-black"
            >
              Intercom Sims
              <span>
                {" "}
                <MdOutlineArrowOutward />{" "}
              </span>
            </button>
          </div>
        </div>

        <div>
          {intercom && (
            <div
              className=" fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-50   px-10   rounded-2xl"
              id="intercom"
            >
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
                          Designed for single residential properties (one
                          household).
                        </p>
                        <h4>
                          Price:{" "}
                          <span className="text-2xl font-bold italic">
                            £5.00
                          </span>{" "}
                          per month
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
                          clip-path: polygon(
                            0 0,
                            100% 0,
                            100% 100%,
                            0 100%,
                            100% 0
                          );
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
                          <span className="text-2xl font-bold italic">
                            £15.00
                          </span>{" "}
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
                          clip-path: polygon(
                            0 0,
                            100% 0,
                            100% 100%,
                            0 100%,
                            100% 0
                          );
                        }
                      `}</style>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

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
    </div>
  );
};

export default Banner;
