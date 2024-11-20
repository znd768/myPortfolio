import React from 'react'
import { motion } from 'framer-motion'

const ProfImage = ({onImgLoad}) => {
  return (
    <motion.div
      className="size-[56%] self-center overflow-hidden sm:size-[48%] lg:size-[32%] dark:bg-dark-theme-2 bg-light-theme-2"
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
      <img onLoad={onImgLoad} src="/myProfImage.png" alt="myProfImage" className="" />
    </motion.div>
  )
}

export default ProfImage