import React from "react";
import { animate, motion } from "framer-motion";
import PageContent from "../PageContent";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
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

const variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: 1.5,
        type: "spring",
        duration: 1.5,
        bounce: 0,
      },
      opacity: {
        delay: 1.5,
        duration: 0.01,
      },
    },
  },
};

const MyCarrer = () => {
  return (
    <PageContent>
      <h1 className="text-2xl lg:text-3xl xl:text-4xl">My Career</h1>
      <div className="flex lg:flex-row">
        {/* chart */}
        <div className="flex w-full flex-row lg:w-1/2">
          <div className="flex w-1/6 flex-col items-center">
            {/* line */}
            <div className="flex h-[calc(240px+36px)] flex-col items-center justify-start">
              <svg width="36" height="36" viewBox="0 0 36 36">
                <motion.circle
                  cx="18"
                  cy="18"
                  r="15"
                  stroke="#ff0055"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.3 }}
                />
              </svg>
              <motion.div
                className="mt-[-10px] w-1 bg-red-500"
                initial={{ height: 0 }}
                animate={{ height: 240 }}
                transition={{ duration: 1.3 }}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="h-8 w-8 rounded-full border-4 dark:border-white"></div>
              <div className="h-[240px] w-1 bg-red-500"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="h-8 w-8 rounded-full border-4 dark:border-white"></div>
              <div className="h-[240px] w-1 bg-red-500"></div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <motion.div
              className="arrow relative my-[-2rem] h-[200px] w-3/4 rounded-lg p-8 shadow-2xl dark:bg-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <p>2016年</p>
              <p>札幌西高等学校卒業</p>
              <p>同年 静岡大学 情報学部入学</p>
            </motion.div>
          </div>
        </div>
        {/* text */}
        <div className="hidden w-1/2 lg:flex"></div>
      </div>
    </PageContent>
  );
};

export default MyCarrer;
