import React from "react";
import MenuItem from "./MenuItem";

const itemIds = [0, 1, 2, 3];

const Navigation = () => {
  return (
    <ul className=" pt-16 px-4 flex flex-col gap-4 text-black">
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </ul>
  );
};

export default Navigation;
