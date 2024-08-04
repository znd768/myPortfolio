import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="grid min-h-[calc(100vh-5rem)] place-items-center p-4 lg:p-12">
      <div className="flex max-w-[1344px] flex-col-reverse items-center justify-center gap-8 lg:flex-row xl:gap-12">
        {/* profile block */}
        <div className="flex flex-col gap-2 lg:w-[48%] lg:justify-center lg:gap-4">
          <h1 className="text-4xl lg:text-6xl">
            Hello, I'm&nbsp;
            <motion.span
              className="inline-block text-dark-theme-3 lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Gaku Fujimoto
            </motion.span>
          </h1>
          <div className="leading-5 sm:text-xl sm:leading-6 lg:text-[1.2rem] lg:leading-6">
            <p>I'm a web developer living in Tokyo.</p>
            <p>I hope your coming here will be good for you.</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <h2 className="text-xl lg:text-4xl">skills</h2>
            <div className="flex flex-row flex-wrap gap-3 text-white">
              <span className="rounded-full bg-sky-600 px-3 py-1">
                HTML & CSS
              </span>
              <span className="rounded-full bg-sky-600 px-3 py-1">
                Javascript
              </span>
              <span className="rounded-full bg-sky-600 px-3 py-1">Python</span>
              <span className="rounded-full bg-sky-600 px-3 py-1">PHP</span>
              <span className="rounded-full bg-sky-600 px-3 py-1">
                Postgresql
              </span>
              <span className="rounded-full bg-sky-600 px-3 py-1">Git</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <h2 className="text-xl lg:text-4xl">Qualifications</h2>
            <div className="flex flex-row flex-wrap gap-x-3 text-white">
              <span className="rounded-full bg-orange-600 px-3 py-1">FE</span>
              <span className="rounded-full bg-orange-600 px-3 py-1">AP</span>
            </div>
          </div>
        </div>
        {/* image block */}
        <motion.div
          className="size-[64%] self-center overflow-hidden sm:size-[48%] md:size-[56%] lg:size-[40%]"
          animate={{
            borderRadius: [
              "38% 62% 37% / 41% 44% 56% 59%",
              "66% 32% 71% / 41% 44% 56% 59%",
              "38% 62% 37% / 41% 44% 56% 59%",
            ],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <img src="/home_cat.jpg" alt="" className="aspect-square" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
