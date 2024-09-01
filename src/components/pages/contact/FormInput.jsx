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
          className="rounded-xl bg-trans-white px-3 md:px-6 py-2 md:text-2xl text-black outline-none "
          required={required}
        />
      ) : (
        <textarea
          id={id}
          {...other}
          className="rounded-xl bg-trans-white px-3 py-2 md:p-6 md:text-2xl text-black outline-none"
        />
      )}
    </div>
  );
};

export default FormInput;
