import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";




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
            <a href="https://www.facebook.com/intercomsimcards/" target="_blank" className="ic__h__footer__icon">
              <FaFacebookF size={20} />
            </a>
              <a href="https://www.linkedin.com/company/intercom-sim-cards" target="_blank" className="ic__h__footer__icon">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://x.com/Intercomsim" className="ic__h__footer__icon">
              <FaXTwitter size={20} />
            </a>
            <a href="https://www.youtube.com/@intercomsimcards" className="ic__h__footer__icon">
              <IoLogoYoutube size={20} />
            </a>
            <a href="https://www.tiktok.com/@intercomsimcards" className="ic__h__footer__icon">
              <FaTiktok size={20} />
            </a>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
