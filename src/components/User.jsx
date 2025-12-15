import React from "react";

import { NavLink } from "react-router-dom";
import linkImg from "../assets/images/linkImg.webp"

const User = ({name,desc,img}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative">
        <NavLink to="#" className="">
          <img src={linkImg} alt="" className="size-5 absolute right-0"/>
        </NavLink>
        <img src={img} alt="" className="h-40" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-white bg-[#7060FF] rounded-2xl px-5 py-1 font-semibold text-xl">
          {name}
        </p>
        <p className="font-medium">{desc}</p>
      </div>
    </div>
  );
};

export default User;
