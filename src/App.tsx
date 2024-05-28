import React from "react";

import OurService from "./pages/ourService";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
const App: React.FC = () => {
  return (
    <div className="flex flex-col m-auto justify-center justify-items-center items-center ">
      <Navbar />
      <Home />

      <OurService />
      <About />
      <Contact />
    </div>
  );
};
export default App;
