import React from "react";
import ToggleButton from "./toggleButton/ToggleButton";
import Navigation from "./toggleButton/Navigation";
import { motion, useCycle } from "framer-motion";

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const variants = {
    open: {
      clipPath: "circle(1200px at 260px 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 260px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div animate={isOpen ? "open" : "closed"} className=" flex flex-col items-center justify-center">
      <motion.div variants={variants} className=" absolute top-0 right-0 z-10 w-[300px] h-screen bg-deep-skyblue">
        <Navigation />
      </motion.div>
      <ToggleButton toggle={() => toggleOpen()} />
    </motion.div>
  );
};

export default Sidebar;
