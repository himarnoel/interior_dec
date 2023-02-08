import React from "react";
import { SlArrowRight } from "react-icons/sl";
const ImageProject = (props) => {
  return (
    <div>
      <div className="">
        <img
          src={props.image}
          className={`object-contain w-full  ${props.radius} `}
        />
        <div className="w-full flex items-center justify-between mt-8 ">
          <span className="flex flex-col ">
            <h4 className="text-xl sm:text-lg md:text-xl">Modern Kitchan</h4>
            <p className="w-42 font-jost text-base sm:text-sm md:textbase">Decor / Artchitecture</p>
          </span>
          <div className="h-10 w-10 bg-[#F4F0EC] rounded-full flex justify-center items-center">
            <SlArrowRight className="sm:text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageProject;
