/* eslint-disable no-unused-vars */
import React from "react";
import {
  FiMessageCircle,
  FiFileText,
  FiFolder,
  FiUserCheck,
} from "react-icons/fi";

const defaultSteps = [
  {
    icon: <FiMessageCircle />,
    title: "Consultation",
    desc: "We understand your business needs.",
  },
  {
    icon: <FiFileText />,
    title: "Documentation",
    desc: "We prepare and verify required documents.",
  },
  {
    icon: <FiFolder />,
    title: "Filing & Processing",
    desc: "We handle submissions and official procedures.",
  },
  {
    icon: <FiUserCheck />,
    title: "Ongoing Support",
    desc: "We provide continuous compliance assistance.",
  },
];

const HowWeWork = ({
  title = "How We Work",
  steps = defaultSteps,
}) => {
  return (
    <section className="w-full bg-[#F4F5F7] py-10 sm:py-12 lg:py-[24px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-[30px]">

        {/* Title */}
        <h2 className="text-center text-[23px] sm:text-[24px] lg:text-[20px] font-semibold text-[#1D2433] mb-8 lg:mb-[24px]">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-y-10 lg:gap-0">

          {steps.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
            >

              {/* Connector */}
              {index !== steps.length - 1 && (
                <svg
                  className="
                  hidden
                  lg:block
                  absolute
                  top-[8px]
                  left-[70%]
                  z-0
                  "
                  width="160"
                  height="44"
                  viewBox="0 0 160 44"
                >
                  <path
                    d={
                      index === 1
                        ? "M5 30 C45 0 115 0 155 30"
                        : "M5 10 C45 42 115 42 155 10"
                    }
                    fill="none"
                    stroke="#7D838D"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    strokeLinecap="round"
                  />
                </svg>
              )}

              {/* Number */}
              <span
                className="
                absolute
                top-[0px]
                left-1/2
                -translate-x-8
                text-[11px]
                lg:text-[10px]
                text-[#2A2A2A]
                "
              >
                {index + 1}
              </span>

              {/* Icon */}
              <div
                className="
                w-[50px]
                h-[50px]
                lg:w-[40px]
                lg:h-[40px]
                rounded-full
                bg-[#FAFAFA]
                flex
                items-center
                justify-center
                z-10
                "
              >
                <div
                  className="
                  w-[32px]
                  h-[32px]
                  lg:w-[24px]
                  lg:h-[24px]
                  rounded-full
                  bg-[#18B76B]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-[15px]
                  lg:text-[12px]
                  "
                >
                  {item.icon}
                </div>
              </div>

              {/* Heading */}
              <h3
                className="
                mt-[10px]
                text-[16px]
                lg:text-[14px]
                font-semibold
                text-[#111827]
                text-center
                "
              >
                {item.title}
              </h3>

              {/* Desc */}
              <p
                className="
                mt-[4px]
                text-[13px]
                lg:text-[11px]
                leading-[1.4]
                text-[#444]
                text-center
                max-w-[230px]
                lg:max-w-[150px]
                "
              >
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
