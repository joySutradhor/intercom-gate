import React from "react";
import CommonBtn from "../Utilites/CommonBtn/CommonBtn";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";

import logo from "@/public/logo.jpg"
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="border-b border-black/10">
     


      {/* Main Navbar */}
      <nav className="">
        <div className="flex items-center justify-between max__width">
          {/* <h3 className="text-lg font-semibold border border-black/10 rounded-full py-1.5 px-8">
          </h3> */}
           <Image src={logo} alt="intercom sim logo" className="w-[5vw] h-full" height={1000} width={1000} />

          <div className="flex gap-x-5 items-center">
            {/* <CommonBtn
              btnText="Sign Up"
              url="/gate-form"
              icon={MdOutlineArrowOutward}
              className="shadow"
            /> */}

            <CommonBtn
              className="bg-black text-white px-6"
              btnText="Contact Us"
              url="/contact"
              icon={MdOutlineArrowOutward}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
