/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import bg from "../assets/Hero.png";

const Hero = ({
  title = "Your Trusted Business Compliance Partner",

  description = [
    "At PROCORPSOL, we believe every business deserves reliable support to operate smoothly and grow confidently. We provide professional corporate solutions designed to simplify complex business processes and help organizations stay compliant with changing regulations.",

    "With expertise in company compliance, secretarial services, accounting, legal documentation, company incorporation, and business support, we work as an extended partner to businesses across different industries."
  ],

  buttonText = "Let's Talk",
  buttonLink = "/contact",
}) => {
  return (
    <section className="relative w-full bg-[#F8F8F8] py-12 sm:py-16 lg:py-20">
      <img
        src={bg}
        alt="Hero"
        className="hidden lg:block  p-10 xl:p-20"
      />

      <div className="lg:absolute lg:inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-16">
          <div className="w-full lg:w-[42%] ml-auto bg-white lg:bg-transparent rounded-lg lg:rounded-none p-6 sm:p-8 lg:p-0 shadow-sm lg:shadow-none">

            <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1E293B] leading-tight mb-5">
              {title}
            </h1>

            <div className="space-y-5">
              {description.map((item, index) => (
                <p
                  key={index}
                  className="text-[#475569] leading-7 sm:leading-8 text-[14px] sm:text-[15px]"
                >
                  {item}
                </p>
              ))}
            </div>

            <Link
              to={buttonLink}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 mt-8 bg-[#19B56B] hover:bg-[#0fa55d] text-white px-7 py-3 rounded-lg transition"
            >
              {buttonText}
              <FiArrowRight />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
