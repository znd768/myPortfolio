import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeContext";

const Path = (props) => {
  const darkTheme = useTheme()
  const strokeColor = darkTheme ? 'hsl(0, 100%, 100%)' : 'hsl(0, 0%, 18%)'
  return (
  <motion.path
    fill={"transparent"}
    strokeWidth={"3"}
    stroke={strokeColor}
    strokeLinecap={"round"}
    {...props}
  />
)};
const ToggleButton = ({ toggle }) => {
  return (
    <button
      onClick={toggle}
      className=" w-[56px] h-[56px] rounded-full outline-none border-none cursor-pointer fixed top-[12px] right-[12px] z-30 grid place-items-center"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            open: { d: "M 3 16.5 L 17 2.5" },
            closed: { d: "M 2 2.5 L 20 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.1 }}
          initial={{ opacity: 1 }}
        />
        <Path
          variants={{
            open: { d: "M 3 2.5 L 17 16.346" },
            closed: { d: "M 2 16.346 L 20 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
