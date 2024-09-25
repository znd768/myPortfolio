import React from "react";

const NotFound = () => {
  return (
    <div className="grid min-h-screen place-items-center p-4 lg:p-12">
      <div className="flex w-full flex-col items-center">
        <h1 className="text-4xl lg:text-6xl lg:leading-snug">
          Oops, NotFound!
        </h1>
        <div className="size-48 lg:size-96">
          <img src="./img3.png" alt="lying_cat" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
