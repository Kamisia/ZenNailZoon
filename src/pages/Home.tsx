import React from "react";
import Header from "../components/Header";
const Home: React.FC = () => {
  return (
    <div id="home" className="w-screen max-w-screen-lg mb-5">
      <Header />
      <article className="pr-3 pl-3 mt-2 mb-2">
        Welcome to ZenNailZoon, my professional nail styling salon where we
        pride ourselves on exceptional services and a relaxing atmosphere. At
        our salon, we offer a wide range of nail treatments, including
        manicures, pedicures, and intricate nail art, all using high-quality
        products. My team of skilled technicians is dedicated to providing
        personalized care, ensuring each client's satisfaction. We prioritize
        hygiene and safety, maintaining the highest standards in cleanliness and
        sterilization. Committed to excellence, ZenNailZoon is your top choice
        for a premium nail care experience.{" "}
      </article>
    </div>
  );
};

export default Home;
