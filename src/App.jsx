import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { useState } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };
  return (
    <main className={`${isDarkMode && "dark"} scroll-smooth`}>
      {/* <button onClick={toggleDarkMode}>toggledarkmode</button> */}
      <Routes>
        <Route path="/" element={<Navbar />}>
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
