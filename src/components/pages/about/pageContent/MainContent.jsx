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
                  <path d="M187 102.5C177.8 13.7 156.167 -1.49997 146.5 2.00003C114 20.0001 115 50 108 75C102.4 95 97 110.667 95 116C67.8 133.6 66.3334 178.667 69 199C-35.8 317.4 6.00003 510.333 40 592C39.2 664 47.0001 695.333 51.0001 702C49.4001 741.2 55.0001 777.667 58.0001 791H518C544 593.8 423.167 511.167 359.5 494.5C315.9 463.7 270.333 420.667 253 403C263.4 382.6 254.333 343.5 248.5 326.5C257.3 311.3 258.5 298.167 258 293.5C261.6 288.7 267.167 284.167 269.5 282.5C310.3 278.1 308.5 238 302.5 218.5C307.7 212.9 308 207.167 307.5 205C307.333 203 304.8 196.7 296 187.5C287.2 178.3 289.333 170 291.5 167C308.7 145.4 304.333 136.667 300 135C296.8 130.2 282.333 134.667 275.5 137.5C262.7 129.5 246.5 123.5 240 121.5C198.4 110.7 187.333 104.333 187 102.5Z" />
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
