import React from "react";
import Logo from "../assets/Logo.png";
import { MdPlace, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="sm:px-24 px-5 py-20">
      <div className="flex sm:flex-row flex-col gap-10 items-center justify-between ">
        <img src={Logo} />
        <div className="grid gap-5">
          <div className="flex gap-2 items-center">
            <MdPlace size={20} />
            <p>96W3+92F, Kenyayai, Liberia</p>
          </div>
          <a href="tel: +231886578536" className="flex gap-2 items-center">
            <IoCall size={20} />
            <p>+231886578536</p>
          </a>
          <a
            href="mailto:seaviewgolfclub@gmail.com"
            className="flex gap-2 items-center"
          >
            <MdEmail size={20} />
            <p>seaviewgolfclub@gmail.com</p>
          </a>
        </div>
        <div className="flex gap-5">
          <a href="#">
            <FaSquareFacebook size={24} />
          </a>
          <a href="#">
            <FaSquareInstagram size={24} />
          </a>
          <a href="#">
            <FaSquareTwitter size={24} />
          </a>
        </div>
      </div>
      <p className="text-center px-2 mt-5">
        © Copyright {year} Seaview Golf Club. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
