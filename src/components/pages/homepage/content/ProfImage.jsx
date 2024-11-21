import React from "react";
import { motion } from "framer-motion";

const ProfImage = ({ onImgLoad }) => {
  return (
    <motion.div
      className="size-[15.75rem] self-center overflow-hidden bg-light-theme-2 sm:size-[18.75rem] lg:size-[22.75rem] dark:bg-dark-theme-2"
      initial={{ borderRadius: "38% 62% 37% / 41% 44% 56% 59%" }}
      animate={{
        borderRadius: [
          "38% 62% 37% / 41% 44% 56% 59%",
          "66% 32% 71% / 41% 44% 56% 59%",
          "38% 62% 37% / 41% 44% 56% 59%",
        ],
      }}
      transition={{
        duration: 20,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <motion.img
        onLoad={onImgLoad}
        src="/myProfImage.png"
        alt="myProfImage"
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </motion.div>
  );
};

export default ProfImage;
