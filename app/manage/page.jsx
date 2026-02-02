"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";

const Page = () => {
  const [emails, setEmails] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  // Fetch all data
  const fetchEmails = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api/emails");
      setEmails(res.data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  // Update status with confirmation
  const updateStatus = async (id, status) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to change the status to "${status}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, change it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#111",
      cancelButtonColor: "#d33",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.patch(`http://localhost:3000/api/emails/${id}`, { status });
      fetchEmails();

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Status updated successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error(err);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update status.",
      });
    }
  };

  // Copy to clipboard with tooltip
  const copyToClipboard = (text, fieldId) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 1500);
  };

  // Filter emails based on search
  const filteredEmails = Array.isArray(emails)
    ? emails.filter((item) => {
        const value = search.toLowerCase();
        return (
          item.fullName?.toLowerCase().includes(value) ||
          item.orderId?.toLowerCase().includes(value) ||
          item.simType?.toLowerCase().includes(value) ||
          item.addressLine1?.toLowerCase().includes(value) ||
          item.status?.toLowerCase().includes(value) ||
          item.contactNumber?.toLowerCase().includes(value) ||
          item.email?.toLowerCase().includes(value)
        );
      })
    : [];

  console.log(emails, "check data");

  return (
    <div className="max__width">
      {/* Header */}
      <div className="flex justify-between items-center  border-b border-black/10">
        <div className="flex gap-4 items-center py-5 px-6">
          <Image
            src="/logo.png"
            height={1000}
            width={1000}
            alt="logo"
            className="w-[8vw]"
          />
          <div>
            <h2 className="card__title">Admin Management Tool</h2>
            <p className="para italic">Owner – Brian Dyson</p>
          </div>
        </div>
        <div>
          <Link href="/">
            <button className="btn__sytle"> Back to website </button>
          </Link>
        </div>
      </div>

      <div className="mt-16 bg-gray-100 p-10 rounded-2xl">
        <div className="flex justify-between items-center">
          <h2 className="card__title">Customer Details</h2>

          {/* Search with Clear button */}
          <div className="mt-5 flex items-center gap-2 w-[30vw]">
            <input
              type="text"
              placeholder="Search by name, order ID, SIM type, city, status, phone"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-black/10 rounded-md px-4 py-2 outline-none "
            />
            {search && (
              <button
                className="px-6 py-2.5 rounded-md bg-[#111]  text-white font-semibold  text-sm cursor-pointer"
                onClick={() => setSearch("")}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Table */}
        <section className="mt-10 pb-10 overflow-x-auto">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <table className="min-w-[1200px] w-full  bg-white  rounded-2xl p-5 overflow-hidden">
              <thead className="border-b border-black/10 text-sm text-black/80">
                <tr>
                  <th className="p-3 text-left">SL</th>
                  <th className="p-3 text-left">Order ID</th>
                  <th className="p-3 text-left">Full Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Contact</th>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">SIM Type</th>
                  <th className="p-3 text-left">Address</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {filteredEmails.map((item, index) => (
                  <tr key={item._id} className={`border-b border-black/10 `}>
                    <td className="p-3">{index + 1}</td>
                    {/* Order ID */}
                    <td className="p-3 flex items-center gap-2 relative">
                      {item.orderId}
                      <p
                        className="cursor-pointer text-gray-400 hover:text-gray-700"
                        onClick={() =>
                          copyToClipboard(item.orderId, `order-${item._id}`)
                        }
                      >
                        Copy
                      </p>
                      {copiedField === `order-${item._id}` && (
                        <span className="absolute top-0 left-full ml-2 px-2 py-1 text-xs bg-black text-white rounded">
                          Copied!
                        </span>
                      )}
                    </td>

                    {/* Full Name */}

                    <td className="p-3">{item.fullName}</td>

                    {/* Email */}
                    <td className="p-3 flex items-center gap-2 relative">
                      {item.email}
                      <p
                        className="cursor-pointer text-gray-400 hover:text-gray-700"
                        onClick={() =>
                          copyToClipboard(item.email, `email-${item._id}`)
                        }
                      >
                        Copy
                      </p>
                      {copiedField === `email-${item._id}` && (
                        <span className="absolute top-0 left-full ml-2 px-2 py-1 text-xs bg-black text-white rounded">
                          Copied!
                        </span>
                      )}
                    </td>

                    {/* Contact */}
                    <td className="p-3  relative">
                      <div className="flex items-center gap-2">
                        {item.contactNumber}
                        <p
                          className="cursor-pointer text-gray-400 hover:text-gray-700"
                          onClick={() =>
                            copyToClipboard(
                              item.contactNumber,
                              `contact-${item.orderId}`,
                            )
                          }
                        >
                          Copy
                        </p>
                      </div>
                      {copiedField === `contact-${item.orderId}` && (
                        <span className="absolute top-0 left-full ml-2 px-2 py-1 text-xs bg-black text-white rounded">
                          Copied!
                        </span>
                      )}
                    </td>

                    {/* Company */}
                    <td className="p-3">{item.companyNameApplicable || "-"}</td>

                    {/* SIM Type */}
                    <td className="p-3 capitalize">{item.simType}</td>

                    {/* Address */}
                    <td className="p-3 flex items-center gap-2 relative">
                      {item.addressLine1}
                      <p
                        className="cursor-pointer text-gray-400 hover:text-gray-700"
                        onClick={() =>
                          copyToClipboard(
                            item.addressLine1,
                            `address-${item._id}`,
                          )
                        }
                      >
                        Copy
                      </p>
                      {copiedField === `address-${item._id}` && (
                        <span className="absolute top-0 left-full ml-2 px-2 py-1 text-xs bg-black text-white rounded">
                          Copied!
                        </span>
                      )}
                    </td>

                    {/* Status Dropdown */}
                    <td className="p-3">
                      <select
                        value={item.status} // ALWAYS backend value
                        onChange={(e) =>
                          updateStatus(item.orderId, e.target.value)
                        }
                        className={`border rounded px-2 py-1 text-sm cursor-pointer
      ${
        item.status === "complete"
          ? "bg-green-50 border-green-400"
          : item.status === "progress"
            ? "bg-blue-50 border-blue-400"
            : "bg-yellow-50 border-yellow-400"
      }
    `}
                      >
                        {/* Always show backend status */}
                        <option value="pending">Pending</option>
                        <option value="progress">In Progress</option>
                        <option value="complete">Complete</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  );
};

export default Page;
