import React from "react";
import Header from "../components/organisms/Header";
const Home: React.FC = () => {
  return (
    <div id="home" className="w-screen mb-5 justify-center  ">
      <Header />
      <div className="w-screen max-w-screen-lg mb-5 mt-5  ml-auto mr-auto pr-3 pl-3">
        <article className="max-w-screen-lg mb-5 ">
          Welcome to ZenNailZoon, my professional nail styling salon where we
          pride ourselves on exceptional services and a relaxing atmosphere. At
          our salon, we offer a wide range of nail treatments, including
          manicures, pedicures, and intricate nail art, all using high-quality
          products. My team of skilled technicians is dedicated to providing
          personalized care, ensuring each client's satisfaction. We prioritize
          hygiene and safety, maintaining the highest standards in cleanliness
          and sterilization. Committed to excellence, ZenNailZoon is your top
          choice for a premium nail care experience.
        </article>
      </div>
    </div>
  );
};

export default Home;
