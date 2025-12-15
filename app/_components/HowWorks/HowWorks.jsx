"use client";
import Image from "next/image";
import React, { useState } from "react";
import hero from "@/public/banner.jpg";
import CommonBtn from "../Utilites/CommonBtn/CommonBtn";
import { MdEmail, MdOutlineArrowOutward, MdPhone } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";
import { BsSim } from "react-icons/bs";
import Link from "next/link";
import WorksModal from "../Utilites/Modal/WorksModal";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const HowWorks = () => {
  const [works, setWorks] = useState(false);
  return (
    <div className="pt-[15vh] max__width">
      <div className="grid grid-cols-2 items-center gap-[5%] h-full">
        <div className="p-10 border bg-white border-black/10 rounded-2xl h-full">
          <h2 className="subTitle"> How It Works</h2>
          <div className="pt-5 pb-10">
            <p className="mb-2">
              Once your SIM is installed, we allow a 3-month usage period.
              Charged at the rate stated. This gives us enough data to calculate
              your average consumption and ensure you are on the most suitable
              package.
            </p>
            <p className="">
              If any changes are required, you will always be informed in
              advance. Thanks .
            </p>
          </div>
          <div className="flex gap-x-5 items-center">
            {/* <CommonBtn
              className="bg-black text-white px-6"
              btnText="How Its Works"
              url="/contact"
              icon={MdOutlineArrowOutward}
            /> */}

            <Link href="/">
              <button className="flex items-center gap-2 cursor-pointer bg-[#111] py-2 px-8 rounded-full text-sm font-medium border border-black/5  shadow ease-in-out duration-500  text-white">
                Intercom Sims{" "}
                <span>
                  {" "}
                  <MdOutlineArrowOutward />{" "}
                </span>
              </button>
            </Link>

            <CommonBtn
              btnText="Get Sim"
              url="/gate-form"
              icon={MdOutlineArrowOutward}
              className="shadow"
            />
          </div>
        </div>

        {/* intercom sims */}
        <div className=" bg-white border border-black/10 p-10 rounded-2xl">
          <div className=" ">
            <div className="flex flex-col     ">
              <div>
                <div>
                  <CommonBtn
                    btnText="Gate Sim"
                    url="/"
                    className="shadow mb-5"
                    icon={BsSim}
                  />
                </div>
                <h2 className="subTitle mb-2">30-Day Rollings  Contract </h2>
                <p>
                  All SIMs operate on a 30-day rolling contract, giving you
                  flexibility with no long-term commitment.
                </p>
              </div>
            </div>

            <div className="">
              <div className="mt-5 p-5  bg-gray-50  rounded-2xl group cursor-pointer relative">
                <h5 className="font-semibold mb-2 text-sm">
                  30-day rolling contract on the O2 network
                </h5>
                <div>
                  <h3 className="text-xl font-bold text-black/80 mb-1">
                    Gate SIM
                  </h3>
                  <p className="mb-1 ">
                    Ideal for dial to open devices, no more top ups.
                  </p>
                  <p className="mb-4 font-medium italic">Billed annually</p>
                  <h4 className="">
                    Price:{" "}
                    <span className="text-2xl font-bold italic">£1.75</span> per
                    month
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
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-white clip-sim"></div>

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

      <div className="pb-[15vh]">
        <div className="bg-gray-100 py-5 px-10 rounded-full mt-10 ">
          <div className=" text-black text-xl ">
            <div className="max__width flex items-center justify-between py-2">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <MdEmail size={20} />
                  <span>info@gatesim.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
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
  );
};

export default HowWorks;
