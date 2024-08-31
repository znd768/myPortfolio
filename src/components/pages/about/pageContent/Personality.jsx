import { motion } from "framer-motion";
import React from "react";
import PersonalInfo from "./personalInfo/PersonalInfo";

const personalInfo = [
  {
    title: "Profile",
    putItemName: true,
    items: { age: "27", birthplace: "Asahikawa, Hokkaido" },
  },
  {
    title: "Hobbies",
    putItemName: false,
    items: {
      item1: "learning trending web technology",
      item2: "watching MLB",
      item3: "game play (video or card games)",
    },
  },
  {
    title: "Like",
    putItemName: false,
    items: { item1: "cats", item2: "listening to music" },
  },
];

const Personality = () => {
  return (
    <section className="min-h-screen px-4 py-4 sm:gap-8 sm:px-6 lg:p-8 xl:p-10">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl">About Me</h1>
      <div className="flex flex-col px-2 py-4 sm:gap-8 sm:px-6 lg:p-8 xl:p-4">
        <h2 className="text-xl lg:text-2xl xl:text-3xl">My Personality</h2>
        <motion.article className="flex flex-col gap-8">
          {personalInfo.map((info) => (
            <PersonalInfo key={info.title} {...info} />
          ))}
          {/* <div>
          <h3 className="text-2xl">How to spend my holidays</h3>
          <p>I spend almost time staying home.</p>
          <p>
            I hardly go out except purpose of a hospital visit or shopping
            because I dislike crowd... :)
          </p>
        </div> */}
        </motion.article>
      </div>
    </section>
  );
};

export default Personality;
