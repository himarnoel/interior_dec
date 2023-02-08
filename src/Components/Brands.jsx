import React from "react";
import svg1 from "../assets/svgs/01.svg";
import svg2 from "../assets/svgs/02.svg";
import svg3 from "../assets/svgs/03.svg";
import svg4 from "../assets/svgs/04.svg";
import svg5 from "../assets/svgs/05.svg";

const Brands = () => {
  return (
    <div className="flex w-full xl:px-[14rem] lg:px-[9rem] px-[1rem] mb-[10rem] ">
      <div className="flex md:flex-row  flex-col  w-full justify-evenly">
        <img src={svg1} alt="" className="object-contain w-[5.2rem]" />
        <img src={svg2} alt="" className="object-contain w-[5.2rem]" />
        <img src={svg3} alt="" className="object-contain w-[5.2rem]" />
        <img src={svg4} alt="" className="object-contain w-[5.2rem]" />
        <img src={svg5} alt="" className="object-contain w-[5.2rem]" />
      </div>
    </div>
  );
};

export default Brands;
