import React from "react";
import photo from "../assets/Photo.jpg";
const Info = () => {
  return (
    <div>
      {" "}
      <div className="w-full b  mt-10 grid md:grid-cols-2 md:justify-items-end xl:px-[14rem] lg:px-[9rem] px-[1rem] mb-96">
        <div className="flex flex-col justify-around text-center md:text-left  w-[14rem] lg:w-full h-[14rem] lg:h-[16rem] mx-auto">
          {" "}
          <h1 className=" md:text-3xl  text-xl ">
            We Create The Art <br /> Of Stylish Living <br /> Stylishly
          </h1>
          <p className="font-jost md:text-sm text-xs leading-6 text-center lg:text-left ">
            It is a long established fact that a reader will{" "}
            <br className="hidden lg:block" /> be distracted by the of readable
            content of a page <br className="hidden lg:block" /> when lookings
            at its layouts the points of using{" "}
            <br className="hidden lg:block" /> that it has a more-or-less
            normal.
          </p>
          <div className="rounded-full w-20"></div>
        </div>
        <img
          src={photo}
          alt=""
          className="rounded-tr-[12rem] rounded-bl-[6rem] object-contain w-[18rem] md:w-[24rem] mt-1 md:mt-0 mx-auto"
        />
      </div>
    </div>
  );
};

export default Info;
