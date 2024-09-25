import React, { useState } from "react";
import FormInput from "./FormInput";

const inputList = [
  {
    tag: "textarea",
    id: "message",
    name: "message",
    type: "text",
    label: "Message",
    required: true,
    rows: 8,
  },
  {
    tag: "input",
    id: "name",
    name: "name",
    type: "text",
    label: "Your Name",
    placeholder: "",
    required: true,
  },
  {
    tag: "input",
    id: "company-name",
    name: "companyName",
    type: "text",
    label: "Company Name",
    placeholder: "Example Company",
    required: false,
  },
  {
    tag: "input",
    id: "email",
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    placeholder: "example@gmail.com",
  },
  {
    tag: "input",
    id: "phone-number",
    name: "phoneNumber",
    type: "text",
    label: "Phone Number",
    required: true,
    placeholder: "000-0000-0000",
    pattern: "^[0-9]{2,3}(-|\\s)*[0-9]{4}(-|\\s)*[0-9]{4}$",
  },
];

const initialInputs = {
  name: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  const [formInputs, setFormInputs] = useState(initialInputs);

  const onChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...formInputs }),
    })
      .then(() => {
        setFormInputs(initialInputs);
        alert("Success!");
      })
      .catch((error) => alert(error));
    e.preventDefault();
  };

  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1344px] auto-rows-min grid-cols-20 gap-2 md:gap-4 lg:gap-y-0 z-0">
      <h1 className="col-start-1 col-end-8 flex h-12 items-center text-2xl md:col-start-2 md:col-end-18 lg:h-24 lg:text-3xl xl:text-4xl">
        Contact
      </h1>
      <div className="z-10 col-start-2 col-end-20 grid grid-cols-subgrid items-center rounded-3xl bg-light-theme-1 py-4 shadow-xl md:col-start-4 md:col-end-18 md:py-8 lg:col-start-2 lg:col-end-20 dark:bg-dark-theme-1">
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
        <div className="col-start-2 col-end-18 md:col-end-14 lg:col-start-10 lg:col-end-18">
          <form
            className="flex h-full flex-col justify-center gap-4"
            onSubmit={handleSubmit}
          >
            {inputList.map((input) => {
              return (
                <FormInput
                  key={input.id}
                  {...input}
                  value={formInputs[input.name]}
                  onChange={onChange}
                />
              );
            })}
            <button
              type="submit"
              className="mt-4 bg-light-theme-2 py-2 text-xl duration-200 ease-in hover:bg-light-theme-3 dark:bg-[#1b356a] dark:hover:bg-dark-theme-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
