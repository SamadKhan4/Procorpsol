/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import SubHero from "../components/SubHero";
import CTA from "../components/CTA";
import blogs from "../data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <>
        <SubHero title="Blog Not Found" />
        <section className="bg-[#F5F5F7] py-12 sm:py-16">
          <div className="max-w-[900px] mx-auto px-5 sm:px-6 text-center">
            <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#172033]">
              This article is not available
            </h1>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 mt-6 bg-[#18B76B] text-white px-6 py-3 rounded-[6px] text-[14px] font-medium"
            >
              <FiArrowLeft />
              Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SubHero title="Blog Details" />

      <article className="bg-[#F5F5F7] py-10 sm:py-16">
        <div className="max-w-[920px] mx-auto px-5 sm:px-6">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[#18B76B] text-[14px] font-semibold"
          >
            <FiArrowLeft />
            Back to Blog
          </Link>

          <div className="mt-6 overflow-hidden rounded-[8px] bg-white shadow-sm">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[240px] sm:h-[360px] object-cover"
            />

            <div className="p-5 sm:p-8">
              <p className="text-[12px] text-[#777]">{blog.date}</p>
              <h1 className="mt-3 text-[28px] sm:text-[38px] font-semibold leading-tight text-[#172033]">
                {blog.title}
              </h1>
              <p className="mt-4 text-[15px] sm:text-[17px] leading-[1.7] text-[#4B5563]">
                {blog.excerpt}
              </p>

              <div className="mt-7 space-y-5 text-[15px] sm:text-[16px] leading-[1.8] text-[#333]">
                {blog.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTA />
    </>
  );
};

export default BlogDetail;
