/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../components/SubHero";

const terms = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing this website, using our services, or submitting information through our platform, you agree to these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the website.",
  },
  {
    title: "About Our Services",
    content: (
      <>
        <p>PROCORPSOL provides professional corporate support services including but not limited to:</p>
        <ul className="list-disc ml-5 sm:ml-6 mt-2">
          <li>Secretarial Services</li>
          <li>Company Incorporation</li>
          <li>Accounting & Audit Services</li>
          <li>Company Compliance</li>
          <li>Liaisoning Services</li>
          <li>Legal Documentation</li>
          <li>Business Support Services</li>
        </ul>
        <p>The information provided on this website is intended for general business and informational purposes only.</p>
      </>
    ),
  },
  {
    title: "Use of Website",
    content: (
      <ul className="list-disc ml-5 sm:ml-6">
        <li>Use the website only for lawful purposes</li>
        <li>Provide accurate and complete information when submitting inquiries</li>
        <li>Avoid misuse, unauthorized access, or activities that may harm website functionality</li>
        <li>Respect intellectual property and website content ownership</li>
      </ul>
    ),
  },
  {
    title: "Service Engagement",
    content:
      "Submission of forms, inquiries, or communication through the website does not automatically create a professional or contractual relationship. Service execution, timelines, pricing, and deliverables will be communicated separately based on project requirements.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content available on this website, including text, graphics, logos, design elements, website layout, and service descriptions, is the property of PROCORPSOL unless otherwise stated and may not be copied, reproduced, or distributed without prior written permission.",
  },
  {
    title: "User Information",
    content:
      "Users are responsible for ensuring the accuracy of information submitted through contact forms or service inquiries. PROCORPSOL reserves the right to reject incomplete or misleading submissions.",
  },
  {
    title: "Confidentiality",
    content:
      "We respect the confidentiality of business information shared by clients and take reasonable measures to maintain privacy and data protection.",
  },
  {
    title: "Limitation of Liability",
    content: (
      <>
        <p>PROCORPSOL shall not be liable for business losses resulting from third-party actions, regulatory delays, temporary website interruptions, or decisions made solely based on website content.</p>
        <p>Users are encouraged to seek direct consultation for business-specific requirements.</p>
      </>
    ),
  },
  {
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites for additional information. We are not responsible for the content, security, or policies of external websites.",
  },
  {
    title: "Changes to Terms",
    content:
      "PROCORPSOL reserves the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website indicates acceptance of revised terms.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms & Conditions shall be governed and interpreted according to applicable laws and regulations.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions regarding these Terms & Conditions, please contact us. Email: hr-akulkarni@procorpsol.com | Phone: +91 7569879002 | Address: Plot No. 47, 3rd Floor, Kotwal Nagar, Khamla, Laxmi Nagar (nagpur), Nagpur, Maharashtra, India, 440022",
  },
];

const TermsPage = () => {
  return (
    <>
      <SubHero title="Terms & Conditions" />

      <section className="bg-[#F4F5F7] py-10 sm:py-[65px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="space-y-7 sm:space-y-[24px]">
            {terms.map((item, index) => (
              <div key={index}>
                <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#1F2937] leading-tight">
                  <span className="text-[#CBD7F6] mr-2 inline-block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </h2>

                <div className="mt-4 text-[14px] sm:text-[16px] leading-[1.65] sm:leading-[1.55] text-[#333] break-words">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
