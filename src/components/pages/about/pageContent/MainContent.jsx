import React from "react";
import CarrerDesc from "./CarrerDesc";
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
            <svg width="0" height="0">
              <defs>
                <clipPath id="clipPathId" clipPathUnits="userSpaceOnUse">
                  <path d="M81 133V185L68 203L45 243L25 295L2 367L8 413L20 466V505L45 592V654L68 789H531V750L539 694L521 645L466 561L430 517L367 493L317 454L263 403V374L258 321L263 309L272 285L280 279H296L302 273L312 262L317 250L312 216L317 208L312 193L302 179L296 163L312 141V133H296H280L272 127L227 112L195 102L182 40L169 8L155 2H146L123 40L114 81L97 112L81 133Z" />
                </clipPath>
              </defs>
            </svg>
            <div className="clip-cat h-[688px] bg-gradient-to-b from-light-theme-3 to-transparent dark:from-dark-theme-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
