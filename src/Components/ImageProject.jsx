import React from "react";

const ImageProject = (props) => {
  return (
    <div>
      <div className="mt-0">
        <img
          src={props.image}
          className={`object-contain w-full  ${props.radius} `}
        />
        <div className="w-full flex">
          <span className="flex flex-col">
            <h4 className="">Modern Kitchan</h4>
            <p className="w-10">Decor / Artchitecture</p>
          </span>
          <span className="h-5 w-5 bg-[#F4F0EC]">
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageProject;
