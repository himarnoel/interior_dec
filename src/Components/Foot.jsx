import React from "react";
import logo from "../assets/Logo.jpg";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
const Foot = () => {
  return (
    <div>
      <footer className="w-full beg-blue-500 h-[20rem]  xl:px-[14rem] lg:px-[9rem] sm:px-[1.3rem] md:px-[2.5rem] px-[3rem] mt-[10rem] ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-3">
          <div className="flex flex-col justify-between h-[7rem]">
            <span className="flex items-center">
              <img src={logo} alt="" className="mr-2 object-contain w-5 " />
              <h1 className="font-medium text-2xl">Interno</h1>
            </span>
            <p className="font-jost text-xs">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <p className="flex justify-between w-32">
              <TiSocialFacebook />
              <TiSocialTwitter />
              <TiSocialLinkedin />
              <IoLogoInstagram />
            </p>
          </div>
          <div>
            <h2 className="flex flex-col justify-between">
              <p>Pages</p>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </h2>
          </div>
          <div>
            <h2 className="d">Service</h2>
          </div>
          <div>
            <h2 className="d">Pages</h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
