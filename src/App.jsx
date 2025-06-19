import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Space from "./Components/Space/Space.jsx";
import Education from "./Components/Education/Education.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills.jsx";
import Project from "./Components/Project/Project.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Space />
      <div className="container">
        <About />

        <Title title="Skills" subtitle="My current skills, most use" />
        <Skills />

        <Title
          title="My Project"
          subtitle="I have fun with it, but it no value"
        />
        <Project />

        <Title title="Education" subtitle="My certificate and education" />
        <Education />

        <Title title="Contact Me" subtitle="Get in touch with me" />
        <Contact />

        <Footer />
      </div>
    </div>
  );
};

export default App;
