import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Space from "./Components/Space/Space";
import Website from "./Components/Website/Website";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Space />

      <div className="container">
        <Title title="Website" subtitle="How it make" />
        <Website />
        <About />
      </div>
    </div>
  );
};

export default App;
