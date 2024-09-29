import React, { useState, useRef } from "react";
import FormInput from "./FormInput";
import { inputList } from "./inputList";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_KEY = import.meta.env.VITE_SITE_RECAPTCHA_KEY;

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

const ContactForm = () => {
  const [formInputs, setFormInputs] = useState(initialInputs);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const recapthcaRef = useRef();

  const handleChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaValue = recapthcaRef.current.getValue();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contactForm",
        "g-recaptcha-response": recaptchaValue,
        ...formInputs,
      }),
    })
      .then(() => {
        setFormInputs(initialInputs);
        alert("Success!");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="col-start-2 col-end-18 md:col-end-14 lg:col-start-10 lg:col-end-18">
      <form
        className="flex h-full flex-col justify-center gap-4"
        data-netlify="true"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        {inputList.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={formInputs[input.name]}
              onChange={handleChange}
            />
          );
        })}
        <ReCAPTCHA
          ref={recapthcaRef}
          sitekey={RECAPTCHA_KEY}
          size="normal"
          id="recaptcha-google"
          onChange={() => {
            setBtnDisabled(false);
          }}
        />
        <button
          type="submit"
          className="mt-4 bg-light-theme-3 py-2 text-xl duration-200 ease-in hover:bg-[#6e95f1] disabled:bg-light-theme-2 disabled:hover:bg-light-theme-2 dark:bg-[#1b356a] dark:hover:bg-dark-theme-4 dark:disabled:bg-slate-600 dark:disabled:hover:bg-slate-600"
          disabled={btnDisabled}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
