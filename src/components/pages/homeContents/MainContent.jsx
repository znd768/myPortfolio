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
        <div className="flex xl:flex-row">
          {/* left side */}
          <div className="flex w-full flex-row justify-center lg:justify-between xl:w-1/2 xl:justify-center">
            {/* chart */}
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
                  variants={draw}
                  custom={1}
                  className="stroke-dark-theme-black dark:stroke-white"
                />
                <motion.line
                  x1="18"
                  y1="267"
                  x2="18"
                  y2="366"
                  strokeWidth="4"
                  variants={draw}
                  custom={2}
                  className="stroke-dark-theme-black dark:stroke-white"
                />
                <motion.line
                  x1="18"
                  y1="402"
                  x2="18"
                  y2="464"
                  strokeWidth="4"
                  variants={draw}
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
                  variants={draw}
                  custom={1}
                  className=""
                />
                <motion.circle
                  cx="18"
                  cy="249"
                  r="16"
                  stroke="#256E85"
                  strokeWidth="4"
                  variants={draw}
                  custom={2}
                />
                <motion.circle
                  cx="18"
                  cy="384"
                  r="16"
                  stroke="#256E85"
                  strokeWidth="4"
                  variants={draw}
                  custom={3}
                />
                <motion.circle
                  cx="18"
                  cy="482"
                  r="16"
                  stroke="#256E85"
                  strokeWidth="4"
                  variants={draw}
                  custom={4}
                />
                <motion.circle
                  cx="18"
                  cy="668"
                  r="16"
                  stroke="#448525"
                  strokeWidth="4"
                  variants={draw}
                  custom={6}
                />
              </motion.svg>
            </div>
            <div className="flex h-full flex-grow md:flex-grow-0 md:w-3/4 flex-col items-center drop-shadow-2xl">
              <div className="relative mt-[calc(58px-1.8rem)] grid h-24 w-full md:w-[60%] place-items-center rounded-lg bg-trans-white after:absolute after:left-[-8rem] after:top-[20%] after:h-8 after:w-32 after:translate-y-[-20%] after:bg-trans-white after:content-[''] after:[clip-path:polygon(100%_0%,50%_50%,100%_100%)] lg:w-[80%] xl:w-[60%] dark:bg-dark-theme-1 after:dark:bg-dark-theme-1 after:invisible md:after:visible">
                <div className="w-[80%]">
                  <p>2016</p>
                  <p>札幌西高等学校卒業</p>
                  <p>静岡大学情報科学科入学</p>
                </div>
              </div>
              <div className="relative mt-[calc(249px-58px-6rem)] grid h-24 w-full md:w-[60%] place-items-center rounded-lg bg-trans-white after:absolute after:left-[-8rem] after:top-[20%] after:h-8 after:w-32 after:translate-y-[-20%] after:bg-trans-white after:content-[''] after:[clip-path:polygon(100%_0%,50%_50%,100%_100%)] lg:w-[80%] xl:w-[60%] dark:bg-dark-theme-1 after:dark:bg-dark-theme-1 after:invisible md:after:visible">
                <div className="w-[80%]">
                  <p>2021</p>
                  <p>静岡大学情報科学科中途退学</p>
                  <p>北海道情報大学入学</p>
                </div>
              </div>
              <div className="relative mt-[calc(384px-249px-6rem)] grid h-24 w-full md:w-[60%] place-items-center rounded-lg bg-trans-white after:absolute after:left-[-8rem] after:top-[20%] after:h-8 after:w-32 after:translate-y-[-20%] after:bg-trans-white after:content-[''] after:[clip-path:polygon(100%_0%,50%_50%,100%_100%)] lg:w-[80%] xl:w-[60%] dark:bg-dark-theme-1 after:dark:bg-dark-theme-1 after:invisible md:after:visible">
                <div className="w-[80%]">
                  <p>2023</p>
                  <p>北海道情報大学卒業</p>
                  <p>某パソコン専門店システム科就職</p>
                </div>
              </div>
              <div className="relative mt-[calc(482px-384px-6rem)] grid h-24 w-full md:w-[60%] place-items-center rounded-lg bg-trans-white after:absolute after:left-[-8rem] after:top-[20%] after:h-8 after:w-32 after:translate-y-[-20%] after:bg-trans-white after:content-[''] after:[clip-path:polygon(100%_0%,50%_50%,100%_100%)] lg:w-[80%] xl:w-[60%] dark:bg-dark-theme-1 after:dark:bg-dark-theme-1 after:invisible md:after:visible">
                <div className="w-[80%]">
                  <p>現在</p>
                  <p>転職活動中</p>
                </div>
              </div>
              <div className="relative mt-[calc(668px-482px-6rem)] grid h-24 w-full md:w-[60%] place-items-center rounded-lg bg-trans-white after:absolute after:left-[-8rem] after:top-[20%] after:h-8 after:w-32 after:translate-y-[-20%] after:bg-trans-white after:content-[''] after:[clip-path:polygon(100%_0%,50%_50%,100%_100%)] lg:w-[80%] xl:w-[60%] dark:bg-dark-theme-1 after:dark:bg-dark-theme-1 after:invisible md:after:visible">
                <div className="w-[80%]">
                  <p>In a few years</p>
                  <p>フルスタックエンジニアになることが目標</p>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="hidden h-full w-full flex-col p-12 lg:flex xl:w-1/2">
            a
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
