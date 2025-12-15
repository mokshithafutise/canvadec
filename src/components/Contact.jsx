import React from "react";
import Title from "./Title";
import img from "../assets/images/contact.png";

const Contact = () => {
  return (
    <div className="px-20 flex flex-col gap-5">
      <Title title={"Get in Touch"} />
      <div className="flex justify-between px-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center px-5 py-2 text-white bg-[linear-gradient(135deg,#844cff,#11bfff)] ">
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            <div className="flex flex-col">
              <p>Phone</p>
              <p>+91 9742284903</p>
            </div>
          </div>
          <div className="flex px-5 py-2 text-white bg-[linear-gradient(135deg,#844cff,#11bfff)]">
            <span>
              <i class="fa-solid fa-globe"></i>
            </span>
            <div className="flex flex-col">
              <p>Website</p>
              <p>www.futise.com</p>
            </div>
          </div>
          <div className="flex px-5 py-2 text-white bg-[linear-gradient(135deg,#844cff,#11bfff)]">
            <span> </span>
            <div className="flex flex-col">
              <p>Registered Address</p>
              <p>Hubli, Karnataka, India</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={img} alt="" className="w-70 h-60" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
