import { motion } from "framer-motion";
import React from "react";
import PersonalInfo from "./personalInfo/PersonalInfo";

const personalInfo = [
  {
    title: "Profile",
    putItemName: true,
    items: { age: "27", birthplace: "Asahikawa, Hokkaido" },
    url: "/img1.png",
  },
  {
    title: "Hobbies",
    putItemName: false,
    items: {
      item1: "learning trending web technology",
      item2: "watching MLB",
      item3: "playing video or card games",
    },
    url: "./img2.png",
  },
  {
    title: "Like",
    putItemName: false,
    items: { item1: "cats", item2: "listening to music" },
    url: "./img3.png",
  },
];

const Personality = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid gap-y-4 md:gap-y-12">
      <h2 className="col-start-2 col-end-12 text-xl md:col-start-3 md:col-end-19 lg:text-2xl xl:text-3xl">
        My Personality
      </h2>
      <motion.article className="col-start-2 col-end-12 grid grid-cols-subgrid gap-y-8 sm:gap-y-24 md:col-start-3 md:col-end-19">
        {personalInfo.map((info) => (
          <PersonalInfo key={info.title} {...info} />
        ))}
      </motion.article>
    </section>
  );
};

export default Personality;
