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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 content-evenly gap-4 justify-evenly ">
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
          <div className="flex flex-col justify-between items-center ">
            <h2>Pages</h2>
            <a href="" className="font-jost">
              About Us
            </a>
            <a href="" className="font-jost">
              Our Projects
            </a>
            <a href="" className="font-jost">
              Our Team
            </a>
            <a href="" className="font-jost">
              Contact Us
            </a>
            <a href="" className="font-jost">
              Service
            </a>
          </div>
          <div className="flex flex-col justify-between items-center h-[15rem] text-left">
            <h2>Service</h2>
            <a href="" className="font-jost">
              Kitchan
            </a>
            <a href="" className="font-jost">
              Living Area
            </a>
            <a href="" className="font-jost">
              Bathroom
            </a>
            <a href="" className="font-jost">
              Dinning Hall
            </a>
            <a href="" className="font-jost">
              Bedroom
            </a>
          </div>

          <div className="flex flex-col justify-between items-left h-[11.4rem] text-left">
            <h2> Contact</h2>
            <p className="font-jost">
              55 East Birchwood Ave. Brooklyn, New York 11201{" "}
            </p>
            <p className="font-jost">contact@interno.com</p>
            <p className="font-jost">(123) 456 - 7890</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
