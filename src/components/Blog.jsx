/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import defaultBlogs from "../data/blogs";

const BlogCard = ({ item }) => {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-[4px]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[200px] sm:h-[188px] object-cover"
        />
      </div>

      <p className="mt-4 text-[12px] sm:text-[11px] text-[#777]">
        {item.date}
      </p>

      <h3 className="mt-2 text-[15px] sm:text-[15px] font-medium leading-[1.45] text-[#111827] sm:min-h-[52px]">
        {item.title}
      </h3>

      <Link
        to={`/news/${item.slug}`}
        className="
        inline-flex
        mt-4
        sm:mt-5
        border
        border-[#D5D5D5]
        px-[18px]
        py-[7px]
        text-[12px]
        sm:text-[11px]
        hover:bg-black
        hover:text-white
        transition
        "
      >
        Read More
      </Link>
    </div>
  );
};

const Blog = ({
  title = "Latest Business Insights",

  description =
    "Stay informed with useful articles, compliance updates, business tips, and expert guidance to help your company operate smoothly and grow confidently.",

  blogs = defaultBlogs,
}) => {
  return (
    <section className="w-full bg-[#F6F6F7] py-10 sm:py-[40px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">

        <div className="text-center mb-8 sm:mb-[40px]">
          <h2 className="text-[26px] sm:text-[34px] font-semibold text-[#1F2937] leading-tight">
            {title}
          </h2>

          <p className="mt-3 text-[13px] sm:text-[12px] text-[#555] max-w-[700px] mx-auto leading-[1.6] sm:leading-[1.5]">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {blogs.map((item, index) => (
            <BlogCard
              key={index}
              item={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
