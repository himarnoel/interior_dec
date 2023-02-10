import React from "react";
import { BsArrowRight } from "react-icons/bs";
import NewsComponent from "./NewsComponent";
import img1 from "../assets/below/photo1.png";
import img2 from "../assets/below/photo2.png";
import img3 from "../assets/below/photo3.png";
const News = () => {
  return (
    <div>
      <div className="w-full   xl:px-[14rem] lg:px-[9rem] sm:px-[1.3rem]  px-[1.3rem] md:px-[2.5rem] mt-[10rem] ">
        <div className=" text-center ">
          <p className="text-3xl ">Articles & News</p>
          <p className=" font-jost text-sm  lg:w-[30rem] mx-auto mt-5">
            {" "}
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-5 ">
            <NewsComponent
              image={img1}
              text="Kitchan Design"
              title="Let’s Get Solution For Building Construction Work"
              class=" text-base w-[12rem]"
              bg=""
            />
            <NewsComponent
              image={img2}
              text="Living Design"
              title="Low Cost Latest Invented Interior Designing 
              Ideas."
              class=" text-base w-[11rem]  "
              bg="bg-[#E7E7E7]"
            />
            <NewsComponent
              image={img3}
              text="Interior Design"
              title="Best For Any Office & Business Interior 
              
Solution"
              class=" text-base w-[10rem]"
              bg=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
