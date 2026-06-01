/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../../components/SubHero";
import ServiceHero from "../../components/Service/ServiceHero";
import OurService from "../../components/Service/OurService";
import HowWeWork from "../../components/HowWeWork";
import TrustedExperties from "../../components/TrustedExperties";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";

const Incorporation = () => {
  return (
    <>
      <SubHero title="Company Incorporation" />

      <ServiceHero
        title="Start Your Business Journey with Confidence"
        description="At PROCORPSOL, we simplify the company incorporation process by providing professional guidance, documentation support, and end-to-end registration assistance. Whether you are starting a new venture or formalizing an existing business, we help you establish your company efficiently and in compliance with legal requirements. Our goal is to make the incorporation process smooth, transparent, and hassle-free so you can focus on building and growing your business."
      />

      <OurService
        title="Our Company Incorporation"
        services={[
          {
            title: "Business Structure Consultation",
            desc: "Get expert guidance in selecting the right business structure based on your goals and operational requirements.",
          },
          {
            title: "Company Registration Support",
            desc: "Complete assistance with preparing, reviewing, and managing the registration process.",
          },
          {
            title: "Documentation Assistance",
            desc: "Professional support in collecting, preparing, and organizing required incorporation documents.",
          },
          {
            title: "Regulatory Filing Support",
            desc: "Managing necessary submissions and compliance requirements during the incorporation process.",
          },
          {
            title: "Company Name Assistance",
            desc: "Guidance in selecting and processing a suitable company name as per regulatory guidelines.",
          },
          {
            title: "Incorporation Compliance Support",
            desc: "Ensuring all legal and procedural requirements are completed correctly and efficiently.",
          },
        ]}
      />

      <HowWeWork title="How We Work" />

      <TrustedExperties />

      <Testimonials />

      <CTA
        title="Need Help with Business Compliance?"
        buttonText="Contact Us Today"
      />
    </>
  );
};

export default Incorporation;