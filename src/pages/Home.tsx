import React from "react";
import Header from "../components/Header";
const Home: React.FC = () => {
  return (
    <div id="home" className="w-screen max-w-screen-lg mb-5">
      <Header />
      <article className="p-10"> Jakiś opis salonu </article>
    </div>
  );
};

export default Home;
