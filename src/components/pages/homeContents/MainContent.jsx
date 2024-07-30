import React from "react";
import { animate, motion } from "framer-motion";

const draw = {
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

const MainContent = () => {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col gap-8 px-6 py-4 lg:p-8 xl:p-10">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl">About Me</h1>
      <div className="w-[95%] max-w-[1344px] self-center sm:w-[90%] xl:w-full">
        <div className="flex overflow-hidden xl:flex-row">
          {/* left side */}
          <div className="flex flex-row justify-center gap-4 bg-slate-700 xl:w-1/2">
            {/* chart */}
            <div className="flex w-16 flex-col items-center">
              <motion.svg
                width="36"
                height="654"
                viewBox="0 0 36 654"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="initial"
                animate="animate"
              >
                <motion.line
                  x1="18"
                  y1="36"
                  x2="18"
                  y2="191"
                  strokeWidth="4"
                  variants={draw}
                  custom={1}
                  className="stroke-dark-theme-black dark:stroke-white"
                />
                <motion.line
                  x1="18"
                  y1="227"
                  x2="18"
                  y2="326"
                  strokeWidth="4"
                  variants={draw}
                  custom={2}
                  className="stroke-dark-theme-black dark:stroke-white"
                />
                <motion.line
                  x1="18"
                  y1="362"
                  x2="18"
                  y2="424"
                  strokeWidth="4"
                  variants={draw}
                  custom={3}
                  className="stroke-dark-theme-black dark:stroke-white"
                />
                <motion.line
                  x1="18"
                  y1="458"
                  x2="18"
                  y2="618"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  initial={{ y2: 458 }}
                  animate={{ y2: 618 }}
                  transition={{ duration: 3, delay: 3.2 }}
                  className="stroke-dark-theme-black dark:stroke-white"
                />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke="#256E85"
                  strokeWidth="4"
                  variants={draw}
                  custom={1}
                  className=""
                />
                <motion.circle
                  cx="18"
                  cy="209"
                  r="16"
                  stroke="#256E85"
                  strokeWidth="4"
                  variants={draw}
                  custom={2}
                />
                <motion.circle
                  cx="18"
                  cy="344"
                  r="16"
                  stroke="#256E85"
                  strokeWidth="4"
                  variants={draw}
                  custom={3}
                />
                <motion.circle
                  cx="18"
                  cy="442"
                  r="16"
                  stroke="#256E85"
                  strokeWidth="4"
                  variants={draw}
                  custom={4}
                />
                <motion.circle
                  cx="18"
                  cy="628"
                  r="16"
                  stroke="#448525"
                  strokeWidth="4"
                  variants={draw}
                  custom={6}
                />
              </motion.svg>
            </div>
            <div className="h-full w-3/4 bg-slate-200">
              <svg
                width="408"
                height="148"
                viewBox="0 0 408 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="40" width="368" height="148" rx="12" fill="#D9D9D9" />
                <path d="M0 47L40.5 23.6173V70.3827L0 47Z" fill="#D9D9D9" />
              </svg>
            </div>
          </div>
          {/* right side */}
          <div className="flex h-full w-full flex-col p-12 xl:w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
