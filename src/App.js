import React from "react";
import { MyNavbar } from "./components/Navbar";
import { About } from "./components/About";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import "./App.scss";

export const App = () => {
  return (
    <>
      <div className="App">
        <MyNavbar />
        <About />
        <Projects />
        <Tech />
        <Footer />
      </div>
    </>
  );
};

export default App;
