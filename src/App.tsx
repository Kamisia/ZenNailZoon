import React from "react";

import OurService from "./pages/ourService";
import Home from "./pages/Home";
import About from "./components/templates/About";
import Contact from "./components/templates/Contact";
import Navbar from "./components/organisms/Navbar";
const App: React.FC = () => {
  return (
    <div className="flex flex-col m-auto overflow-hidden   justify-center justify-items-center items-center ">
      <Navbar />
      <Home />

      <OurService />
      <About />

      <Contact />
    </div>
  );
};
export default App;
