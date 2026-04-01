import { ToastContainer } from "react-toastify";
import { Chef, Find, Content, Gallery, Menu } from "./container";
import { Navbar } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home">
          <Content />
        </section>

        <section id="menu">
          <Menu />
        </section>

        <section id="chef">
          <Chef />
        </section>
        <section id="gallery">
          <Gallery />
        </section>

        <section id="contact">
          <Find />
        </section>
      </main>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
