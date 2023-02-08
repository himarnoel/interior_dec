import React from "react";
import svg1 from "../assets/svgs/01.svg";
import svg2 from "../assets/svgs/02.svg";
import svg3 from "../assets/svgs/03.svg";
import svg4 from "../assets/svgs/04.svg";
import svg5 from "../assets/svgs/05.svg";

const Brands = () => {
  return (
    <div className="flex w-full xl:px-[15rem] lg:px-[9rem] sm:px-[4rem] px-[3rem] mt-10 md:mt-[10rem] mb-[20rem]  ">
      <div className="grid sm:grid-cols-5  md:grid-cols-5 sm:h-full sm:justify-items-center h-96 w-full items-center justify-center">
        <img
          src={svg1}
          alt=""
          className="object-contain w-[5.2rem] sm:w-[3.5rem] md:w-[5.2rem]"
        />
        <img
          src={svg2}
          alt=""
          className="object-contain w-[5.2rem] sm:w-[3.5rem] md:w-[5.2rem]"
        />
        <img
          src={svg3}
          alt=""
          className="object-contain w-[5.2rem] sm:w-[3.5rem] md:w-[5.2rem]"
        />
        <img
          src={svg4}
          alt=""
          className="object-contain w-[5.2rem] sm:w-[3.5rem] md:w-[5.2rem]"
        />
        <img
          src={svg5}
          alt=""
          className="object-contain w-[5.2rem] sm:w-[3.5rem] md:w-[5.2rem]"
        />
      </div>
    </div>
  );
};

export default Brands;
