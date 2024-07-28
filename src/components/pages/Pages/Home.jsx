import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const text = "Welcome to My Portfolio Site!";
  return (
    <motion.div className=" min-h-[calc(100vh-5rem)] p-12 flex flex-col gap-4">
      <motion.h1
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className=" self-start p-3 text-4xl md:text-6xl xl:text-8xl font-bold font-Niconne leading-tight bg-gradient-to-r from-deep-skyblue via-mint-skyblue to-mint text-transparent bg-clip-text"
      >
        {text}
      </motion.h1>
      <div className=" self-center flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start max-w-[1344px] h-2/3 xl:gap-12">
        <div className=" lg:w-[48%] lg:aspect-square lg:pl-16 lg:py-8 flex flex-col align-center lg:justify-center gap-2 lg:gap-4 ">
          <h2 className=" text-3xl sm:text-4xl lg:text-6xl">
            Hello, I'm
            <span className=" indent-4 lg:indent-0 inline-block lg:block text-dark-theme-3">
              Gaku Fujimoto
            </span>
          </h2>
          <div className=" leading-5 lg:leading-6 lg:text-[1.2rem]">
            <p>I'm a web developer living in Tokyo.</p>
            <p>I hope your coming here will be good for you.</p>
          </div>
          <div className=" flex flex-col gap-y-1">
            <h3 className=" lg:text-4xl">skills</h3>
            <div className=" flex flex-row flex-wrap gap-3 text-white">
              <span className=" bg-sky-600 rounded-full px-3 py-1">
                HTML & CSS
              </span>
              <span className=" bg-sky-600 rounded-full px-3 py-1">
                Javascript
              </span>
              <span className=" bg-sky-600 rounded-full px-3 py-1">Python</span>
              <span className=" bg-sky-600 rounded-full px-3 py-1">PHP</span>
              <span className=" bg-sky-600 rounded-full px-3 py-1">
                Postgresql
              </span>
              <span className=" bg-sky-600 rounded-full px-3 py-1">Git</span>
            </div>
            <div className=" flex flex-col gap-y-1">
              <h3 className=" lg:text-4xl">Qualifications</h3>
              <div className=" flex flex-row flex-wrap gap-x-3 text-white">
                <span className=" bg-orange-600 rounded-full px-3 py-1">
                  FE
                </span>
                <span className=" bg-orange-600 rounded-full px-3 py-1">
                  AP
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[64%] sm:w-[48%] md:w-[56%] lg:w-[48%] p-8">
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
