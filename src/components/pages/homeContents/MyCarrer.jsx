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
      <h1 className=" text-2xl lg:text-3xl xl:text-4xl">My Career</h1>
      <div className=" flex lg:flex-row">
        {/* chart */}
        <div className=" w-full lg:w-1/2 flex flex-row">
          <div className=" w-1/6 flex flex-col items-center">
            {/* line */}
            <div className=" flex flex-col h-[calc(240px+36px)] justify-start items-center">
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
                className=" w-1 bg-red-500 mt-[-10px]"
                initial={{ height: 0 }}
                animate={{ height: 240 }}
                transition={{ duration: 1.3 }}
              />
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className=" w-8 h-8 rounded-full border-4 dark:border-white"></div>
              <div className=" w-1 h-[240px] bg-red-500"></div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className=" w-8 h-8 rounded-full border-4 dark:border-white"></div>
              <div className=" w-1 h-[240px] bg-red-500"></div>
            </div>
          </div>
          <div className=" flex flex-1 flex-col items-center">
            <motion.div
              className=" relative w-3/4 h-[200px] dark:bg-gray-700 rounded-lg shadow-2xl p-8 my-[-2rem] arrow"
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
        <div className=" hidden lg:flex w-1/2">
          <p>test</p>
        </div>
      </div>
    </PageContent>
  );
};

export default MyCarrer;
