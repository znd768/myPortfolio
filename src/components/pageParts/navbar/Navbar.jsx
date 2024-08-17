import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./../sidebar/Sidebar";
import Nav from "./Nav";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <motion.header
      layout
      layoutRoot
      className="flex h-20 items-center justify-end bg-light-theme-3 px-8 dark:bg-dark-theme-4"
    >
      <div className="hidden h-full lg:flex lg:gap-2">
        <Nav />
        <ModeToggle />
      </div>
      <Sidebar />
    </motion.header>
  );
};

export default Navbar;
