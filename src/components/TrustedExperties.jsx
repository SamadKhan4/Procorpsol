/* eslint-disable no-unused-vars */
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import rightside from "../assets/Expert.png";

const TrustedExperties = ({
  title = "Trusted Expertise. Reliable Support. Measurable Results.",

  description = `At PROCORPSOL, we understand that every business requires dependable guidance and efficient support to operate successfully. We are committed to delivering professional corporate solutions that reduce complexity and help businesses move forward with confidence.`,

  points = [
    {
      title: "Experienced Professionals",
      desc: "Our team brings practical knowledge and industry expertise to handle business compliance and corporate requirements efficiently.",
    },

    {
      title: "End-to-End Business Support",
      desc: "From incorporation to ongoing compliance and documentation, we provide complete support under one roof.",
    },

    {
      title: "Timely Execution",
      desc: "We value your time and ensure services are delivered accurately within committed timelines.",
    },

    {
      title: "Transparent Process",
      desc: "Clear communication and structured workflows keep you informed at every stage.",
    },

    {
      title: "Customized Solutions",
      desc: "Every business is different, so we offer solutions tailored to your specific goals and requirements.",
    },
  ],
}) => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-[90px] bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-[70px] items-center">
          
          <div>
            <h2 className="text-[27px] sm:text-[36px] lg:text-[42px] leading-[1.2] font-bold text-[#162133] max-w-[650px]">
              {title}
            </h2>

            <p className="mt-5 sm:mt-6 text-[#535B66] text-[14px] sm:text-[16px] leading-[1.75] sm:leading-[1.8] max-w-[620px]">
              {description}
            </p>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-7">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start"
                >
                  <BsCheckCircleFill className="text-[#18B76B] text-[18px] mt-[6px] shrink-0" />

                  <div>
                    <h4 className="text-[18px] sm:text-[22px] lg:text-[24px] font-semibold text-[#0F172A]">
                      {item.title}
                    </h4>

                    <p className="text-[#5B6470] text-[13px] sm:text-[15px] leading-[1.75] sm:leading-[1.8] mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={rightside}
              alt="Trusted Expertise"
              className="w-full h-[280px] sm:h-[440px] lg:h-[640px] max-w-[620px] object-cover rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedExperties;
