import React from "react";
import Carrer from "./pageContent/Carrer";
import Personality from "./pageContent/Personality";

const About = () => {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1344px] auto-rows-min grid-cols-12 md:grid-cols-20 gap-2 md:gap-4 lg:gap-y-0">
      <h1 className="col-start-1 col-end-8 flex h-12 items-center text-2xl md:col-start-2 md:col-end-18 lg:h-24 lg:text-3xl xl:text-4xl">
        About Me
      </h1>
      <Personality />
      <Carrer />
    </div>
  );
};

export default About;
