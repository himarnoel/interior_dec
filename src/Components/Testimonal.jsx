import React from "react";

const Testimonal = (props) => {
  return (
    <div>
      <div className="bg-white w-full  h-64 sm:h-52 rounded-xl  px-6 pt-5">
        <div className="flex items-center-center">
          {" "}
          <img
            class="inline-block h-10 w-10 rounded-full ring-1 ring-transparent object-contain mr-4 "
            src={props.image}
            alt=""
          />
          <span className="flex flex-col text-left">
            <span className="text-base">{props.name} </span>
            <span className="font-jost text-sm text-[#4D5053]">
              {props.location}
            </span>
          </span>
        </div>
        <p className="font-jost text-base text-justify mt-5">{props.text}</p>
      </div>
    </div>
  );
};

export default Testimonal;
