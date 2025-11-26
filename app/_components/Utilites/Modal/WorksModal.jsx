"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const WorksModal = ({ open, onClose, title, description, descriptionTwo }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-xl flex items-center justify-center z-50 ">
      <div className="border border-white/10 backdrop-blur-xl  max-w-3xl mx-auto rounded-xl hover:shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 hover:text-white text-red-500 text-3xl cursor-pointer"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-3xl text-white font-bold mb-3  border-b border-black/10 pb-3">
          {title}
        </h2>

        {/* Description */}
        <p className=" para">{description}</p>
        <p className=" mt-2 para">{descriptionTwo}</p>

        <div className="border-t border-white/10 mt-10 pt-5">
          <Link href="/gate-form">
            <button className="flex items-center gap-2 cursor-pointer hover:text-white hover:bg-[#111] py-2 px-8 rounded-full text-sm font-medium border border-black/5  shadow ease-in-out duration-500  text-black bg-white ">
              Sign Up Now{" "}
              <span>
                {" "}
                <MdOutlineArrowOutward />{" "}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorksModal;
