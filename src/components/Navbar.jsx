import React from "react";
import { NavLink, Outlet, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <header className=" h-20 bg-cyan-300 dark:bg-slate-800 dark:text-white flex justify-between items-center px-8">
        <Link to="/" className=" flex gap-6 h-full items-center">
          <img src="/top_icon.png" alt="" className=" h-4/5 aspect-auto"/>
          <div className=" text-3xl font-bold">タイトル</div>
        </Link>
        <div className=" flex h-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` w-20 grid place-items-center ${
                isActive ? "border-b-4 border-sky-400" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` w-20 grid place-items-center ${
                isActive ? "border-b-4 border-sky-400" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              ` w-20 grid place-items-center ${
                isActive ? "border-b-4 border-sky-400" : ""
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` w-20 grid place-items-center ${
                isActive ? "border-b-4 border-sky-400" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
