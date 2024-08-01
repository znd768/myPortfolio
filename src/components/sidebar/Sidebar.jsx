import React, { useEffect, useRef } from "react";
import ToggleButton from "./toggleButton/ToggleButton";
import Navigation from "./toggleButton/Navigation";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      toggleOpen();
    }
  }, [location]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className="flex h-full flex-col items-center justify-center lg:hidden"
    >
      <motion.div
        variants={variants}
        className="absolute right-0 top-0 z-20 h-full w-[300px] bg-light-theme-1 dark:bg-dark-theme-1"
      >
        <div className=" h-screen w-full grid place-items-center">
          <Navigation />
        </div>
      </motion.div>
      <ToggleButton toggle={toggleOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed left-0 top-0 z-10 h-full w-full backdrop-blur-sm"
            onClick={toggleOpen}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;
