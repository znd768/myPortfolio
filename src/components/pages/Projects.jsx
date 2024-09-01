import React from "react";

const Projects = () => {
  return (
    <section className="grid-cols-20 mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1344px] auto-rows-min gap-2 md:gap-4 lg:gap-y-0">
      <h1 className="md:col-end-18 col-start-1 col-end-8 flex h-12 items-center text-2xl md:col-start-2 lg:h-24 lg:text-3xl xl:text-4xl">
        Projects
      </h1>
      <div className="col-end-20 md:col-end-18 lg:col-end-20 col-start-2 grid h-[720px] grid-cols-subgrid items-center py-4 md:col-start-4 md:py-8 lg:col-start-2">
        <div className="col-start-1 col-end-18 grid place-items-center">
          <h2 className="text-4xl">Nothing yet...</h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
