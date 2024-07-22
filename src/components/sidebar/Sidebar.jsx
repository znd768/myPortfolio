import React, { useRef } from "react";
import ToggleButton from "./toggleButton/ToggleButton";
import Navigation from "./toggleButton/Navigation";
import { AnimatePresence, motion, useCycle } from "framer-motion";

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

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className=" flex flex-col items-center justify-center h-full"
    >
      <motion.div
        variants={variants}
        className=" fixed top-0 right-0 z-10 w-[300px] h-screen grid place-items-center bg-deep-skyblue"
      >
        <Navigation />
      </motion.div>
      <ToggleButton toggle={toggleOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className=" fixed top-0 left-0 w-full h-full backdrop-blur-sm"
            onClick={toggleOpen}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;
