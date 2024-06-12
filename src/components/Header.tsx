import React from "react";
import Img from "../assets/header.jpg";

import BusinessCard from "./BusinessCard";
import ButtonComponent from "./ButtonComponent";
const Header: React.FC = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={"w-screen max-w-screen-lg h-96 justify-center flex m-auto "}
    >
      <BusinessCard
        number={"123456789"}
        mailAddress={"ZenNailZoon@example.com"}
        text={"Booking Now!"}
        fbmedia={true}
        fbhref="facebook.com"
        igmedia={true}
        ighref="instagram.com"
        lnmedia={false}
        xmedia={false}
        pmedia={false}
      />
      <div className="flex flex-col m-auto w-1/2 h-12  rounded-lg md:hidden justify-center text-center">
        <ButtonComponent
          text="Booking Now!"
          onClick={() => scrollToSection("contact")}
        />
      </div>
    </div>
  );
};

export default Header;
