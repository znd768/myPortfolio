import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const variants = {
  offscreen: {
    x: -300,
    y: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.4,
      delay: 0.3,
    },
  },
};

const PersonalInfo = ({ title, putItemName, items }) => {
  return (
    <div className="h-[768px] p-8 px-8">
      <motion.div
        className="flex h-full flex-row bg-slate-400 rounded-3xl"
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="flex w-1/2 flex-col justify-center">
          <div className="grid h-1/3 grid-cols-12 gap-4 grid-rows-2">
            <h3 className="col-start-3 col-span-8 text-lg lg:text-3xl self-center ">
              {title}
            </h3>
            <div className="col-span-12 grid grid-cols-subgrid items-center">
              <ul className="col-span-8 col-start-4">
                {Object.entries(items).map(([itemKey, item]) => {
                  return (
                    <li key={itemKey} className="first-letter:uppercase">
                      {putItemName && (
                        <span className="mr-2 after:content-[':']">
                          {itemKey}
                        </span>
                      )}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </motion.div>
    </div>
  );
};

export default PersonalInfo;
