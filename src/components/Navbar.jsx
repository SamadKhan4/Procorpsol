/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const serviceLinks = [
  { label: "Secretarial Services", path: "/services/secretarial" },
  { label: "Company Incorporation", path: "/services/incorporation" },
  { label: "Accounting & Audit Services", path: "/services/accounting" },
  { label: "Company Compliance", path: "/services/compliance" },
  { label: "Liaisoning Services", path: "/services/liaisoning" },
  { label: "Legal Documentation", path: "/services/legal" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto min-h-[68px] md:min-h-[85px] flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-12">
        <Link to="/" className="min-w-0 shrink-0">
          <h1 className="text-lg sm:text-2xl font-extrabold leading-none tracking-tight">
            <span className="text-[#1600A8]">PRO</span>
            <span className="text-[#E60000]">CORP</span>
            <span className="text-[#18B76B]">SOL</span>
          </h1>
          <p className="max-w-[185px] text-[8px] sm:text-[10px] font-semibold text-[#E60000] leading-tight">
            Professional Corporate Solutions
          </p>
        </Link>

        <div className="flex items-center gap-3 lg:gap-8">
          <div className="hidden lg:flex items-center gap-7 text-[#111827] font-medium">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>

            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <Link to="/services" className="flex items-center gap-1 py-8">
                Service <FiChevronDown />
              </Link>

              {serviceOpen && (
                <div className="absolute left-0 top-full w-[260px] bg-white shadow-xl rounded-lg border border-gray-100 py-3">
                  {serviceLinks.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-5 py-3 text-sm hover:bg-[#18B76B]/10 hover:text-[#18B76B]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <Link
            to="/contact"
            className="hidden md:flex items-center gap-3 bg-[#18B76B] text-white px-6 py-3 rounded-lg font-medium"
          >
            Let's Talk <FiArrowRight />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#111827]"
          >
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full max-h-[calc(100vh-68px)] overflow-y-auto border-t border-[#E5E7EB] bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
            <div className="flex flex-col gap-1 text-[#111827] font-medium">
              <Link to="/" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3">Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3">About Us</Link>

              <button
                type="button"
                onClick={() => setServiceOpen((open) => !open)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left"
              >
                Service
                <FiChevronDown className={serviceOpen ? "rotate-180 transition" : "transition"} />
              </button>

              {serviceOpen && (
                <div className="ml-4 flex flex-col border-l border-gray-200 pl-4">
                  <Link to="/services" onClick={() => setIsOpen(false)} className="py-2 text-sm">All Services</Link>
                  {serviceLinks.map((item, index) => (
                    <Link key={index} to={item.path} onClick={() => setIsOpen(false)} className="py-2 text-sm">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link to="/news" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3">News</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3">Contact</Link>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-3 bg-[#18B76B] text-white px-6 py-3 rounded-lg font-medium"
            >
              Let's Talk <FiArrowRight />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
