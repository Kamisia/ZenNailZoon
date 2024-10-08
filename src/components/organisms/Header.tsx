import React from "react";
import Img from "../../assets/header.jpg";
import BusinessCard from "../organisms/BusinessCard";
import ButtonComponent from "../atoms/ButtonComponent";

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      data-testid="header"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={"w-screen h-96 justify-center flex m-auto "}
    >
      <div className="m-auto hidden md:flex h-60 min-w-fit pr-5 rounded-lg bg-gray-950 bg-opacity-10 ">
        <BusinessCard
          number={"123456789"}
          mailAddress={"ZenNailZone@example.com"}
          text={"Booking Now!"}
        />
      </div>
      <div className="flex flex-col m-auto w-1/2 h-12 rounded-lg md:hidden justify-center text-center">
        <ButtonComponent
          text="Booking Now!"
          onClick={() => scrollToSection("contact")}
        />
      </div>
    </div>
  );
};

export default Header;
