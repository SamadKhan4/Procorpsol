/* eslint-disable no-unused-vars */
import React from "react";
import hero from "../assets/SubHero.png";

const SubHero = ({
  title = "About Us",
}) => {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">

        <img
          src={hero}
          alt="Sub Hero"
          className="w-full h-[170px] sm:h-[210px] md:h-[260px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <h1
            className="
            text-white
            text-[30px]
            sm:text-[38px]
            md:text-[52px]
            font-semibold
            leading-tight
            break-words
            "
          >
            {title}
          </h1>
        </div>

      </div>
    </section>
  );
};

export default SubHero;
