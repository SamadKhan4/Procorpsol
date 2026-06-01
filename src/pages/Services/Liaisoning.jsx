/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../../components/SubHero";
import ServiceHero from "../../components/Service/ServiceHero";
import OurService from "../../components/Service/OurService";
import HowWeWork from "../../components/HowWeWork";
import TrustedExperties from "../../components/TrustedExperties";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";

const Liaisoning = () => {
  return (
         <>
      <SubHero title="Liaisoning Services" />

<ServiceHero
  title="Stay Compliant. Stay Confident. Stay Focused on Growth."
  description="At PROCORPSOL, we provide professional liaisoning services to help businesses coordinate effectively with government departments, regulatory authorities, and official agencies. Our goal is to simplify communication, documentation, and approval processes."
/>

<OurService
  title="Our Liaisoning Services"
  services={[
    {
      title: "Government Department Coordination",
      desc: "Professional support for communication and follow-ups with relevant authorities.",
    },
    {
      title: "Approval & Permission Support",
      desc: "Assistance in managing required approvals, permissions, and official documentation.",
    },
    {
      title: "Regulatory Authority Liaisoning",
      desc: "Smooth coordination with regulatory bodies for business-related processes.",
    },
    {
      title: "Documentation Assistance",
      desc: "Preparing, organizing, and submitting required documents accurately.",
    },
    {
      title: "Follow-Up & Process Management",
      desc: "Regular follow-ups to help complete official procedures within expected timelines.",
    },
    {
      title: "Business Support Coordination",
      desc: "Helping businesses manage administrative and procedural requirements efficiently.",
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

export default Liaisoning