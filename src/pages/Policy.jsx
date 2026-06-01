/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../components/SubHero";

const policySections = [
  {
    title: "Information We Collect",
    content: (
      <>
        <p>We may collect the following information:</p>
        <p>Personal Information</p>
        <ul className="list-disc ml-5 sm:ml-6">
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Company Name</li>
          <li>Business Information</li>
          <li>Contact Details</li>
        </ul>
        <p>Non-Personal Information</p>
        <ul className="list-disc ml-5 sm:ml-6">
          <li>Browser type</li>
          <li>Device information</li>
          <li>IP address</li>
          <li>Website usage statistics</li>
          <li>Cookies and analytics data</li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <>
        <p>The information collected may be used to:</p>
        <p>✓ Respond to inquiries and service requests</p>
        <p>✓ Provide professional consultation and support</p>
        <p>✓ Improve website performance and user experience</p>
        <p>✓ Communicate updates and important information</p>
        <p>✓ Manage business relationships and service delivery</p>
        <p>✓ Maintain internal records and compliance requirements</p>
      </>
    ),
  },
  {
    title: "Information Sharing",
    content: (
      <>
        <p>PROCORPSOL does not sell, rent, or trade personal information.</p>
        <p>Information may only be shared:</p>
        <ul className="list-disc ml-5 sm:ml-6">
          <li>When required by applicable laws or regulations</li>
          <li>With trusted service providers supporting business operations</li>
          <li>To protect business rights and website security</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Protection & Security",
    content: (
      <>
        <p>
          We implement reasonable administrative and technical measures to
          protect your information from:
        </p>
        <ul className="list-disc ml-5 sm:ml-6">
          <li>Unauthorized access</li>
          <li>Misuse</li>
          <li>Alteration</li>
          <li>Disclosure</li>
          <li>Data loss</li>
        </ul>
        <p>
          While we take precautions, no online transmission can be guaranteed as
          completely secure.
        </p>
      </>
    ),
  },
  {
    title: "Cookies Policy",
    content: (
      <>
        <p>Our website may use cookies to:</p>
        <ul className="list-disc ml-5 sm:ml-6">
          <li>Improve browsing experience</li>
          <li>Understand visitor behavior</li>
          <li>Enhance website performance</li>
          <li>Store user preferences</li>
        </ul>
        <p>Users may disable cookies through browser settings if preferred.</p>
      </>
    ),
  },
  {
    title: "Third-Party Services",
    content:
      "Our website may include links to external websites or third-party tools. Please note that PROCORPSOL is not responsible for the privacy practices or content of third-party platforms. We recommend reviewing their privacy policies separately.",
  },
  {
    title: "Data Retention",
    content: (
      <>
        <p>We retain information only for:</p>
        <ul className="list-disc ml-5 sm:ml-6">
          <li>Service-related purposes</li>
          <li>Legal obligations</li>
          <li>Internal record maintenance</li>
          <li>Business operations</li>
        </ul>
        <p>Information is removed or securely managed when no longer required.</p>
      </>
    ),
  },
  {
    title: "User Rights",
    content: (
      <>
        <p>Users may request to:</p>
        <p>✓ Access their information</p>
        <p>✓ Update incorrect information</p>
        <p>✓ Request deletion of personal data</p>
        <p>✓ Withdraw communication preferences</p>
        <p>Requests may be submitted through our contact details.</p>
      </>
    ),
  },
  {
    title: "Children’s Privacy",
    content:
      "Our website and services are intended for business and professional use and are not directed toward individuals under applicable age requirements.",
  },
  {
    title: "Changes to Privacy Policy",
    content:
      "PROCORPSOL reserves the right to update this Privacy Policy at any time. Changes become effective immediately after publication on the website.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions regarding these Terms & Conditions, please contact us. PROCORPSOL Email: hr-akulkarni@procorpsol.com Phone: +91 7569879002 Address: Plot No. 47, 3rd Floor, Kotwal Nagar, Khamla, Laxmi Nagar (nagpur), Nagpur, Maharashtra, India, 440022",
  },
];

const Policy = () => {
  return (
    <>
      <SubHero title="Privacy Policy" />

      <section className="bg-[#F4F5F7] py-10 sm:py-[65px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="space-y-7 sm:space-y-[26px]">
            {policySections.map((item, index) => (
              <div key={index}>
                <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#1F2937] leading-tight">
                  <span className="text-[#CBD7F6] mr-2 inline-block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </h2>

                <div className="mt-4 text-[14px] sm:text-[16px] leading-[1.65] sm:leading-[1.5] text-[#333] break-words">
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

export default Policy;
