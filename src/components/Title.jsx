import React from "react";
import logo from "../assets/images/futise2.jpeg"

const Title = ({title}) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold ">{title}</h1>
      <img src={logo} alt="" className="size-10"/>
    </div>
  );
};

export default Title;
