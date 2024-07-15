import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const text = "Welcome to My Portfolio Site!";
  return (
    <motion.div className=" h-[calc(100vh-5rem)] p-12 flex flex-col gap-12 dark:bg-zinc-900 dark:text-white">
      <motion.h1 className=" text-8xl font-bold font-Niconne leading-loose bg-gradient-to-r from-deep-skyblue via-mint-skyblue to-mint inline-block text-transparent bg-clip-text">
        {text.split("").map((letter, idx) => (
          <motion.span
          key={idx}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2, duration: 0.2 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <div className=" flex flex-row gap-8 bg-sky-700">
        <div className=" flex-auto max-w-1/2 w-full bg-gray-500">
          <div></div>
        </div>
        <div className=" flex-auto w-full overflow-hidden rounded-xl">
          <img src="/home_cat.jpg" alt="" className=" aspect-square" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
