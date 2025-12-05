"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/logo.png";


// Components
import WorksModalContent from "../_components/WorksModalContent/WorksModalContent";
import SimsCards from "../_components/SimsCards/SimsCards";



const Page = () => {
  const [activeTab, setActiveTab] = useState("support");
  

  return (
    <div className="max__width py-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <Image
          src={logo}
          alt="intercom sim logo"
          className="w-[8vw] min-w-20 h-full"
        />
        <div className="rounded-full py-2 px-8">
          <a
            href="mailto:info@intercomsimcards.co.uk"
            className="underline text-blue-600"
          >
            info@intercomsimcards.co.uk
          </a>
        </div>
      </div>

      {/* TABS + CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-10 rounded-2xl bg-gray-50">
        {/* LEFT TABS */}
        <div className="space-y-3 md:col-span-1 bg-white rounded-xl p-5 hover:shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-md border border-black/10 ${
                activeTab === tab.id
                  ? "bg-[#222] text-white"
                  : "bg-white text-black hover:bg-gray-100 transition-all duration-300"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-3 bg-white p-6 rounded-xl border border-black/10 hover:shadow-sm min-h-[50vh] max-h-[60vh] flex flex-col">
          {activeTab === "support" && (
            <div className="max-w-md mx-auto mt-10 flex flex-col h-[500px] border rounded-lg shadow-lg">
             hello 
            </div>
          )}

          {activeTab === "how" && <WorksModalContent />}
          {activeTab === "sims" && <SimsCards />}
        </div>
      </div>
    </div>
  );
};

export default Page;
