import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Space from "./Components/Space/Space";
import Website from "./Components/Website/Website";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import SeriousProject from "./Components/SeriousProject/SeriousProject";
import BrainrotProject from "./Components/BrainrotProject/BrainrotProject";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Space />

      <div className="container">
        <Title title="Website" subtitle="How it make" />
        <Website />
        <About />
        <Title
          title="Serious Project"
          subtitle="I force to do it, otherwise I have to relearn "
        />
        <SeriousProject />
        <Title
          title="Brainrot Project"
          subtitle="I have fun with it, but it no value"
        />
        <BrainrotProject />
        <Title title="Contact Me" subtitle="Get in touch with me" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
