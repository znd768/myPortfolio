import React from "react";
import CarrerDesc from "./CarrerDesc";
import { motion } from "framer-motion";
import CarrerChart from "./CarrerChart";

const MainContent = () => {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col gap-2 px-2 py-4 sm:gap-8 sm:px-6 lg:p-8 xl:p-10">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl">About Me</h1>
      <div className="w-[95%] max-w-[1344px] self-center sm:w-[90%] xl:w-full">
        <h2 className="text-xl">My Carrer</h2>
        <div className="flex xl:flex-row">
          {/* left side */}
          <div className="flex w-full flex-row justify-center lg:justify-between xl:w-1/2 xl:justify-center">
            {/* chart */}
            <CarrerChart />
            <CarrerDesc />
          </div>
          {/* right side */}
          <div className="hidden h-full w-full flex-col p-12 lg:flex xl:w-1/2">
          <h2></h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
