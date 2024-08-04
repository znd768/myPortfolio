import React from "react";

const Contact = () => {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col gap-4 px-4 py-4 sm:gap-8 sm:px-6 lg:p-8 xl:p-10">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl">Contact</h1>
      <div className="w-full max-w-[1344px] self-center sm:w-[90%] lg:w-[800px] xl:w-full xl:px-12">
        <div className="flex overflow-hidden rounded-3xl bg-trans-black shadow-2xl backdrop-blur-2xl xl:flex-row">
          <div className="hidden flex-col items-center justify-center xl:flex xl:w-1/2">
            <div className="flex w-full flex-col items-center">
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
          <div className="flex h-full w-full flex-col p-6 sm:p-12 xl:w-1/2">
            <form className="flex h-full flex-col justify-center gap-4">
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xl">
                  Main Message
                  <span className="text-red-500"> *</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={8}
                  className="rounded-xl bg-trans-white p-6 text-2xl text-black outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xl">
                  Your Name
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="rounded-xl bg-trans-white px-6 py-2 text-2xl text-black outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="company-name" className="text-xl">
                  Company Name
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="rounded-xl bg-trans-white px-6 py-2 text-2xl text-black outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xl">
                  Email
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  id="email"
                  className="rounded-xl bg-trans-white px-6 py-2 text-2xl text-black outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone-number" className="text-xl">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone-number"
                  className="rounded-xl bg-trans-white px-6 py-2 text-2xl text-black outline-none"
                />
              </div>
              <button className="mt-4 bg-trans-white py-2 text-xl duration-100 hover:bg-light-theme-1 dark:bg-dark-theme-4 dark:hover:bg-dark-theme-1">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
