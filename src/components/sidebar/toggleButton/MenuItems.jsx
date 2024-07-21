import React from "react";
import { links } from "../../links";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const colors = [
  "border-[#1A1A40]",
  "border-[#270082]",
  "border-[#7A0BC0]",
  "border-[#FA58B6]",
];

const MenuItems = () => {
  return (
    <div className=" fixed top-0 right-0 w-64 h-screen z-10 bg-white text-black grid place-items-center">
      <ul className=" flex flex-col gap-4">
        {links.map((link, idx) => {
          return (
            <motion.li
              key={link.name}
              className={` p-1 text-2xl border-b-2 border-solid ${colors[idx]}`}
            >
              <Link to={link.path} className=" w-full inline-block">
                {link.name}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItems;
