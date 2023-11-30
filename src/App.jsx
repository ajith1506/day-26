import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import DataScience from "./DataScience";


function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <DataScience/>
      <Contact />
    </div>
  );
}
export default App;