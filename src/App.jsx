import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/pageParts/navbar/Navbar";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import About from "./components/pages/about/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/pageParts/Footer";
import { useTheme } from "./components/pageFunctions/ThemeContext";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default function App() {
  const darkTheme = useTheme();
  return (
    <main
      className={`${
        darkTheme ? "dark" : ""
      } scroll-smooth bg-light-theme-white text-light-theme-text dark:bg-dark-theme-black dark:text-white`}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
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
