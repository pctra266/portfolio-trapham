import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Space from "./Components/Space/Space.jsx";
import About from "./Components/About/About";
import Project from "./Components/Project/Project.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import TechStack from "./Components/TechStack/TechStack.jsx";
import Experience from "./Components/Experience/Experience.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Space />
      <div className="container">
        <About />
        <Experience></Experience>
        <TechStack></TechStack>
        <Project></Project>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
