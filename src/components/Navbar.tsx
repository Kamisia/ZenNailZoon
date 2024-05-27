import React from "react";
import NavLink from "./NavLink";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";

const Navbar: React.FC = () => {
  const handleClick = () => {
    console.log("button clicked!");
  };
  return (
    <div>
      <TextComponent text={"ZenNailZoon"} />
      <nav>
        <NavLink to="/" label="Home" />
        <NavLink to="/about" label="About" />
        <NavLink to="/contact" label="Contact" />
      </nav>
      <div>
        <ButtonComponent text={"Sing In"} onClick={handleClick} />
        <ButtonComponent text={"Register"} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Navbar;
