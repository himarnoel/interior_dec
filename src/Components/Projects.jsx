import React from "react";
import ImageProject from "./ImageProject";
import image from "../assets/mid/Photo1.png";
import image2 from "../assets/mid/Photo2.png";
import image3 from "../assets/mid/Photo3.png";
import image4 from "../assets/mid/Photo4.png";
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
        <div className="w-full grid md:grid-cols-2 md:justify-items-center">
          <ImageProject radius="rounded-tr-[3rem]" image={image} />
          <ImageProject radius="rounded-tl-[3rem]" image={image2} />
          <ImageProject radius="rounded-br-[3rem]" image={image3} />
          <ImageProject radius="rounded-bl-[3rem]" image={image4} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
