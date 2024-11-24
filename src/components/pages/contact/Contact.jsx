import React from "react";
import ContactForm from "./form/ContactForm";

const Contact = () => {
  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1344px] auto-rows-min grid-cols-20 gap-2 md:gap-4 lg:gap-y-0 z-0">
      <h1 className="col-start-1 col-end-8 flex h-12 items-center text-2xl md:col-start-2 md:col-end-18 lg:h-24 lg:text-3xl xl:text-4xl">
        Contact
      </h1>
      <div className="z-10 col-start-2 col-end-20 grid grid-cols-subgrid items-center rounded-3xl bg-light-theme-1 py-4 shadow-xl md:col-start-4 md:col-end-18 md:py-8 lg:col-start-2 lg:col-end-20 dark:bg-dark-theme-1 mb-8">
        {/* left Side (illust) */}
        <div className="col-start-2 col-end-9 hidden lg:block">
          <div className="flex flex-col items-center">
            <img
              src="/Cat astronaut-rafiki.png"
              alt="cat in galaxy"
              className="w-3/4 object-contain"
            />
            <a
              href="https://storyset.com/cute"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Cute illustrations by Storyset
            </a>
          </div>
        </div>
        {/* Right Side (form) */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
