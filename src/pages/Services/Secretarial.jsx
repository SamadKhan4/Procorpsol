/* eslint-disable no-unused-vars */
import React from "react";

import SubHero from "../../components/SubHero";
import ServiceHero from "../../components/Service/ServiceHero";
import OurService from "../../components/Service/OurService";
import HowWeWork from "../../components/HowWeWork";
import TrustedExperties from "../../components/TrustedExperties";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";

const Secretarial = () => {
  return (
    <>
      <SubHero title="Secretarial Services" />

      <ServiceHero
        title="Expert Secretarial Support for Smooth Business Compliance"
        description="PROCORPSOL provides professional secretarial services to help businesses maintain proper records, meet statutory requirements, and manage corporate documentation with accuracy and confidence."
      />

      <OurService
        title="Our Secretarial Services Include"
        services={[
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
        ]}
      />

      <HowWeWork title="How We Work" />

      <TrustedExperties
        title="Trusted Expertise. Reliable Support. Measurable Results."
        description="At PROCORPSOL, we understand that every business requires dependable guidance and efficient support to operate successfully. We are committed to delivering professional corporate solutions that reduce complexity and help businesses move forward with confidence."
        points={[
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
        ]}
      />

      <Testimonials />

      <CTA
        title="Need Help with Business Compliance?"
        buttonText="Contact Us Today"
      />
    </>
  );
};

export default Secretarial;