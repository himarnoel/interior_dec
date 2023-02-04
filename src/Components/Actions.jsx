import React from 'react'
import { BsArrowRight } from "react-icons/bs";
const Actions = () => {
  return (
    <div> <div className="w-full grid justify-center gap-y-2  md:justify-items-center  md:grid-cols-3 xl:px-[14rem] lg:px-[9rem] mt-10">
    <div className="flex  flex-col  w-[13rem] h-[14rem] justify-evenly  items-center">
      <h2>Project Plan</h2>
      <p className="leading-8 text-center font-jost text-sm">
        There are many variations of the <br /> passages of lorem Ipsum from{" "}
        <br />
        available, majority.
      </p>
      <a className="flex items-center font-jost font-medium">
        <span className="mr-1 ">Read More</span>{" "}
        <BsArrowRight className="ml-2 text-[#CDA274]" />
      </a>
    </div>
    <div className="flex  flex-col  w-[13rem] h-[14rem] justify-evenly  items-center">
      <h2>Interior Work</h2>
      <p className="leading-8 text-center font-jost text-sm">
        There are many variations of the <br /> passages of lorem Ipsum from{" "}
        <br />
        available, majority.
      </p>
      <a className="flex items-center font-jost font-medium">
        <span className="mr-1">Read More</span>{" "}
        <BsArrowRight className="ml-2 text-[#CDA274]" />
      </a>
    </div>{" "}
    <div className="flex  flex-col  w-[13rem] h-[14rem] justify-evenly  items-center">
      <h2>Realization</h2>
      <p className="leading-8 text-center font-jost text-sm">
        There are many variations of the <br /> passages of lorem Ipsum from{" "}
        <br />
        available, majority.
      </p>
      <a className="flex items-center font-jost font-medium">
        <span className="mr-1">Read More</span>{" "}
        <BsArrowRight className="ml-2 text-[#CDA274]" />
      </a>
    </div>
  </div></div>
  )
}

export default Actions