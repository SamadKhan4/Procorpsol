/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiBriefcase } from "react-icons/fi";
import bg from "../assets/MainHero.png";

const MainHero = () => {
  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[680px] lg:min-h-[760px] overflow-hidden">
      <img
        src={bg}
        alt="Corporate Solutions"
        className="absolute inset-0 w-full h-full object-cover object-[62%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-white/70 sm:bg-white/50 lg:bg-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-12 sm:py-20 lg:pt-24 lg:pb-16">
        <div className="max-w-[720px]">
          <h1 className="text-[34px] sm:text-[46px] md:text-[56px] lg:text-[62px] font-extrabold leading-[1.1] text-[#07172E]">
            Professional <br />
            <span className="text-[#0B4EA2]">Corporate Solutions</span>
            <br />
            for Your Business
          </h1>

          <div className="w-20 sm:w-24 h-1 bg-[#0B4EA2] mt-6 sm:mt-8 mb-6 sm:mb-8" />

          <p className="text-[15px] sm:text-lg md:text-xl lg:text-2xl text-[#101828] leading-relaxed max-w-[650px]">
            Simplifying company compliance, accounting, legal documentation,
            and business support services with expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-5 mt-8 sm:mt-10">
            <Link
              to="/contact"
              className="flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 bg-[#064CA5] text-white px-5 sm:px-9 py-3.5 sm:py-5 rounded-lg text-[15px] sm:text-lg lg:text-xl font-semibold shadow-md"
            >
              <FiUser className="text-2xl sm:text-3xl" />
              Get Consultation
            </Link>

            <Link
              to="/services"
              className="flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 border-2 border-[#064CA5] text-[#064CA5] px-5 sm:px-9 py-3.5 sm:py-5 rounded-lg text-[15px] sm:text-lg lg:text-xl font-semibold bg-white/70 sm:bg-white/40"
            >
              <FiBriefcase className="text-2xl sm:text-3xl" />
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
