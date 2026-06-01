/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";

const TopNavbar = () => {
  return (
    <div className="relative w-full bg-[#0B4D73] text-white text-sm">
      <div className="relative lg:absolute left-0 top-0 bg-[#18B76B] min-h-[52px] lg:h-[60px] px-4 sm:px-6 lg:px-10 pr-6 sm:pr-10 lg:pr-20 rounded-br-[38px] sm:rounded-br-[64px] lg:rounded-br-[80px] flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
          <span className="text-sm sm:text-base whitespace-nowrap">Follow Us:</span>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit us on Facebook"
            className="w-8 h-8 shrink-0 rounded-full bg-white text-[#0B4D73] flex items-center justify-center"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit us on Instagram"
            className="w-8 h-8 shrink-0 rounded-full bg-white text-[#0B4D73] flex items-center justify-center"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit us on LinkedIn"
            className="w-8 h-8 shrink-0 rounded-full bg-white text-[#0B4D73] flex items-center justify-center"
          >
            <FaLinkedinIn />
          </a>
      </div>

      <div className="max-w-7xl mx-auto min-h-[92px] sm:min-h-[76px] lg:min-h-[60px] flex items-center justify-center lg:justify-end px-4 sm:px-6 lg:px-12 py-3 lg:py-0 lg:pl-[360px]">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-x-5 lg:gap-8 text-xs sm:text-sm lg:text-base text-center sm:text-left">
          <a href="tel:+917569879002" className="flex items-center gap-2">
            <FiPhone className="text-[#18B76B] shrink-0" />
            <span>7569879002</span>
          </a>

          <a href="mailto:hr@akulkarnipprocorpsol.com" className="flex min-w-0 items-center gap-2">
            <FiMail className="text-[#18B76B] shrink-0" />
            <span className="break-all sm:break-normal">hr@akulkarnipprocorpsol.com</span>
          </a>

          <div className="flex items-center gap-2">
            <FiClock className="text-[#18B76B] shrink-0" />
            <span className="whitespace-nowrap">Mon - Fri</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
