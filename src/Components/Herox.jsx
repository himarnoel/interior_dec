import React from "react";
import Hero from "../assets/Hero.jpg";
import { BsArrowRight } from "react-icons/bs";

const Herox = () => {
  return (
    <div>
      <div className="md:mt-[4.2rem] mt-[3rem] lg:mt-0 ">
        <img
          src={Hero}
          className="w-screen h-[30rem] lg:h-full  object-cover rounded-bl-[100px]"
        />
        <div className="absolute top-[8rem] sm:top-[9rem] md:top-[10rem] xl:top-[15rem]  xl:left-[14rem] lg:left-[9rem] md:left-[2.5rem] left-4   w-[15rem] sm:w-80 h-60   flex flex-col justify-around items-start ">
          <h1 className="sm:text-5xl text-4xl">
            <p>Let your Home</p>
            <p> Be Unique</p>
          </h1>
          <p className="font-jost sm:text-sm text-[10px]">
            There are many variations of the passages of{" "}
            <br className="md:hidden" /> lorem Ipsum fromavailable,variations of{" "}
            <br className="md:hidden" /> the passages.
          </p>
          <button className="p-3 bg-[#292F36] rounded-xl text-white font-jost text-sm font-light flex items-center">
            {" "}
            Get Started
            <BsArrowRight className="ml-2 text-[#CDA274]" />
          </button>
        </div>
      </div>
      <div> </div>
    </div>
  );
};

export default Herox;
