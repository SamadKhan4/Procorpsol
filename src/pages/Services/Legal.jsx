/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../../components/SubHero";
import ServiceHero from "../../components/Service/ServiceHero";
import OurService from "../../components/Service/OurService";
import HowWeWork from "../../components/HowWeWork";
import TrustedExperties from "../../components/TrustedExperties";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";

const Legal = () => {
  return (
    <>
      <SubHero title="Legal Documentation" />

<ServiceHero
  title="Accurate Documentation for Smooth Business Operations"
  description="At PROCORPSOL, we provide professional legal documentation support to help businesses prepare, manage, and organize essential documents with accuracy and confidence. Our services are designed to simplify documentation requirements, reduce errors, and support smooth corporate and business processes."
/>

<OurService
  title="Our Legal Documentation Services"
  services={[
    {
      title: "Business Agreements",
      desc: "Drafting and preparation support for business agreements, contracts, and related documents.",
    },
    {
      title: "Corporate Resolutions",
      desc: "Preparation of board resolutions, shareholder resolutions, and official company documents.",
    },
    {
      title: "Policy Documentation",
      desc: "Support for creating company policies, internal documents, and business process records.",
    },
    {
      title: "Compliance Documents",
      desc: "Preparation and management of documents required for statutory and regulatory compliance.",
    },
    {
      title: "Partnership & Business Documents",
      desc: "Documentation support for partnership deeds, business arrangements, and operational agreements.",
    },
    {
      title: "Document Review & Organization",
      desc: "Reviewing, formatting, and organizing important legal and business documents.",
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
  )
}

export default Legal