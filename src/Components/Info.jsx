import React from "react";
import photo from "../assets/Photo.jpg";
import { BsArrowRight } from "react-icons/bs";
const Info = () => {
  return (
    <div>
      {" "}
      <div className="w-full b flex-col-reverse mt-10 grid md:grid-cols-2  md:justify-items-end xl:px-[14rem] lg:px-[9rem] px-[1rem] mb-96 g">
        <div className="flex flex-col justify-around items-start  md:text-left text-center   lg:w-full h-[26rem] lg:h-full mx-auto">
          {" "}
          <h1 className=" md:text-4xl  text-xl lg:text-left  w-full">
            We Create The Art <br /> Of Stylish Living <br /> Stylishly
          </h1>
          <p className="font-jost md:text-sm lg:text-base text-xs leading-6 text-center lg:text-left ">
            It is a long established fact that a reader will{" "}
            <br className="hidden lg:block" /> be distracted by the of readable
            content of a page <br className="hidden lg:block" /> when lookings
            at its layouts the points of using{" "}
            <br className="hidden lg:block" /> that it has a more-or-less
            normal.
          </p>
          <span className="flex ">
            <span className="rounded-full h-10 flex justify-center items-center w-10 bg-[#F4F0EC] mr-3 ">
              1
            </span>
            <span className="flex flex-col font-jost">
              {" "}
              <p className="font-medium">012345678</p>
              <p className="font-light">Call Us Anytime</p>
            </span>
          </span>
          <button className="p-3 text-white shadow-lg bg-[#292F36] font-jost flex items-center rounded-md">
            Get Free Estimate <BsArrowRight className="ml-2 text-[#CDA274]" />
          </button>
        </div>
        <img
          src={photo}
          alt=""
          className="rounded-tr-[12rem] rounded-bl-[6rem] object-contain px md:w-[24rem] mt-1 md:mt-0 mx-auto"
        />
      </div>
    </div>
  );
};

export default Info;
