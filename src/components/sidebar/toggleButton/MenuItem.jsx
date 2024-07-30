import React from "react";
import { links } from "../../links";
import { motion } from "framer-motion";
import { Link, ScrollRestoration } from "react-router-dom";

const colors = [
  "border-[#1A1A40]",
  "border-[#270082]",
  "border-[#7A0BC0]",
  "border-[#FA58B6]",
];

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ i }) => {
  return (
    <motion.li
      key={links[i].name}
      className={`border-b-2 border-solid p-1 text-2xl ${colors[i]}`}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={links[i].path} className="inline-block w-full dark:text-white">
        {links[i].name}
      </Link>
    </motion.li>
  );
};

export default MenuItem;
