import React from "react";
import { ToastContainer } from "react-toastify";
import {
  Chef,
  Find,
  Footer,
  Content,
  Gallery,
  SpecialMenu,
  Intro,
} from "./container";

import "./App.css";
import { Navbar } from "./components";

const App = () => (
  <div>
    <Navbar />
    <Content/>
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    <Find />
    <Footer />
    <ToastContainer/>
  </div>
);

export default App;
