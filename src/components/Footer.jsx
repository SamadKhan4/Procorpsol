/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "News", to: "/news" },
  { label: "Switch to Procorpsol", to: "/contact" },
  { label: "Contact Us", to: "/contact" },
];

const serviceLinks = [
  { label: "Secretarial Services", to: "/services/secretarial" },
  { label: "Company Incorporation", to: "/services/incorporation" },
  { label: "Accounting & Audit Services", to: "/services/accounting" },
  { label: "Company Compliance", to: "/services/compliance" },
  { label: "Liaisoning Services", to: "/services/liaisoning" },
  { label: "Legal Documentation", to: "/services/legal" },
];

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white px-5 sm:px-6 md:px-16 lg:px-[100px] pt-[30px] pb-[36px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.45fr_1.1fr_1.65fr_2.1fr] gap-10 lg:gap-12">
          
          <div>
            <div className="bg-white w-fit px-1 pt-1 pb-0">
              <h2 className="text-[30px] sm:text-[34px] leading-none font-extrabold tracking-tight">
                <span className="text-[#1513B8]">PRO</span>
                <span className="text-[#E60000]">CORP</span>
                <span className="text-[#17A86B]">SOL</span>
              </h2>
              <p className="text-[#A40000] text-[12px] sm:text-[14px] font-bold text-center mt-1">
                Professional Corporate Solutions
              </p>
            </div>

            <h3 className="text-[20px] font-semibold mt-[34px] mb-3">
              About Company.
            </h3>

            <p className="text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.45] sm:leading-[1.32] text-white/90 max-w-[270px]">
              PROCORPSOL provides a comprehensive suite of business solutions
              tailored to your specific needs.
            </p>

            <div className="flex items-center gap-2 mt-[30px]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit us on Facebook"
                className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center text-white text-sm"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit us on Instagram"
                className="w-6 h-6 rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white text-sm"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit us on LinkedIn"
                className="w-6 h-6 rounded bg-[#0A66C2] flex items-center justify-center text-white text-sm"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit us on X"
                className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-sm"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold mb-[30px]">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-[20px] text-[15px] sm:text-[16px] text-white/85">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-[#18B76B]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold mb-[30px]">Services</h3>
            <ul className="space-y-3 sm:space-y-[20px] text-[15px] sm:text-[16px] text-white/85">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-[#18B76B]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold mb-[30px]">Contact</h3>

            <h4 className="text-[17px] font-bold mb-[24px]">
              Operational Address:
            </h4>

            <p className="text-[15px] sm:text-[16px] leading-[1.45] sm:leading-[1.35] text-white/85 max-w-[360px]">
              Plot No. 47, 3rd Floor, Kotwal Nagar, Khamla, Laxmi Nagar
              (nagpur), Nagpur, Nagpur, Maharashtra, India, 440022
            </p>

            <a
              href="mailto:hr@akulkarnipprocorpsol.com"
              className="block text-[14px] sm:text-[16px] font-bold mt-[22px] underline break-all"
            >
              hr@akulkarnipprocorpsol.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-[28px] pt-[20px] flex flex-col md:flex-row justify-between gap-4 text-[14px] sm:text-[16px] text-white/90">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="transition hover:text-[#18B76B]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-[#18B76B]">
              Terms & Conditions
            </Link>
          </div>

          <p>
            Copyright © 2026 Designed and developed by{" "}
            <span className="underline"><a href="https://www.adbornsolutions.com" target="_blank" rel="noreferrer">Adbornsolutions.</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
