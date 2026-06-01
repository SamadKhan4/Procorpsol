/* eslint-disable no-unused-vars */
import React from "react";

import SubHero from "../components/SubHero";
import Hero from "../components/Hero";
import TrustedExperties from "../components/TrustedExperties";
import HowWeWork from "../components/HowWeWork";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const AboutPage = () => {
  return (
    <>
      <SubHero title="About Us" />

      <Hero
        title="Your Trusted Business Compliance Partner"
        description={[
          "At PROCORPSOL, we believe every business deserves reliable support to operate smoothly and grow confidently. We provide professional corporate solutions designed to simplify complex business processes and help organizations stay compliant with changing regulations.",

          "With expertise in company compliance, secretarial services, accounting, legal documentation, company incorporation, and business support, we work as an extended partner to businesses across different industries. Our approach focuses on delivering accurate guidance, timely execution, and transparent communication, ensuring that our clients receive practical and dependable solutions at every stage of their business journey.",
        ]}
        buttonText="Let's Talk"
      />

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

      <HowWeWork title="How We Work" />

      <Testimonials />

      <CTA
        title="Need Help with Business Compliance?"
        buttonText="Contact Us Today"
      />
    </>
  );
};

export default AboutPage;