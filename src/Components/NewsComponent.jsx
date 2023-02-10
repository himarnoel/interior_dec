import React from "react";

import { SlArrowRight } from "react-icons/sl";
const NewsComponent = (props) => {
  return (
    <div className={`${props.bg} border rounded-3xl p-3 `}>
      <div className="relative">
        <img src={props.image} alt="" className="object-contain rounded-t-3xl" />
        <div className=" absolute bg-white p-1 rounded-t-lg rounded-br-xl top-[11.5rem] left-6 text-sm">
          {props.text}
        </div>
      </div>

      <div className=" text-left flex justify-evenly flex-col ">
        <p className={`${props.class}`}>{props.title}</p>
        <div className="flex justify-between font-jost text-sm items-center">
          <p>26 December,2022 </p>
          <div className="h-8 w-8 bg-[#F4F0EC] rounded-full flex justify-center items-center">
            <SlArrowRight className="sm:text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
