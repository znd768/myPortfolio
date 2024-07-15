import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const text = "Welcome to My Portfolio Site!";
  return (
    <motion.div className=" h-[calc(100vh-5rem)] p-12 flex flex-col gap-12 dark:bg-zinc-900 dark:text-white bg-gray-300 text-black">
      <motion.h1 className=" px-3 text-[6rem] font-bold font-Niconne leading-tight bg-gradient-to-r from-deep-skyblue via-mint-skyblue to-mint text-transparent bg-clip-text">
        {text}
      </motion.h1>
      <div className=" flex flex-row justify-around">
        <div className=" w-[48%] pl-16 py-8">
          <div className=" flex flex-col align-center justify-center">
            <h2 className=" text-6xl">Hello, I'm<p className=" text-green-600">Gaku Fujimoto</p></h2>
          </div>
        </div>
        <div className=" w-[48%] p-8">
          <img src="/home_cat.jpg" alt="" className=" aspect-square rounded-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
