import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "./links";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  return (
    // <>
    //   {links.map((link, idx) => {
    //     return (
    //       <NavLink
    //         to={link.path}
    //         key={link.name}
    //         className={({ isActive }) =>
    //           ` w-20 grid place-items-center ${
    //             isActive ? "border-b-4 border-sky-400 bg-slate-700" : ""
    //           }`
    //         }
    //       >
    //         {link.name}
    //       </NavLink>
    //     );
    //   })}
    // </>
    <ul className=" flex flex-row items-center h-full">
      {links.map(link => {
        return (
          <li key={link.name} className=" h-full">
            <NavLink
              to={link.path}
              className=" w-20 grid place-items-center h-[calc(100%-4px)] "
            >
              {link.name}
            </NavLink>
            {link.path === location.pathname ? (
              <motion.div layoutId="underline" className=" border-b-4 border-sky-400"/>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
