/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import SubHero from "../components/SubHero";
import CTA from "../components/CTA";
import blogs from "../data/blogs";

const duplicated = [...blogs, ...blogs];

const BlogPage = () => {
  return (
    <>
      <SubHero title="Blog" />

      <section className="bg-[#F5F5F7] py-10 sm:py-[60px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          
          <div className="text-center mb-8 sm:mb-[40px]">
            <h2 className="text-[26px] sm:text-[34px] font-semibold text-[#172033] leading-tight">
              Latest Business Insights
            </h2>

            <p className="mt-3 text-[13px] sm:text-[12px] leading-[1.6] text-[#666] max-w-[650px] mx-auto">
              Stay informed with useful articles, compliance updates,
              business tips, and expert guidance to help your company
              operate smoothly and grow confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[26px] gap-y-8 sm:gap-y-[40px]">
            {duplicated.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] sm:h-[170px] lg:h-[160px] object-cover rounded-[3px]"
                />

                <p className="mt-4 text-[11px] sm:text-[10px] text-[#808080]">
                  {item.date}
                </p>

                <h3 className="mt-2 text-[15px] sm:text-[13px] leading-[1.45] font-medium sm:min-h-[40px]">
                  {item.title}
                </h3>

                <Link
                  to={`/news/${item.slug}`}
                  className="
                  inline-flex
                  mt-4
                  border
                  border-[#D5D5D5]
                  px-[18px]
                  py-[8px]
                  text-[12px]
                  sm:text-[10px]
                  hover:bg-black
                  hover:text-white
                  transition
                  "
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTA
        title="Need Help with Business Compliance?"
        buttonText="Contact Us Today"
      />
    </>
  );
};

export default BlogPage;
