import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";
import Nav from "./Nav";

const Navbar = ({toggleDarkMode}) => {
  const [isOn, setIsOn] = useState(false);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      <motion.header layout layoutRoot className="h-20 bg-light-theme-3 dark:bg-dark-theme-4 flex justify-between items-center px-8">
        <Link to="/" className=" flex gap-6 h-full items-center">
          <img src="/top_icon.png" alt="" className=" h-4/5 aspect-auto" />
          <div className=" text-3xl font-bold">タイトル</div>
        </Link>
        <div className=" hidden lg:flex h-full">
          <Nav />
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
        <div className=" lg:hidden">
          <Sidebar />
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
