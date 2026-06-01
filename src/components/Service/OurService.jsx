/* eslint-disable no-unused-vars */
import React from "react";

const defaultServices = [
  {
    title: "Statutory Register Maintenance",
    desc: "Proper maintenance of company registers and official records as per regulatory requirements.",
  },
  {
    title: "ROC Filing Support",
    desc: "Timely preparation and filing of required forms, returns, and documents with the Registrar of Companies.",
  },
  {
    title: "Annual Compliance Management",
    desc: "Complete support for annual filings, board resolutions, minutes, and compliance documentation.",
  },
  {
    title: "Board Meeting Documentation",
    desc: "Preparation of notices, agendas, minutes, and resolutions for board and shareholder meetings.",
  },
  {
    title: "Shareholder & Director Documentation",
    desc: "Support for changes related to directors, shareholders, share transfers, and company structure.",
  },
  {
    title: "Legal & Compliance Documentation",
    desc: "Accurate drafting and documentation support for business and statutory requirements.",
  },
];

const OurService = ({
  title = "Our Secretarial Services Include",
  services = defaultServices,
}) => {
  return (
    <section className="w-full py-10 sm:py-14 bg-[#F5F5F7]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        
        <h2 className="text-center text-[25px] sm:text-[30px] font-semibold text-[#1F2937] leading-tight mb-8 sm:mb-10">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-xl
              p-5
              sm:p-6
              shadow-sm
              border border-[#F0F0F0]
              hover:shadow-md
              transition-all
              "
            >
              <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#1F2937] mb-3">
                {item.title}
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#6B7280] leading-[1.7]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
