import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "./links";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  return (
    <motion.ul className=" flex flex-row items-center h-full">
      {links.map((link) => {
        return (
          <li key={link.name} className=" h-full">
            <NavLink
              to={link.path}
              className=" w-20 grid place-items-center h-[calc(100%-4px)] "
            >
              {link.name}
            </NavLink>
            {link.path === location.pathname ? (
              <motion.div
                layoutId="underline"
                layout
                className=" border-b-4 border-indigo-400 dark:border-sky-400"
                style={{originY: "0px"}}
              />
            ) : null}
          </li>
        );
      })}
    </motion.ul>
  );
};

export default Nav;
