import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
  return (
    <footer>
      <div className=" px-[5%] mb-5 xl:mb-10  w-full fixed bottom-0 left-0  ">
        <div className="ic__h__footer__wrapper ">
          <div className="ic__h__footer__email para">
            <MdEmail size={20} />
            <span>info@intercomsimcards.co.uk</span>
          </div>

          <div className="ic__h__icon__wrapper">
            <a href="#" className="ic__h__footer__icon">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="ic__h__footer__icon">
              <IoLogoYoutube size={20} />
            </a>
            {/* <a href="#" className="ic__h__footer__icon">
              <FaLinkedinIn size={20} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
