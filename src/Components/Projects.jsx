import React from "react";
import ImageProject from "./ImageProject";

const Projects = () => {
  return (
    <div>
      <div className=" w-full xl:px-[15rem] lg:px-[9rem] sm:px-[4rem] px-[3rem] mt-10 md:mt-[10rem] mb-32 bg-blue-300">
        <div className="w-full bg-red-300 ">
          <p className="text-xl text-center">Follow Our Projects</p>
          <p className="text-center font-jost ">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div className="w-full">
          <ImageProject />
          <ImageProject />
          <ImageProject />
        </div>
      </div>
    </div>
  );
};

export default Projects;
