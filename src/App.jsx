import React from "react";
import icon from "./assets/icons/Vector.svg";
import logo from "./assets/Logo.jpg";
import Hero from "./assets/Hero.jpg";
function App() {
  return (
    <div className="">
      <nav className="lg:max-w-4xl mx-auto 2xl:bg-blue-200 mt-2 flex items-center justify-between">
        <span className="flex items-center gap-y-3">
          <img src={logo} alt="" className="lg:mr-2 object-contain w-5 " />
          <h1 className="font-medium text-xl">Interno</h1>
        </span>
        <span className="flex w-[450px] justify-around text-xs">
          <a href="">Home</a>
          <a href="">Pages</a>
          <a href="">Services</a>
          <a href="">Project</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
          <img src={icon} className="object-contain w-4" />
        </span>
      </nav>
      <div>
        <img src={Hero}  />
      </div>
    </div>
  );
}

export default App;
