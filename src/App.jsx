import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { useContext, useState } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import { useTheme, useThemeUpdate } from "./components/ThemeContext"

function Layout({toggleDarkMode}) {
  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default function App() {
  const darkTheme = useTheme()
  const themeUpdate = useThemeUpdate()
  return (
    <main className={`${darkTheme ? "dark" : ""} scroll-smooth dark:text-white text-light-theme-text dark:bg-dark-theme-black bg-light-theme-white`}>
      <Routes>
        <Route path="/" element={<Layout toggleDarkMode={themeUpdate}/>}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
