/* eslint-disable no-unused-vars */
import React from "react";

const reviews = [
  {
    name: "Priya Verma",
    role: "Business Owner",
    img: "https://i.pravatar.cc/100?img=47",
    text: "PROCORPSOL made our company compliance process simple and stress-free. Their team was professional, responsive, and guided us through every step.",
  },
  {
    name: "Mohit Singh",
    role: "Company Director",
    img: "https://i.pravatar.cc/100?img=12",
    text: "We received complete support for documentation and compliance management. The process was smooth, transparent, and delivered on time.",
  },
  {
    name: "Rahul Sharma",
    role: "Managing Partner",
    img: "https://i.pravatar.cc/100?img=33",
    text: "The team understands business requirements well and provides practical solutions with great attention to detail. Highly recommended.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Startup Founder",
    img: "https://i.pravatar.cc/100?img=45",
    text: "From incorporation to ongoing support, PROCORPSOL helped us manage everything efficiently while allowing us to focus on business growth.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#F4F5F7] py-8 sm:py-10">
      <div className="max-w-[1180px] mx-auto bg-[#0B4F76] sm:rounded-[10px] px-5 sm:px-8 lg:px-[52px] py-9 sm:py-[42px]">
        <div className="text-center mb-8 sm:mb-[34px]">
          <h2 className="text-white text-[24px] sm:text-[28px] font-semibold">
            What Our <span className="text-[#18B76B]">Clients Say</span>
          </h2>
          <p className="text-white/85 text-[13px] sm:text-[11px] leading-[1.55] sm:leading-[1.4] max-w-[520px] mx-auto mt-3">
            We believe strong relationships are built through trust, quality
            service, and consistent support. Here's what our clients say about
            working with PROCORPSOL.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[18px] px-[20px] py-[22px] min-h-[220px] sm:min-h-[250px]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-[62px] h-[62px] rounded-full border-[7px] border-[#18B76B] p-[2px] shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-[15px] sm:text-[14px] font-semibold text-black">
                    {item.name}
                  </h3>
                  <p className="text-[11px] sm:text-[9px] text-[#555]">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="text-[13px] sm:text-[12px] leading-[1.55] sm:leading-[1.45] text-black">
                {item.text}
              </p>

              <div className="mt-5 text-[#FFC107] text-[14px] tracking-[2px]">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1 mt-[18px]">
          <span className="w-[7px] h-[7px] rounded-full bg-[#18B76B]" />
          <span className="w-[7px] h-[7px] rounded-full border border-[#18B76B]" />
          <span className="w-[7px] h-[7px] rounded-full border border-[#18B76B]" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
