import React from "react";
import ImageProject from "./ImageProject";
import image from "../assets/mid/Photo1.png";
import image2 from "../assets/mid/Photo2.png";
import image3 from "../assets/mid/Photo3.png";
import image4 from "../assets/mid/Photo4.png";
import image5 from "../assets/mid/Photo5.png";
const Projects = () => {
  return (
    <div>
      <div className=" w-full xl:px-[14rem] lg:px-[9rem] sm:px-[1.3rem] md:px-[2.5rem] px-[3rem] mt-10 md:mt-[10rem] mb-32 ">
        <div className="w-full  ">
          <p className="text-3xl text-center mt-2 ">Follow Our Projects</p>
          <p className="text-center font-jost md:w-[30rem] mx-auto mt-4">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-2 md:place-content-between gap-10 md:gap-y-12 md:gap-x-24 mt-10 ">
          <ImageProject radius="rounded-tr-[4rem]" image={image3} />
          <ImageProject radius="rounded-tl-[4rem]" image={image5} />
          <ImageProject radius="rounded-br-[4rem]" image={image2} />
          <ImageProject radius="rounded-bl-[4rem]" image={image4} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
