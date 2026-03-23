import React from "react";
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
  </div>
);

export default App;
