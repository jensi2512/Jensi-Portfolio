import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationInterests from "./components/EducationInterests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <EducationInterests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
