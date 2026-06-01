/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/CTA.png";

const CTA = ({
  title = "Need Help with Business Compliance?",
  buttonText = "Contact Us Today",
  buttonLink = "/contact",
}) => {
  return (
    <section className="w-full py-8 sm:py-[28px] bg-[#F5F5F7]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        <div className="relative rounded-[12px] overflow-hidden">

          {/* Background */}
          <img
            src={image}
            alt="CTA"
            className="w-full h-[230px] sm:h-[280px] lg:h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5">

            <h2
              className="
              text-white
              text-[24px]
              sm:text-[28px]
              md:text-[32px]
              font-semibold
              text-center
              leading-[1.15]
              max-w-[620px]
              px-1
              "
            >
              {title}
            </h2>

            <Link
              to={buttonLink}
              className="
              mt-7
              sm:mt-[34px]
              bg-[#E12A2A]
              hover:bg-[#cf2222]
              text-white
              px-6
              sm:px-[34px]
              py-3
              sm:py-[14px]
              rounded-[6px]
              text-[14px]
              font-medium
              transition
              "
            >
              {buttonText}
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
