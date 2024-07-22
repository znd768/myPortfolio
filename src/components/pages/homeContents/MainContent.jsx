import React from "react";
import { motion } from "framer-motion";

const MainContent = () => {
  return (
    <section className=" h-[calc(100vh-5rem)] p-12 snap-end flex flex-col">
      <h1 className="">About Me</h1>
      <div className=" flex lg:flex-row">
        {/* text */}
        <div className=" w-1/2">
          <p>走るのが好きです</p>
        </div>
        {/* image? */}
        <div className=" w-1/2">
        <p>test</p>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
