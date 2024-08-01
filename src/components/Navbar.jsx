import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";
import Nav from "./Nav";

const Navbar = ({ toggleDarkMode }) => {
  const [isOn, setIsOn] = useState(false);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      <motion.header
        layout
        layoutRoot
        className="flex h-20 items-center justify-between bg-light-theme-3 px-8 dark:bg-dark-theme-4"
      >
        <Link to="/" className="flex h-full items-center gap-6">
          <img src="/top_icon.png" alt="" className="aspect-auto h-4/5" />
          <div className="text-3xl font-bold">タイトル</div>
        </Link>
        <div className="hidden h-full lg:flex">
          <Nav />
          <div className="flex flex-col items-center justify-center">
            <div
              className={`flex h-14 w-[6.5rem] cursor-pointer items-center justify-start rounded-full bg-white/40 p-2 ${
                isOn ? "justify-end" : ""
              }`}
              onClick={() => {
                toggleDarkMode();
                setIsOn(!isOn);
              }}
            >
              <motion.div
                className="h-10 w-10 rounded-full bg-white"
                layout
                transition={spring}
              />
            </div>
          </div>
        </div>
        <Sidebar />
      </motion.header>
    </>
  );
};

export default Navbar;
