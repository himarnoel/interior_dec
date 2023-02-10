import React from "react";
import { BsArrowRight } from "react-icons/bs";
import NewsComponent from "./NewsComponent";

const News = () => {
  return (
    <div>
      <div className="w-full     xl:px-[14rem] lg:px-[9rem] sm:px-[1.3rem] md:px-[2.5rem] px-[3rem] mt-[10rem] ">
        <div className=" text-center bg-[#F4F0EC]">
          <p className="text-xl">Articles & News</p>
          <p className=" font-jost text-sm w-[30rem] mx-auto">
            {" "}
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>

          <div className="grid md:grid-cols-3">
            <NewsComponent />
            <NewsComponent />
            <NewsComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
