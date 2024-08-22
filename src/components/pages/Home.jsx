import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Python",
  "PHP",
  "Postgresql",
  "Git",
];
const qualifications = ["FE", "AP"];
const links = [
  { link: "https://github.com/znd768", name: "GitHub" },
  { link: "https://atcoder.jp/users/mirari", name: "AtCoder" },
];

const Home = () => {
  return (
    <div className="grid min-h-[calc(100vh-5rem)] place-items-center p-4 lg:p-12 mt-12 lg:mt-0">
      <div className="flex max-w-[1344px] flex-col-reverse items-center gap-8 lg:gap-0 justify-evenly lg:flex-row xl:gap-12">
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
              {skills.map((skill) => (
                <span key={skill} className="rounded-full bg-sky-600 px-3 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <h2 className="text-xl lg:text-4xl">Qualifications</h2>
            <div className="flex flex-row flex-wrap gap-x-3 text-white">
              {qualifications.map((qualify) => (
                <span
                  key={qualify}
                  className="rounded-full bg-orange-600 px-3 py-1"
                >
                  {qualify}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-xl lg:text-4xl">Links</h3>
            <div className="flex flex-row flex-wrap gap-x-3">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-light-theme-text px-3 py-1 duration-300 hover:bg-slate-800 hover:text-light-theme-white dark:border-white dark:hover:bg-light-theme-white dark:hover:text-black"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* image block */}
        <motion.div
          className="size-[56%] self-center overflow-hidden sm:size-[48%] lg:size-[32%] dark:bg-dark-theme-2 bg-light-theme-2"
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
          <img src="/myProfImage.png" alt="" className="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
