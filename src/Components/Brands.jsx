import React from "react";
import svg1 from "../assets/svgs/01.svg";
import svg2 from "../assets/svgs/02.svg";
import svg3 from "../assets/svgs/03.svg";
import svg4 from "../assets/svgs/04.svg";
import svg5 from "../assets/svgs/05.svg";

const Brands = () => {
  return (
    <div className="flex w-full xl:px-[14rem] lg:px-[9rem] px-[1rem] mb-[10rem] bg-green-500">
      <div className="flex w-full bg-slate-600  justify-evenly">
        <img src={svg1} alt="" />
        <img src={svg2} alt="" />
        <img src={svg3} alt="" />
        <img src={svg4} alt="" />
        <img src={svg5} alt="" />
       
      </div>
    </div>
  );
};

export default Brands;
