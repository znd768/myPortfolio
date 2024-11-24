import React, { useState, useEffect, useRef } from "react";
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

const name = "Gaku Fujimoto";

const Description = ({ isImgLoaded }) => {
  const [text, setText] = useState("");
  const [animate, setAnimate] = useState(false);
  const intValRef = useRef(null);

  useEffect(() => {
    if (isImgLoaded) {
      setAnimate(true);
    }
  }, [isImgLoaded]);

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        intValRef.current = setInterval(() => {
          setText((prevText) => {
            const updateText = name.substring(0, prevText.length + 1);
            if (updateText === name) {
              clearInterval(intValRef.current);
              setAnimate(false);
            }
            return updateText;
          });
        }, 270);
      }, 1750);
    }
    return () => clearInterval(intValRef.current);
  }, [animate]);

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:w-[56%] lg:justify-center xl:w-[48%]">
      <h1 className="text-4xl lg:text-6xl lg:leading-snug">
        <div className="h-22">Hello, I&apos;m</div>
        <div className="h-22">
          <div
            className={`inline-block text-indigo-400 dark:text-dark-theme-3 ${isImgLoaded && !animate ? "after:content-['.'] dark:after:text-white after:text-light-theme-text" : ""}`}
          >
            {text}
          </div>
          {isImgLoaded ? (
            <motion.span
              className="border-r-2 border-light-theme-text dark:border-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ repeat: 6, duration: 1, delay: 6 }}
            ></motion.span>
          ) : (
            ""
          )}
        </div>
      </h1>
      <div className="leading-5 sm:text-xl sm:leading-6 lg:text-[1.2rem] lg:leading-6">
        <p>I&apos;m a web developer living in Tokyo.</p>
        <p>I hope your coming here will be good for you.</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xl lg:text-4xl">skills</h2>
        <div className="flex flex-row flex-wrap gap-3 text-white">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full bg-sky-600 px-3 py-1">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
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
      {/* <div className="flex flex-col gap-y-2">
        <h3 className="text-xl lg:text-4xl">Links</h3>
        <div className="flex flex-row flex-wrap gap-x-3">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-light-theme-text px-3 py-1 duration-300 hover:bg-slate-800 hover:text-dark-theme-white dark:border-white dark:hover:bg-dark-theme-white dark:hover:text-black"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div> */}
    </div>
  );
};
export default Description;
