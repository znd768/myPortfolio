import React from "react";

const FormInput = ({ tag, id, label, required, ...other }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xl">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {tag == "input" ? (
        <input
          id={id}
          {...other}
          className="border-b-2 border-light-theme-4 bg-transparent px-3 py-2 text-black outline-none md:px-6 md:text-2xl dark:border-dark-theme-3 dark:text-white"
          required={required}
        />
      ) : (
        <textarea
          id={id}
          {...other}
          className="border-b-2 border-light-theme-4 bg-transparent px-3 py-2 text-black outline-none md:p-6 md:text-2xl dark:border-dark-theme-3 dark:text-white"
        />
      )}
    </div>
  );
};

export default FormInput;
