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
    placeholder: "Mike Shinoda",
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
                className="mt-4 bg-trans-white py-2 text-xl duration-100 hover:bg-light-theme-1 dark:bg-dark-theme-4 dark:hover:bg-dark-theme-1"
              >
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
