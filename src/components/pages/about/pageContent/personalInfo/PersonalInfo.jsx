import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  offscreen: {
    x: "-100%",
    y: "20%",
    opacity: 0,
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
      delay: 0.3,
    },
  },
};

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.4,
    },
  },
};

const PersonalInfo = ({ title, putItemName, items, url, desc }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-380px 0px" });

  return (
    <motion.div
      className="col-span-full grid h-[520px] grid-cols-subgrid grid-rows-12 gap-2 overflow-hidden rounded-3xl bg-light-theme-2 shadow-md lg:h-[768px] lg:gap-4 dark:bg-dark-theme-1"
      variants={variants}
      initial="offscreen"
      animate={isInView && "onscreen"}
      ref={ref}
    >
      <h3 className="col-start-2 col-end-10 row-start-9 self-center text-xl sm:col-start-2 sm:col-end-4 sm:row-start-4 md:col-start-2 md:col-end-8 md:row-start-3 lg:row-start-4 lg:text-3xl">
        {title}
      </h3>
      <div className="col-start-1 -col-end-1 row-start-10 -row-end-2 flex flex-col items-center justify-center text-lg sm:col-start-2 sm:col-end-10 sm:items-start md:col-start-2 md:col-end-9 md:row-start-6 md:row-end-9 md:items-center lg:col-start-1 lg:col-end-10 lg:text-xl xl:col-start-2 xl:col-end-8">
        <ul className="flex w-max max-w-full flex-col md:gap-4">
          {Object.entries(items).map(([itemKey, item]) => {
            return (
              <li key={itemKey} className="first-letter:uppercase">
                {putItemName && (
                  <span className="mr-2 after:content-[':']">{itemKey}</span>
                )}
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <motion.div
        className="col-start-1 col-end-11 row-start-1 row-end-8 sm:col-start-5 sm:col-end-10 sm:row-start-3 sm:row-end-10 md:col-start-9 md:col-end-16 md:row-start-3 md:row-end-11 md:grid md:place-items-center"
        variants={imgVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 1 }}
      >
        <img
          src={url}
          alt={desc}
          className="aspect-square h-full w-full object-cover sm:h-auto sm:rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default PersonalInfo;
