"use client";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const WorksModal = ({ open, onClose, title, description, descriptionTwo }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[30%] rounded-xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 hover:text-gray-600 text-red-500 text-3xl cursor-pointer"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-3  border-b border-black/10 pb-3">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <p className="text-gray-600 leading-relaxed mt-2 font-medium">
          {descriptionTwo}
        </p>

        <div className="border-t border-black/10 mt-10 pt-5">
          <button className="flex items-center gap-2 cursor-pointer bg-[#111] py-2 px-8 rounded-full text-sm font-medium border border-black/5  shadow ease-in-out duration-500  text-white ">
            Sign Up Now{" "}
            <span>
              {" "}
              <MdOutlineArrowOutward />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksModal;
