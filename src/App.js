import React from "react";
import { ToastContainer } from "react-toastify";
import { Chef, Find, Footer, Content, Gallery, Menu, Intro } from "./container";
import { Navbar } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* Sections with IDs for navigation */}
        <section id="home">
          <Content />
        </section>

        <section id="menu">
          <Menu />
        </section>

        <section id="chef">
          <Chef />
        </section>

        <section id="intro">
          <Intro />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="contact">
          <Find />
        </section>
      </main>
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
