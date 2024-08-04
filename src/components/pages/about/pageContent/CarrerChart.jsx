import React from "react";
import { motion } from "framer-motion"

const drawChart = {
  initial: { pathLength: 0, opacity: 0 },
  animate: (i) => {
    const delay = i * 0.8;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const CarrerChart = () => {
  return (
    <div className="flex w-16 flex-col items-center">
      <motion.svg
        width="36"
        height="800"
        viewBox="0 0 36 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        animate="animate"
      >
        <motion.line
          x1="18"
          y1="76"
          x2="18"
          y2="231"
          strokeWidth="4"
          variants={drawChart}
          custom={1}
          className="stroke-dark-theme-black dark:stroke-white"
        />
        <motion.line
          x1="18"
          y1="267"
          x2="18"
          y2="366"
          strokeWidth="4"
          variants={drawChart}
          custom={2}
          className="stroke-dark-theme-black dark:stroke-white"
        />
        <motion.line
          x1="18"
          y1="402"
          x2="18"
          y2="464"
          strokeWidth="4"
          variants={drawChart}
          custom={3}
          className="stroke-dark-theme-black dark:stroke-white"
        />
        <motion.line
          x1="18"
          y1="498"
          x2="18"
          y2="658"
          strokeWidth="4"
          strokeDasharray="8 8"
          initial={{ y2: 498 }}
          animate={{ y2: 658 }}
          transition={{ duration: 3, delay: 3.2 }}
          className="stroke-dark-theme-black dark:stroke-white"
        />
        <motion.circle
          cx="18"
          cy="58"
          r="16"
          stroke="#256E85"
          strokeWidth="4"
          variants={drawChart}
          custom={1}
          className=""
        />
        <motion.circle
          cx="18"
          cy="249"
          r="16"
          stroke="#256E85"
          strokeWidth="4"
          variants={drawChart}
          custom={2}
        />
        <motion.circle
          cx="18"
          cy="384"
          r="16"
          stroke="#256E85"
          strokeWidth="4"
          variants={drawChart}
          custom={3}
        />
        <motion.circle
          cx="18"
          cy="482"
          r="16"
          stroke="#256E85"
          strokeWidth="4"
          variants={drawChart}
          custom={4}
        />
        <motion.circle
          cx="18"
          cy="668"
          r="16"
          stroke="#448525"
          strokeWidth="4"
          variants={drawChart}
          custom={6}
        />
      </motion.svg>
    </div>
  );
};

export default CarrerChart;
