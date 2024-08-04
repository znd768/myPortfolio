import React from "react";
import { motion } from "framer-motion";

const drawCarrer = {
  initial: { opacity: 0 },
  animate: (i) => {
    const delay = i * 1.2;
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
    event: ["札幌西高等学校卒業", "静岡大学情報科学科入学"],
  },
  {
    when: "2021",
    event: ["静岡大学情報科学科中途退学", "北海道情報大学転入"],
  },
  {
    when: "2023",
    event: ["北海道情報大学卒業", "某パソコン専門店システム部就職"],
  },
  {
    when: "2024.9",
    event: ["転職活動中"],
  },
  {
    when: "202X",
    event: ["フルスタックエンジニア"],
  },
];
const margin = [58, 249, 384, 482, 668];

const CarrerDesc = () => {
  return (
    <motion.div
      className="flex h-full flex-grow flex-col items-center drop-shadow-2xl md:w-3/4 md:flex-grow-0"
      initial="initial"
      animate="animate"
    >
      {carrer.map((v, i) => {
        let mt = "";
        if (i == 0) {
          mt = `${margin[i]}px-1.8rem`;
        } else {
          mt = `${margin[i]}px-${margin[i - 1]}px-6rem`;
        }

        return (
          <motion.div
            className={`relative mt-[calc(${mt})] grid h-24 w-full place-items-center rounded-lg bg-trans-white after:invisible after:absolute after:left-[-8rem] after:top-[20%] after:h-8 after:w-32 after:translate-y-[-20%] after:bg-trans-white after:content-[''] after:[clip-path:polygon(100%_0%,50%_50%,100%_100%)] md:w-[60%] md:after:visible lg:w-[80%] xl:w-[60%] dark:bg-dark-theme-1 after:dark:bg-dark-theme-1`}
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
