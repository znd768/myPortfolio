import React, { useEffect, useRef } from "react";
import ToggleButton from "./toggleButton/ToggleButton";
import Navigation from "./toggleButton/Navigation";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTheme, useThemeUpdate } from "../../pageFunctions/ThemeContext";

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
  const darkTheme = useTheme();
  const themeUpdate = useThemeUpdate();

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
        <div className="grid h-screen w-full place-items-center">
          <Navigation />
        </div>
        <button
          className="absolute left-[12px] top-[12px] grid size-[56px] place-items-center rounded-full border-2 border-transparent duration-200 hover:border-light-theme-text hover:dark:border-white"
          onClick={themeUpdate}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="size-6"
          >
            {darkTheme ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            )}
          </svg>
        </button>
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
