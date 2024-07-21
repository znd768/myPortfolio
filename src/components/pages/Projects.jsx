import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="h-64 w-full grid place-items-center">
      <motion.button
        className=" h-32 w-32 bg-slate-400"
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      />
    </div>
  );
};

export default Projects;
