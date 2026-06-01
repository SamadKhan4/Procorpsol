/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../components/SubHero";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMapPin />,
    title: "Office Address",
    desc: "Plot No. 47, 3rd Floor, Kotwal Nagar, Khamla, Laxmi Nagar (nagpur), Nagpur, Maharashtra, India, 440022",
    href: "https://maps.google.com/?q=Plot%20No.%2047%2C%203rd%20Floor%2C%20Kotwal%20Nagar%2C%20Khamla%2C%20Laxmi%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440022",
  },
  {
    icon: <FiPhone />,
    title: "Phone Number",
    desc: "+91 7569879002",
    href: "tel:+917569879002",
  },
  {
    icon: <FiMail />,
    title: "Email Address",
    desc: "hr@akulkarnipprocorpsol.com",
    href: "mailto:hr@akulkarnipprocorpsol.com",
  },
  {
    icon: <FiClock />,
    title: "Working Hours",
    desc: "Monday - Saturday: 10:00 AM - 7:00 PM",
  },
];

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent("New PROCORPSOL contact inquiry");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\nComment:\n${data.get("comment")}`
    );

    window.location.href = `mailto:hr@akulkarnipprocorpsol.com?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <>
      <SubHero title="Contact Us" />

      <section className="bg-[#F5F6F8] py-10 sm:py-[50px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-[44px]">
          <div className="space-y-5 sm:space-y-[32px] lg:space-y-[40px]">
            {contactInfo.map((item, index) => {
              const Card = item.href ? "a" : "div";

              return (
                <Card
                  key={index}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="relative block bg-white rounded-[10px] shadow-sm px-5 sm:px-[26px] py-5 sm:py-[24px] overflow-hidden min-h-[112px]"
                >
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-l-[48px] border-t-[#18B76B] border-l-transparent" />

                  <div className="flex gap-4">
                    <div className="w-[34px] h-[34px] rounded-full bg-[#EEF4FF] text-[#3B82F6] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-[14px] font-semibold text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[12px] sm:text-[11px] leading-[1.6] text-black max-w-[300px] break-words">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[8px] shadow-sm p-5 sm:p-[22px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div>
                  <label className="text-[12px] font-semibold">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="mt-2 w-full border border-[#DADADA] rounded-[4px] px-3 py-2.5 text-[13px] sm:text-[12px] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[12px] font-semibold">Phone</label>
                  <input
                    name="phone"
                    type="text"
                    required
                    placeholder="Enter your phone number"
                    className="mt-2 w-full border border-[#DADADA] rounded-[4px] px-3 py-2.5 text-[13px] sm:text-[12px] outline-none"
                  />
                </div>
              </div>

              <div className="mt-[14px]">
                <label className="text-[12px] font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="mt-2 w-full border border-[#DADADA] rounded-[4px] px-3 py-2.5 text-[13px] sm:text-[12px] outline-none"
                />
              </div>

              <div className="mt-[14px]">
                <label className="text-[12px] font-semibold">Comment</label>
                <textarea
                  name="comment"
                  placeholder="comment"
                  required
                  rows="5"
                  className="mt-2 w-full border border-[#DADADA] rounded-[4px] px-3 py-2.5 text-[13px] sm:text-[12px] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-[18px] w-full bg-[#18B76B] text-white rounded-[6px] py-[12px] text-[14px] sm:text-[13px]"
              >
                Send application
              </button>
            </form>

            <div className="mt-[18px] overflow-hidden rounded-[8px]">
              <iframe
                title="Nagpur Map"
                src="https://maps.google.com/maps?q=Nagpur&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[220px] sm:h-[170px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
