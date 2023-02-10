import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Join = () => {
  return (
    <div>
      <div className="w-full  xl:px-[14rem] lg:px-[9rem] sm:px-[1.3rem] md:px-[2.5rem] px-[3rem] mt-[10rem] mb-64">
        <div className="bg-[#292F36] w-full flex flex-col items-center justify-evenly text-center  rounded-3xl h-[15rem]">
          <div>
            {" "}
            <p className="text-[2rem] text-white">Wanna join the interno ?</p>
            <p className="font-jost text-sm font-thin text-white">
              It is a long established fact will be distracted.
            </p>
          </div>
          <button className="p-3 px-6 shadow-2xl bg-[#CDA274] rounded-xl text-white font-jost text-sm font-light flex items-center">
            {" "}
            Contact With Us
            <BsArrowRight className="ml-2 text-[#292F36]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
