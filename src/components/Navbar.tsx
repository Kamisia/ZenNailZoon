import React from "react";
import NavLink from "./NavLink";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";

const Navbar: React.FC = () => {
  const handleClick = () => {
    console.log("button clicked!");
  };
  return (
    <div className=" z-10 top-0 content-center text-amber-50 text-sm bg-gradient-to-r from-red-500 to-red-400 w-4/5 h-12 rounded-b-lg p-3 flex-row flex justify-between mr-auto ml-auto max-w-screen-md">
      <TextComponent text={"ZenNailZoon"} />
      <nav className="flex flex-row gap-8  ">
        <NavLink to="/" label="Home" />
        <NavLink to="/about" label="About" />
        <NavLink to="/contact" label="Contact" />
      </nav>
      <div className="gap-4 flex flex-row ">
        <ButtonComponent text={"Sing In"} onClick={handleClick} />
        <ButtonComponent text={"Register"} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Navbar;
