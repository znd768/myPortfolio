import React from "react";

const MyCarrer = () => {
  return (
    <section className=" h-screen p-12 snap-start flex flex-col">
      <h1>My Carrer</h1>
      <svg width="200" height="100">
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="yellow" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="url(#gradient)" />
</svg>
    </section>
  );
};

export default MyCarrer;
