import React from "react";
import { motion } from "framer-motion";
import PageContent from "../PageContent";

const Projects = () => {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col gap-8 px-6 py-4 lg:p-8 xl:p-10">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl">Projects</h1>
      <div className="w-full h-96 grid place-items-center">
        <h2 className=" text-4xl">There are nothing!</h2>
      </div>
    </section>
  );
};

export default Projects;
