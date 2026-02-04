// import React from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { IoLogoYoutube } from "react-icons/io";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaTiktok } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer>
//       <div className=" px-[5%] mb-5 xl:mb-10  w-full fixed bottom-0 left-0  ">
//         <div className="ic__h__footer__wrapper ">
//           <div className="ic__h__footer__email para">
//             <MdEmail size={20} />
//             <span>info@intercomsimcards.co.uk</span>
//           </div>

//           <div className="ic__h__icon__wrapper">
//             <a href="https://www.facebook.com/intercomsimcards/" target="_blank" className="ic__h__footer__icon">
//               <FaFacebookF size={20} />
//             </a>
//               <a href="https://www.linkedin.com/company/intercom-sim-cards" target="_blank" className="ic__h__footer__icon">
//               <FaLinkedinIn size={20} />
//             </a>
//             <a href="https://x.com/Intercomsim" className="ic__h__footer__icon">
//               <FaXTwitter size={20} />
//             </a>
//             <a href="https://www.youtube.com/@intercomsimcards" className="ic__h__footer__icon">
//               <IoLogoYoutube size={20} />
//             </a>
//             <a href="https://www.tiktok.com/@intercomsimcards" className="ic__h__footer__icon">
//               <FaTiktok size={20} />
//             </a>

//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-black/10 text-black/80 section__top">
      <div className="max__width  flex flex-col md:flex-row justify-between gap-8 py-10">
        {/* Brand / Logo */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.png"
            height={1000}
            width={1000}
            alt="Intercom SIM Cards Logo"
            className="w-[10vw]"
          />
          <p className="text-gray-400 max-w-xs">
            Providing professional GSM intercom systems, SIM-enabled intercoms,
            and automated gate installations across the UK.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h3 className="card__title mb-2">Quick Links</h3>
          <a href="/" className="hover:text-black/80 transition">
            Home
          </a>
          <a
            href="/intercom-sim-cards"
            className="hover:text-black/80 transition"
          >
            Sim Cards
          </a>
          <a
            href="/active-cancel-sims"
            className="hover:text-black/80 transition"
          >
            Activate/Cancel Sims Cards
          </a>
          <a href="/contact" className="hover:text-black/80 transition">
            Contact Us
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="card__title mb-2">Contact</h3>
          {/* <p className="flex items-center gap-2">
            <HiPhone className="text-gray-400" />
            <a href="tel:01494919047" className="hover:underline">
              01494 919047
            </a>
          </p> */}

          {/* <p className="flex items-center gap-2">
            <HiPhone className="text-gray-400" />
            <a href="tel:078894648129" className="hover:underline">
              07889 4648129
            </a>
          </p> */}

          <p className="flex items-center gap-2">
            <HiMail className="text-gray-400" />
            <a
              href="mailto:info@intercomsimcards.co.uk"
              className="hover:underline"
            >
              info@intercomsimcards.co.uk
            </a>
          </p>

          <p className="flex items-center gap-2">
            <HiLocationMarker className="text-gray-400" /> Weedon Hill Farm,
            Weedon Hill, Amersham, HP6 5RH .
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <h3 className="card__title mb-2">Follow Us</h3>
          <div className="ic__h__icon__wrapper">
            <a
              href="https://www.facebook.com/intercomsimcards/"
              target="_blank"
              className="ic__h__footer__icon"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/intercom-sim-cards"
              target="_blank"
              className="ic__h__footer__icon"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a href="https://x.com/Intercomsim" className="ic__h__footer__icon">
              <FaXTwitter size={20} />
            </a>

            <a
              href="https://www.youtube.com/@intercomsimcards"
              className="ic__h__footer__icon"
            >
              <IoLogoYoutube size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@intercomsimcards"
              className="ic__h__footer__icon"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-500 text-sm pb-10">
        &copy; {new Date().getFullYear()} Intercom Sim Cards. All rights reserved.
        <span className="block mt-1">
          Developed by{" "}
          <span className="font-medium text-gray-600 underline underline-offset-2"><a href="http://resolveidea.com/" target="_blank">Resolve Idea</a></span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
