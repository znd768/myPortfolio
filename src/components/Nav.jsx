import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "./links";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  return (
    <motion.ul className="flex h-full flex-row items-center">
      {links.map((link) => {
        return (
          <li key={link.name} className="h-full">
            <NavLink
              to={link.path}
              className="grid h-[calc(100%-4px)] w-20 place-items-center"
            >
              {link.name}
            </NavLink>
            {link.path === location.pathname ? (
              <motion.div
                layoutId="underline"
                layout
                className="border-b-4 border-indigo-400 dark:border-sky-400"
                style={{ originY: "0px" }}
              />
            ) : null}
          </li>
        );
      })}
    </motion.ul>
  );
};

export default Nav;
