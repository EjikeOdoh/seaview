import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 90) {
        setColor("black");
        setBgColor("red");
      } else {
        setColor("white");
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav
      style={{ backgroundColor: `${bgColor}` }}
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 py-2 sm:px-24 px-5 flex justify-between items-center`}
    >
      <img src={Logo} className="bg-blend-screen" />
      <div className="sm:flex gap-14 items-center hidden ">
        <NavLink to="/" className="text-white">
          Home
        </NavLink>
        <NavLink to="/golf" className="text-white">
          Golf
        </NavLink>
        <NavLink to="/activities" className="text-white">
          Activities
        </NavLink>
        <NavLink to="/about" className="text-white">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
