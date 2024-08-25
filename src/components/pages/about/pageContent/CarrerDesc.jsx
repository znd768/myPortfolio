import React from "react";
import { motion } from "framer-motion";

const drawCarrer = {
  initial: { opacity: 0 },
  animate: (i) => {
    const delay = (i + 1) * 1.2 + 0.1;
    return {
      opacity: 1,
      transition: {
        delay,
        duration: 0.8,
      },
    };
  },
};

const carrer = [
  {
    when: "2016",
    event: ["札幌西高等学校卒業", "静岡大学情報学部入学"],
  },
  {
    when: "2021",
    event: ["静岡大学中途退学", "北海道情報大学転入"],
  },
  {
    when: "2023",
    event: ["北海道情報大学卒業", "パソコン専門店システム部就職"],
  },
  {
    when: "2024.9",
    event: ["転職活動中"],
  },
  {
    when: "In a few years",
    event: ["Web開発者として活躍"],
  },
];

const margin = [
  "mt-[calc(58px-1.8rem)]",
  "mt-[calc(249px-58px-6rem)]",
  "mt-[calc(384px-249px-6rem)]",
  "mt-[calc(482px-384px-6rem)]",
  "mt-[calc(668px-482px-6rem)]",
];

const CarrerDesc = ({ inView }) => {
  return (
    <motion.div
      className="flex h-full flex-grow flex-col items-center drop-shadow-2xl md:w-3/4 md:flex-grow-0"
      initial="initial"
      animate={inView && "animate"}
    >
      {carrer.map((v, i) => {
        return (
          <motion.div
            className={`relative ${margin[i]} grid h-24 w-full place-items-center rounded-lg bg-trans-white after:invisible after:absolute after:left-[-8rem] after:top-[20%] after:h-8 after:w-32 after:translate-y-[-20%] after:bg-trans-white after:content-[''] after:[clip-path:polygon(100%_0%,50%_50%,100%_100%)] md:w-[60%] md:after:visible lg:w-[80%] xl:w-[60%] dark:bg-dark-theme-1 after:dark:bg-dark-theme-1`}
            variants={drawCarrer}
            custom={i + 1}
            key={v.when}
          >
            <div className="w-[80%]">
              <p>{v.when}</p>
              {v.event.map((ev) => (
                <p key={ev}>{ev}</p>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CarrerDesc;
