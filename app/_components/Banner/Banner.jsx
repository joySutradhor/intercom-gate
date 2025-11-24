"use client";
import Image from "next/image";
import React, { useState } from "react";
import hero from "@/public/banner.jpg";
import CommonBtn from "../Utilites/CommonBtn/CommonBtn";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";
import { BsSim } from "react-icons/bs";
import Link from "next/link";
import WorksModal from "../Utilites/Modal/WorksModal";

const Banner = () => {
  const [works, setWorks] = useState(false);
  return (
    <div className="py-[5vh] max__width">
      <div className="grid grid-cols-2 items-center gap-[10%]">
        <div className="w-[80%]">
          <h2 className="title"> 4G & GSM Intercom SIM Cards</h2>
          <div className="pt-5 pb-10">
            <p className="mb-2">
              Welcome to Intercom SIM Cards , the easy and affordable way to
              keep your intercom or gate entry system connected.
            </p>
            <p className="">
              Intercom SIM Cards Simple, Reliable & Low-Cost Perfect for Gate
              Intercoms, Door Entry Systems & GSM Access Units
            </p>
          </div>
          <div className="flex gap-x-5 items-center">
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

            <CommonBtn
              btnText="Get Sim"
              url="/gate-form"
              icon={MdOutlineArrowOutward}
              className="shadow"
            />
          </div>
        </div>

        <div>
          <Image
            src={hero}
            // height={1000}
            // width={1000}
            alt="intercom sim banner"
            className="h-[35vh] w-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* intercom sims */}
      <div className=" bg-gray-50 mt-10 px-10 rounded-2xl" id="intercom">
        <div className=" ">
          <div className="flex items-center justify-between">
            <div>
              {/* <div>
                <CommonBtn
                  btnText="Intercom Sims"
                  url="/"
                  className="shadow mb-5"
                  icon={BsSim}
                />
              </div> */}
              <h2 className="subTitle mb-2">30-Day Rolling Contract </h2>
              <p>
                All SIMs operate on a 30-day rolling contract, giving you
                flexibility with no long-term commitment.
              </p>
            </div>
            {/* need help */}
            <div className="py-[2vh]">
              <h3 className="text-xl text-black/80 font-medium mb-2">
                Need any help ?
              </h3>
              <div>
                <a href="tel:01627505755" className="flex gap-3 items-center">
                  <div className="bg-white rounded-full p-3">
                    <SlCallOut />
                  </div>
                  <p className="font-semibold hover:text-blue-700 transition">
                    016 27 50 57 55
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-5 pb-10 ">
            <div className="p-5 bg-white rounded-2xl group cursor-pointer shadow">
              <h5 className="font-semibold mb-2 text-sm">
                30-day rolling contract on the O2 network
              </h5>
              <div>
                <h3 className="text-xl font-bold text-black/80 mb-1">
                  Domestic Sim
                </h3>
                <p className="mb-4 ">
                  Designed for single residential properties (one household).{" "}
                </p>
                <h4 className="">
                  Price:{" "}
                  <span className="text-2xl font-bold italic">£5.00</span> per
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
            </div>

            {/* second card */}
            <div className="p-5 bg-white rounded-2xl group cursor-pointer shadow">
              <h5 className="font-semibold mb-2 text-sm">
                30-day rolling contract on the O2 network
              </h5>
              <div>
                <h3 className="text-xl font-bold text-black/80 mb-1">
                  Commercial SIMS
                </h3>
                <p className="mb-4 ">
                  Ideal for flats, apartment blocks, offices
                </p>
                <h4 className="">
                  Price:{" "}
                  <span className="text-2xl font-bold italic">£15.00</span> per
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
            </div>
          </div>
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
