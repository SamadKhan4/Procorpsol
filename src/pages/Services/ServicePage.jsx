/* eslint-disable no-unused-vars */
import React from "react";

import SubHero from "../../components/SubHero";
import ServiceDesigned from "../../components/ServiceDesigned";
import TrustedExperties from "../../components/TrustedExperties";
import HowWeWork from "../../components/HowWeWork";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";

import {
  FiMessageCircle,
  FiFileText,
  FiFolder,
  FiUserCheck,
} from "react-icons/fi";

const ServicePage = () => {
  return (
    <>
      {/* Banner */}
      <SubHero title="Services" />
      <hr className="mb-5 border-[#E5E7EB]" />


      {/* Services Section */}
      <ServiceDesigned />

      {/* Trusted Expertise */}
      <TrustedExperties
        title="Trusted Expertise. Reliable Support. Measurable Results."
        description="At PROCORPSOL, we understand that every business requires dependable guidance and efficient support to operate successfully. We are committed to delivering professional corporate solutions that reduce complexity and help businesses move forward with confidence."
        points={[
          {
            title: "Experienced Professionals",
            desc:
              "Our team brings practical knowledge and industry expertise to handle business compliance and corporate requirements efficiently.",
          },

          {
            title: "End-to-End Business Support",
            desc:
              "From incorporation to ongoing compliance and documentation, we provide complete support under one roof.",
          },

          {
            title: "Timely Execution",
            desc:
              "We value your time and ensure services are delivered accurately within committed timelines.",
          },

          {
            title: "Transparent Process",
            desc:
              "Clear communication and structured workflows keep you informed at every stage.",
          },

          {
            title: "Customized Solutions",
            desc:
              "Every business is different, so we offer solutions tailored to your specific goals and requirements.",
          },
        ]}
      />

      {/* Process */}
      <HowWeWork
        title="How We Work"
        steps={[
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
            desc:
              "We handle submissions and official procedures.",
          },

          {
            icon: <FiUserCheck />,
            title: "Ongoing Support",
            desc:
              "We provide continuous compliance assistance.",
          },
        ]}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA
        title="Need Help with Business Compliance?"
        buttonText="Contact Us Today"
      />
    </>
  );
};

export default ServicePage;
