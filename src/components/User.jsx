import React from "react";
import img from "../assets/images/dk.png";
import { NavLink } from "react-router-dom";

const User = () => {
  return (
    <div>
      <div>
        <span></span>
        <img src={img} alt="" className="h-40" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-white bg-[#7060FF] rounded-2xl px-5 py-1 font-semibold text-xl">
          {"Dushyant Kumar"}
        </p>
        <p className="font-medium">{"about"}</p>
      </div>
    </div>
  );
};

export default User;
