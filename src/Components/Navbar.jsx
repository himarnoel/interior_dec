import React, { useState } from "react";
import icon from "../assets/icons/Vector.svg";
import logo from "../assets/Logo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [change, setchange] = useState(false);
  return (
    <div>
      <section className="hidden lg:block lg:fixed w-full z-20 bg-white top-0 ">
        {" "}
        <nav className="  xl:px-[14rem] lg:px-[9rem] py-4 2xl:bg-blue-200 flex items-center justify-between">
          <span className="flex items-center gap-y-3">
            <img src={logo} alt="" className="mr-2 object-contain w-5 " />
            <h1 className="font-medium text-2xl">Interno</h1>
          </span>
          <span className="flex w-[450px] justify-around text-[0.8rem] font-jost">
            <a href="">Home</a>
            <a href="">Pages</a>
            <a href="">Services</a>
            <a href="">Project</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <img src={icon} className="object-contain w-3" />
          </span>
        </nav>
      </section>

      <div className="lg:hidden fixed  top-0  bg-white z-20">
        <div className=" w-screen px-[1.3rem] md:px-[2.5rem] md:py-4 py-2 ">
          <div className="flex  items-center justify-between">
            <div className="flex items-center">
              <img
                src={logo}
                alt=""
                className="object-contain mr-2 md:w-[2.2rem] w-3"
              />
              <h1 className="font-medium md:text-2xl text-lg">Interno</h1>
            </div>
            <img src="" alt="" />
            <div className="dfa" onClick={() => setchange(!change)}>
              <AiOutlineMenu className="md:text-2xl text-lg" />
            </div>
          </div>
        </div>
      </div>

      {change ? (
        <div className="fixed z-20 rounded-b-xl font-jost text-sm md:text-lg  bg-white h-[15rem] w-full flex flex-col items-center justify-evenly text-left">
          <a href="">Home</a>
          <a href="">Pages</a>
          <a href="">Services</a>
          <a href="">Project</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
          <span className="flex">
            <span className="mr-2">Search</span>{" "}
            <img src={icon} className="object-contain w-3" />
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
