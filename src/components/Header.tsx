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
      className={"w-screen max-w-screen-lg h-96 "}
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
    </div>
  );
};

export default Header;
