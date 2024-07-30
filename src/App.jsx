import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Home from "./components/pages/Pages/Home";
import About from "./components/pages/Pages/About";
import Projects from "./components/pages/Pages/Projects";
import Contact from "./components/pages/Pages/Contact";
import Footer from "./components/Footer";
import { useTheme, useThemeUpdate } from "./components/ThemeContext";

function Layout({ toggleDarkMode }) {
  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default function App() {
  const darkTheme = useTheme();
  const themeUpdate = useThemeUpdate();
  return (
    <main
      className={`${
        darkTheme ? "dark" : ""
      } scroll-smooth bg-light-theme-white text-light-theme-text dark:bg-dark-theme-black dark:text-white`}
    >
      <Routes>
        <Route path="/" element={<Layout toggleDarkMode={themeUpdate} />}>
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
