import React from "react";
import icon from "./assets/icons/Vector.svg";
import logo from "./assets/Logo.jpg";
import Hero from "./assets/Hero.jpg";
import { BsArrowRight } from "react-icons/bs";
function App() {
  return (
    <div className="">
      <nav className="lg:max-w-4xl mx-auto py-6 2xl:bg-blue-200 mt-2 flex items-center justify-between">
        <span className="flex items-center gap-y-3">
          <img src={logo} alt="" className="lg:mr-2 object-contain w-5 " />
          <h1 className="font-medium text-xl">Interno</h1>
        </span>
        <span className="flex w-[500px] justify-around text-[0.9rem] font-jost">
          <a href="">Home</a>
          <a href="">Pages</a>
          <a href="">Services</a>
          <a href="">Project</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
          <img src={icon} className="object-contain w-4" />
        </span>
      </nav>
      <div className="relative">
        <img
          src={Hero}
          className="w-screen h-[36rem]  object-cover rounded-bl-[100px]"
        />
        <div className="absolute top-[6rem] left-[230px] w-[25rem] h-80   flex flex-col justify-around items-start ">
          <h1 className="text-6xl">
            {" "}
            <p>Let Your Home </p>
            <p> Be Unique</p>
          </h1>
          <p className="font-jost text-base">
            There are many variations of the passages of lorem Ipsum
            fromavailable,variations of the passages.
          </p>
          <button className="p-3 bg-[#292F36] rounded-xl text-white font-jost text-sm font-light flex items-center">
            {" "}
            Get Started
            <BsArrowRight className="ml-2 text-[#CDA274] text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
