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
          className="rounded-xl bg-trans-white px-6 py-2 text-2xl text-black outline-none "
          required={required}
        />
      ) : (
        <textarea
          id={id}
          {...other}
          className="rounded-xl bg-trans-white p-6 text-2xl text-black outline-none"
        />
      )}
    </div>
  );
};

export default FormInput;
