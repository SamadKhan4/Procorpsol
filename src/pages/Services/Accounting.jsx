/* eslint-disable no-unused-vars */
import React from 'react'
import SubHero from "../../components/SubHero";
import ServiceHero from "../../components/Service/ServiceHero";
import OurService from "../../components/Service/OurService";
import HowWeWork from "../../components/HowWeWork";
import TrustedExperties from "../../components/TrustedExperties";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";
const Accounting = () => {
  return (
    <>
      <SubHero title="Accounting & Audit Services" />

<ServiceHero
  title="Reliable Financial Support for Smarter Business Decisions"
  description="At PROCORPSOL, we provide professional accounting and audit services to help businesses maintain accurate financial records, improve transparency, and make confident decisions. Our solutions are designed to simplify financial management while supporting compliance and business growth."
/>

<OurService
  title="Our Accounting & Audit Services"
  services={[
    {
      title: "Bookkeeping Services",
      desc: "Accurate recording of daily business transactions, expenses, invoices, and financial activities.",
    },
    {
      title: "Accounting Management",
      desc: "Complete support for maintaining organized and updated business accounts.",
    },
    {
      title: "Financial Statement Preparation",
      desc: "Preparation of balance sheets, profit & loss statements, and other financial reports.",
    },
    {
      title: "Audit Support",
      desc: "Assistance in preparing records, documents, and reports required for audit procedures.",
    },
    {
      title: "Tax & Compliance Support",
      desc: "Support for tax-related documentation, filings, and compliance requirements.",
    },
    {
      title: "Payroll Accounting",
      desc: "Managing salary records, employee payments, deductions, and payroll reports.",
    },
    {
      title: "Bank Reconciliation",
      desc: "Matching bank statements with business records to ensure accuracy and transparency.",
    },
    {
      title: "MIS & Financial Reporting",
      desc: "Regular reports to help business owners understand financial performance and plan better.",
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
  )
}

export default Accounting