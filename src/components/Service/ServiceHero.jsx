/* eslint-disable no-unused-vars */
import React from "react";
import serviceHero from "../../assets/ServiceHero.png";

const ServiceHero = ({
  title = "Expert Secretarial Support for Smooth Business Compliance",
  description = "PROCORPSOL provides professional secretarial services to help businesses maintain proper records, meet statutory requirements, and manage corporate documentation with accuracy and confidence.",
}) => {
  return (
    <section className="w-full bg-white py-10 sm:py-12">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-[560px]">
            <h1 className="text-[27px] sm:text-[32px] lg:text-[38px] font-semibold text-[#1F2937] leading-tight">
              {title}
            </h1>

            <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] leading-[1.7] text-[#4B5563]">
              {description}
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={serviceHero}
              alt="Service Hero"
              className="w-full max-w-[520px] lg:max-w-[560px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
