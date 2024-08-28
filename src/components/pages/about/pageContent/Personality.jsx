import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import React, { useRef } from "react";
import { useDimensions } from "../../../pageFunctions/useDimensions";

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
  const containerRef = useRef(null);
  const autoScrollRef = useRef(null);
  const dimensionRef = useRef(null);

  const dimensions = useDimensions(dimensionRef);
  const contentHeight = (dimensions.width * personalInfo.length) / 2;

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollElem = autoScrollRef.current;

    scrollElem.scrollTo({
      top: 0,
      left: latest * dimensions.width * personalInfo.length,
      behavior: "smooth",
    });
  });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
    }
  };

  return (
    <motion.section
      className="relative"
      ref={containerRef}
      style={{ height: `${contentHeight}px` }}
    >
      <div className="sticky top-0 h-screen px-6 py-4 lg:p-8 xl:p-10">
        <div>
          <h1 className="text-4xl">About Me</h1>
          <h2 className="text-xl lg:text-2xl">My Personality</h2>
        </div>
        <motion.article
          className="flex w-[100vw] max-w-[100%] snap-x snap-proximity flex-row flex-nowrap overflow-x-scroll no-scrollbar"
          ref={autoScrollRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {personalInfo.map((info) => {
            return (
              <div
                className="flex h-[600px] w-full shrink-0 snap-end flex-row"
                key={info.title}
                ref={dimensionRef}
              >
                <div className="flex w-[40%] flex-col justify-center gap-4 p-12">
                  <h3 className="text-lg lg:text-2xl">{info.title}</h3>
                  <ul className="ml-8">
                    {Object.entries(info.items).map(([itemKey, item]) => {
                      return (
                        <li key={itemKey} className="first-letter:uppercase">
                          {info.putItemName && (
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
                <div className="w-[60%]"></div>
              </div>
            );
          })}
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
    </motion.section>
  );
};

export default Personality;
