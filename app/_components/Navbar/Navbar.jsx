"use client";
import logo from "@/public/logo-intercom.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const handleSearch = async () => {
  //   // ✅ EMPTY CHECK FIRST
  //   if (!orderId.trim()) {
  //     setError("Please enter a valid Order ID");
  //     setOrder(null); // ⬅ clear previous result
  //     return;
  //   }

  //   setLoading(true);
  //   setError("");
  //   setOrder(null);

  //   try {
  //     const res = await fetch(`/api/emails/${orderId}`);
  //     const data = await res.json();

  //     if (!res.ok || !data?.data?.length) {
  //       throw new Error("Order not found");
  //     }

  //     setOrder(data.data[0]);
  //   } catch (err) {
  //     setError(err.message || "Something went wrong");
  //   } finally {
  //     setLoading(false);
  //     setOrderId(""); // optional: clear input after search
  //   }
  // };

  return (
    <nav className="grid grid-cols-3  justify-between items-center px-[5vw] py-10">
      <div className="">
        <Link href="/">
          <Image
            src={logo}
            alt="intercom sim logo"
            className="w-[5vw] h-full "
            height={1000}
            width={1000}
          />
        </Link>
      </div>

      <div>
        <ul className="flex gap-x-10 text-lg font-medium bg-white backdrop-blur-md py-2 px-10 cursor-pointer rounded-full">
          <Link href="/">
            <li>Home</li>
          </Link>
          {/* <li>About Us</li> */}
          <Link href="/intercom-sim-cards">
            <li>SIM Cards</li>
          </Link>
          <Link href="/active-cancel-sims">
            <li>Activate/Cancel Sims </li>
          </Link>
          {/* <Link href="/blogs">
            <li>Blogs</li>
            </Link> */}
          <Link href="/contact">
            <li>Contact </li>
          </Link>
        </ul>
      </div>

      <div className="flex justify-end">
        <Link href="/contact">
          <button className="btn__sytle"> Contact Us </button>
        </Link>
      </div>

      {/* <div className="cursor-pointer">
        <div className="flex gap-3   justify-end ">
       

          <input
            type="text"
            value={orderId}
            onChange={(e) => {
              setOrderId(e.target.value);
              setError("");
              setOrder(null);
            }}
            placeholder="Search by Order ID"
            className="w-[40%] bg-gray-100 border border-gray-300 rounded-full py-2 px-5 outline-none"
          />

          <button
            onClick={handleSearch}
            className="btn__sytle whitespace-nowrap"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

 
        {error && (
          <p className="text-black/80 text-sm mt-3">
            <span className="text-red-500">Order not found.</span> Please check
            your Order ID or email us at{" "}
            <a
              href="mailto:info@intercomsimcards.co.uk/"
              className="underline font-medium text-green-600"
            >
              info@intercomsimcards.co.uk
            </a>{" "}
            for assistance.
          </p>
        )}

  
        {order && (
          <div className="mt-6  ">
            <p className="text-gray-700 text-left mt-2 leading-relaxed">
              Hello <strong>{order.fullName}</strong>, We’ve found your order.
              Your <strong className="capitalize">{order.simType}</strong> SIM
              card is currently{" "}
              <strong className="capitalize">{order.status}</strong>.
            </p>

            <p className="text-gray-800 text-sm mt-10 pt-5 border-t border-black/10">
              If you have any questions or need help with activation, our
              support team is happy to assist. You can email us at{" "}
              <a
                href="mailto:info@intercomsimcards.co.uk"
                className="underline font-medium"
              >
                info@intercomsimcards.co.uk
              </a>
            </p>
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
