"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/logo.png";

// ICONS
import { MdSupportAgent } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaSimCard } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

// Components
import WorksModalContent from "../_components/WorksModalContent/WorksModalContent";
import SimsCards from "../_components/SimsCards/SimsCards";

// AI Chat
import { useChat } from "@ai-sdk/react";

const Page = () => {
  const [activeTab, setActiveTab] = useState("support");

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: "/api/gemini",
    });

    console.log(messages , "check message" , input, handleInputChange )

  const scrollRef = useRef(null);

  // Auto-scroll messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const tabs = [
    {
      id: "support",
      label: "Customer Support",
      icon: <MdSupportAgent size={22} />,
    },
    { id: "how", label: "How It Works", icon: <IoIosSettings size={22} /> },
    { id: "sims", label: "SIM Cards", icon: <FaSimCard size={22} /> },
  ];

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
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="sticky top-0 bg-white z-10 mb-2">
                <h2 className="text-xl font-semibold">Customer Support</h2>
              </div>

              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto space-y-3 p-2 bg-gray-50 rounded-lg"
                ref={scrollRef}
              >
                {messages.length === 0 && (
                  <p className="text-center text-black/50">
                    Ask anything about our SIM services.
                  </p>
                )}
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-2 rounded-xl max-w-[80%] text-sm ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="px-4 py-2 rounded-xl bg-gray-200 text-black text-sm">
                      Typing...
                    </div>
                  </div>
                )}

                {error && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Try again.
                  </p>
                )}
              </div>

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 mt-2 sticky bottom-0 bg-white pt-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask anything about our SIM services..."
                  className="flex-1 border border-black/10 rounded-lg px-4 py-2 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-2 bg-[#222] text-white rounded-lg"
                >
                  Send <BsSend size={18} />
                </button>
              </form>
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
