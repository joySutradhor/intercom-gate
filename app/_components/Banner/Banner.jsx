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

const Banner = () => {
  const [works, setWorks] = useState(false);
  return (
    <div className="max__width">
      <div className="grid grid-cols-2 items-center gap-[10%]">
        <div className="">
          <h2 className="title "> 4G & GSM Intercom SIM Cards</h2>
          <div className="pt-5 pb-10">
            <p className="mb-2 para">
              Welcome to Intercom SIM Cards , the easy and affordable way to
              keep your intercom or gate entry system connected.
            </p>
            <p className="para">
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

        <div className="overflow-hidden border rounded-2xl border-black/10">
          <Image
            src={hero}
            // height={1000}
            // width={1000}
            alt="intercom sim banner"
            className="h-[60vh] w-full object-cover  hover:scale-125 ease-in-out duration-1000 transition-all  "
          />
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
