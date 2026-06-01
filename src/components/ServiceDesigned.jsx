/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiClipboard,
  FiFileText,
  FiBriefcase,
} from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const services = [
  {
    icon: <FiBriefcase />,
    title: "Secretarial Services",
    path: "/services/secretarial",
    desc: "Complete support for statutory records, company documentation, annual filings, and compliance management.",
  },
  {
    icon: <HiOutlineBuildingOffice2 />,
    title: "Company Incorporation",
    path: "/services/incorporation",
    desc: "We assist in company registration, legal structure selection, documentation, and approval processes.",
  },
  {
    icon: <FiFileText />,
    title: "Accounting & Audit Services",
    path: "/services/accounting",
    desc: "Manage accounts, bookkeeping, audits, and financial reporting with confidence.",
  },
  {
    icon: <FiClipboard />,
    title: "Company Compliance",
    path: "/services/compliance",
    desc: "Stay compliant with timely filings, statutory records, and documentation support.",
  },
  {
    icon: <FiBriefcase />,
    title: "Liaisoning Services",
    path: "/services/liaisoning",
    desc: "Smooth coordination with government departments and regulatory authorities.",
  },
  {
    icon: <FiFileText />,
    title: "Legal Documentation",
    path: "/services/legal",
    desc: "Accurate drafting and documentation support for business requirements.",
  },
];

const ServiceCard = ({ item }) => {
  return (
    <div className="relative bg-white rounded-[18px] w-full min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] flex flex-col items-center text-center px-5 sm:px-7 pt-8 sm:pt-10 pb-14 sm:pb-16">
      <div className="w-[68px] h-[68px] sm:w-[82px] sm:h-[82px] bg-[#18B86F] rotate-45 rounded-[18px] sm:rounded-[22px] flex items-center justify-center">
        <div className="-rotate-45 text-white text-[28px] sm:text-[34px]">{item.icon}</div>
      </div>

      <h3 className="mt-7 sm:mt-9 text-[20px] sm:text-[23px] lg:text-[24px] font-bold leading-tight text-black">
        {item.title}
      </h3>

      <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] leading-[1.55] sm:leading-[1.45] text-black max-w-[280px]">
        {item.desc}
      </p>

      <Link
        to={item.path}
        aria-label={`View ${item.title}`}
        className="absolute -bottom-[28px] sm:-bottom-[31px] w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full bg-[#18C878] border-[8px] sm:border-[10px] border-[#0B4F76] flex items-center justify-center text-white text-[26px] sm:text-[30px]"
      >
        <FiArrowRight />
      </Link>
    </div>
  );
};

const ServiceDesigned = () => {
  return (
    <section className="w-full bg-[#0B4F76] rounded-none sm:rounded-[16px] py-12 sm:py-[64px] lg:py-[70px] px-5 sm:px-8 lg:px-[60px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-14 sm:gap-y-[86px] items-start">
        <div className="sm:col-span-2 xl:col-span-2 xl:pt-[118px]">
          <h2 className="text-white text-[27px] sm:text-[34px] md:text-[38px] font-bold leading-[1.25] sm:leading-[1.35] max-w-[650px]">
            Professional{" "}
            <span className="text-[#18B86F]">Services Designed</span> for
            <br className="hidden sm:block" />
            Business Success
          </h2>

          <p className="mt-5 sm:mt-6 text-white text-[14px] sm:text-[16px] lg:text-[17px] leading-[1.65] sm:leading-[1.5] max-w-[680px]">
            From company incorporation to compliance management, accounting,
            legal documentation, and business support services — PROCORPSOL
            delivers reliable solutions that simplify operations, ensure
            regulatory compliance, and support long-term business growth.
          </p>
        </div>

        <ServiceCard item={services[0]} />
        <ServiceCard item={services[1]} />

        {services.slice(2).map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ServiceDesigned;
