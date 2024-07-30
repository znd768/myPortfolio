import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const text = "Welcome to My Portfolio Site!";
  return (
    <motion.div className="flex min-h-[calc(100vh-5rem)] flex-col gap-4 p-12">
      <motion.h1
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="self-start bg-gradient-to-r from-deep-skyblue via-mint-skyblue to-mint bg-clip-text p-3 font-Niconne text-4xl font-bold leading-tight text-transparent md:text-6xl xl:text-8xl"
      >
        {text}
      </motion.h1>
      <div className="flex h-2/3 max-w-[1344px] flex-col-reverse items-center justify-center self-center lg:flex-row lg:items-start xl:gap-12">
        <div className="align-center flex flex-col gap-2 lg:aspect-square lg:w-[48%] lg:justify-center lg:gap-4 lg:py-8 lg:pl-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl">
            Hello, I'm
            <span className="inline-block indent-4 text-dark-theme-3 lg:block lg:indent-0">
              Gaku Fujimoto
            </span>
          </h2>
          <div className="leading-5 lg:text-[1.2rem] lg:leading-6">
            <p>I'm a web developer living in Tokyo.</p>
            <p>I hope your coming here will be good for you.</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="lg:text-4xl">skills</h3>
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
            <div className="flex flex-col gap-y-1">
              <h3 className="lg:text-4xl">Qualifications</h3>
              <div className="flex flex-row flex-wrap gap-x-3 text-white">
                <span className="rounded-full bg-orange-600 px-3 py-1">FE</span>
                <span className="rounded-full bg-orange-600 px-3 py-1">AP</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[64%] p-8 sm:w-[48%] md:w-[56%] lg:w-[48%]">
          <img
            src="/home_cat.jpg"
            alt=""
            className="aspect-square rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
