/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../../components/SubHero";
import ServiceHero from "../../components/Service/ServiceHero";
import OurService from "../../components/Service/OurService";
import HowWeWork from "../../components/HowWeWork";
import TrustedExperties from "../../components/TrustedExperties";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";

const Compliance = () => {
  return (
        <>
      <SubHero title="Company Compliance" />

<ServiceHero
  title="Stay Compliant. Stay Confident. Stay Focused on Growth."
  description="At PROCORPSOL, we help businesses manage their compliance responsibilities efficiently and professionally. Company compliance plays a critical role in maintaining legal standing, operational continuity, and business credibility. Our compliance services are designed to simplify regulatory requirements, maintain accurate documentation, and ensure your business remains aligned with applicable standards and obligations."
/>

<OurService
  title="Our Company Compliance Services"
  services={[
    {
      title: "Regulatory Compliance Support",
      desc: "Professional assistance in meeting statutory and regulatory requirements through proper planning and execution.",
    },
    {
      title: "Annual Compliance Management",
      desc: "Support for preparing and completing annual business compliance obligations and filings.",
    },
    {
      title: "Corporate Documentation",
      desc: "Preparation, maintenance, and management of company records and compliance-related documents.",
    },
    {
      title: "Statutory Record Maintenance",
      desc: "Keeping business registers and official records updated and organized.",
    },
    {
      title: "Filing & Submission Support",
      desc: "Assistance with preparing and managing required forms and compliance submissions.",
    },
    {
      title: "Business Compliance Monitoring",
      desc: "Helping businesses track important compliance activities and deadlines.",
    },
    {
      title: "Corporate Governance Support",
      desc: "Supporting businesses with structured processes and responsible operational practices.",
    },
    {
      title: "Compliance Advisory",
      desc: "Providing practical guidance to help businesses understand and manage compliance requirements.",
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

export default Compliance