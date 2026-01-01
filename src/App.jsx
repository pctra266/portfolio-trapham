import React, { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Space from "./Components/Space/Space.jsx";
import About from "./Components/About/About";
import Project from "./Components/Project/Project.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import TechStack from "./Components/TechStack/TechStack.jsx";
import Experience from "./Components/Experience/Experience.jsx";

const App = () => {
  const [currentSection, setCurrentSection] = useState("space");
  const [scrollInstance, setScrollInstance] = useState(null); 

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    setScrollInstance(scroll);

    return () => scroll.destroy();
  }, []);

  useEffect(() => {
    if (scrollInstance) {
      scrollInstance.update(); 
    }
  }, [currentSection, scrollInstance]);

  return (
    <div id="main" data-scroll-container>
      <Navbar onNavClick={setCurrentSection} scroll={scrollInstance} />

      <section data-scroll-section>
        {currentSection === "space" && <Space />}
      </section>

      <section data-scroll-section>
        {currentSection === "about" && <About />}
      </section>

      <div className="container">
        <section data-scroll-section>
          <Experience />
        </section>
        <section data-scroll-section>
          <TechStack />
        </section>
        <section data-scroll-section id="project">
          <Project />
        </section>
        <section data-scroll-section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default App;
