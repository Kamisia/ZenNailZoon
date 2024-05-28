import React from "react";
import Img from "../assets/header.jpg";

import BusinessCard from "./BusinessCard";
const Header: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={"w-screen max-w-screen-lg h-96  absolute top-0"}
    >
      <BusinessCard
        number={"123456789"}
        mailAddress={"ZenNailZoon@example.com"}
        text={"Booking Now!"}
      />
    </div>
  );
};

export default Header;
