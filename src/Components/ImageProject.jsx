import React from "react";

const ImageProject = (props) => {
  return (
    <div>
      <div className="mt-10">
        <img
          src={props.image}
          className={`object-contain w-[22rem]  ${props.radius} `}
        />
      </div>
    </div>
  );
};

export default ImageProject;
