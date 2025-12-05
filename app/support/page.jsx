"use client";

import { useState, useRef, useEffect } from "react";
import { BsSend } from "react-icons/bs";
import { RiRobot3Line } from "react-icons/ri";
import { ImSpinner9 } from "react-icons/im";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaUser } from "react-icons/fa";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "**Hello! Welcome to Intercom SIM Cards**\n\nI'm here to help you with all your GSM SIM card needs for gate intercoms and door entry systems.\n\n### How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let aiMsg = { role: "assistant", content: "" };
      setMessages((prev) => [...prev, aiMsg]);
      const currentIndex = messages.length + 1;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        aiMsg.content += chunk;

        setMessages((prev) => {
          const updated = [...prev];
          updated[currentIndex] = { ...aiMsg };
          return updated;
        });
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ Sorry, I encountered an error. Please try again or contact us at **info@intercomsimcards.co.uk**",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className=" border-b border-gray-200  px-4 sm:px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          {/* <div className="w-11 h-11 bg-red-500 rounded-xl flex items-center justify-center shadow-lg">
            <RiRobot3Line className="w-6 h-6 text-white" />
          </div> */}
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-gray-700 truncate">
              IntercomSIM Assistant
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">
              Mon-Sat: 9 AM - 6 PM • Fast support
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6 pb-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex gap-y-3 ${
                m.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Avatar */}
              <div></div>

              {/* Message Content */}
              <div
                className={`flex-1 w-full ${
                  m.role === "user" ? "flex justify-end" : ""
                }`}
              >
                <div
                  className={`rounded-xl hover:shadow px-4 py-3 text-black/70  ${
                    m.role === "user"
                      ? "border border-black/10 "
                      : "border border-black/10 "
                  }`}
                >
                  {m.role === "user" ? (
                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                      {m.content}
                    </p>
                  ) : (
                    <div className="prose prose-sm sm:prose-base max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          // Headings
                          h1: ({ node, ...props }) => (
                            <h1
                              className="text-xl sm:text-2xl font-bold mt-4 mb-3 text-gray-600 first:mt-0"
                              {...props}
                            />
                          ),
                          h2: ({ node, ...props }) => (
                            <h2
                              className="text-lg sm:text-xl font-bold mt-4 mb-2 text-gray-600 first:mt-0"
                              {...props}
                            />
                          ),
                          h3: ({ node, ...props }) => (
                            <h3
                              className="text-base sm:text-lg font-semibold mt-3 mb-2 text-gray-600 first:mt-0"
                              {...props}
                            />
                          ),
                          // Paragraphs
                          p: ({ node, ...props }) => (
                            <p
                              className="mb-3 last:mb-0 leading-relaxed text-gray-700"
                              {...props}
                            />
                          ),
                          // Lists
                          ul: ({ node, ...props }) => (
                            <ul
                              className="space-y-2 my-3 list-none pl-0"
                              {...props}
                            />
                          ),
                          ol: ({ node, ...props }) => (
                            <ol
                              className="space-y-2 my-3 pl-6 list-decimal"
                              {...props}
                            />
                          ),
                          li: ({ node, ordered, ...props }) => (
                            <li className="flex gap-2 items-start">
                              {!ordered && (
                                <span className="text-blue-600 font-bold mt-0.5">
                                  •
                                </span>
                              )}
                              <span className="flex-1" {...props} />
                            </li>
                          ),
                          // Strong/Bold
                          strong: ({ node, ...props }) => (
                            <strong
                              className="font-bold text-gray-700"
                              {...props}
                            />
                          ),
                          // Links
                          a: ({ node, ...props }) => (
                            <a
                              className="text-blue-600 hover:text-blue-700 underline font-medium"
                              target="_blank"
                              rel="noopener noreferrer"
                              {...props}
                            />
                          ),
                          // Code
                          code: ({ node, inline, ...props }) =>
                            inline ? (
                              <code
                                className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono"
                                {...props}
                              />
                            ) : (
                              <code
                                className="block bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3"
                                {...props}
                              />
                            ),
                          // Horizontal Rule
                          hr: ({ node, ...props }) => (
                            <hr className="my-4 border-gray-200" {...props} />
                          ),
                          // Blockquote
                          blockquote: ({ node, ...props }) => (
                            <blockquote
                              className="border-l-4 border-blue-500 pl-4 italic my-3 text-gray-600"
                              {...props}
                            />
                          ),
                          // Tables
                          table: ({ node, ...props }) => (
                            <div className="overflow-x-auto my-4">
                              <table
                                className="min-w-full border border-gray-200 rounded-lg"
                                {...props}
                              />
                            </div>
                          ),
                          thead: ({ node, ...props }) => (
                            <thead className="bg-gray-50" {...props} />
                          ),
                          tbody: ({ node, ...props }) => (
                            <tbody
                              className="divide-y divide-gray-200"
                              {...props}
                            />
                          ),
                          tr: ({ node, ...props }) => (
                            <tr className="hover:bg-gray-50" {...props} />
                          ),
                          th: ({ node, ...props }) => (
                            <th
                              className="px-4 py-2 text-left font-semibold text-gray-700 border-b"
                              {...props}
                            />
                          ),
                          td: ({ node, ...props }) => (
                            <td
                              className="px-4 py-2 text-gray-700"
                              {...props}
                            />
                          ),
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div>
              <div className="bg-white inline-block rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <ImSpinner9 className="w-4 h-4 animate-spin text-black/80" />
                  <span className="text-sm text-gray-600">Typing...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 py-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 items-end">
            <textarea
              ref={inputRef}
              className="flex-1 resize-none border border-gray-300 rounded-xl px-4 py-3  outline-none min-h-[52px] max-h-32 text-sm sm:text-base"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about packages, pricing, activation..."
              rows={1}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className=" text-white p-3.5 cursor-pointer bg-[#111] rounded-xl  transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg shrink-0"
            >
              <BsSend className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-left">
            Press Enter to send • Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}
