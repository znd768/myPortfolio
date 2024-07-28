import React from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion"

const itemIds = [0, 1, 2, 3];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = () => {
  return (
    <motion.ul className=" flex flex-col gap-4 text-black" variants={variants}>
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
