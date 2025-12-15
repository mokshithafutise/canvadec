import React from "react";
import Title from "./Title";
import download from "../assets/images/download.png";

const Contact = () => {
  return (
    <div className="px-20 flex flex-col gap-5">
      <Title title={"Get in Touch"} />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex px-5 py-2 bg-[] ">
            <span></span>
            <div className="flex flex-col">
              <p>Phone</p>
              <p>+91 9742284903</p>
            </div>
          </div>
          <div className="flex">
            <span></span>
            <div className="flex flex-col">
              <p>Website</p>
              <p>www.futise.com</p>
            </div>
          </div>
          <div className="flex">
            <span></span>
            <div className="flex flex-col">
              <p>Registered Address</p>
              <p>Hubli, Karnataka, India</p>
            </div>
          </div>
        </div>
        <div className="rotate-z-10 inline-block">
          <img src={download} alt="" className="size-60 shadow-lg " />
        </div>
      </div>
    </div>
  );
};

export default Contact;
