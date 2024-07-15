import React, { useState } from "react";
import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({toggleDarkMode}) => {
  const location = useLocation();
  const [isOn, setIsOn] = useState(false);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      <header className=" h-20 bg-cyan-300 dark:bg-slate-800 dark:text-white flex justify-between items-center px-8">
        <Link to="/" className=" flex gap-6 h-full items-center">
          <img src="/top_icon.png" alt="" className=" h-4/5 aspect-auto" />
          <div className=" text-3xl font-bold">タイトル</div>
        </Link>
        <div className=" flex h-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` w-20 grid place-items-center ${
                isActive ? "border-b-4 border-sky-400" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` w-20 grid place-items-center ${
                isActive ? "border-b-4 border-sky-400" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              ` w-20 grid place-items-center ${
                isActive ? "border-b-4 border-sky-400" : ""
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` w-20 grid place-items-center ${
                isActive ? "border-b-4 border-sky-400" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <div className=" flex flex-col items-center justify-center">
            <div
              className={` w-[6.5rem] h-14 bg-white/40 flex justify-start items-center rounded-full p-2 cursor-pointer ${
                isOn ? "justify-end" : ""
              }`}
              onClick={() => {
                toggleDarkMode();
                setIsOn(!isOn);
              }}
            >
              <motion.div
                className=" w-10 h-10 rounded-full bg-white"
                layout
                transition={spring}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
