import React from "react";
import NavLink from "./NavLink";

//import ButtonComponent from "./ButtonComponent";
import SocialMediaLinks from "./SocialMediaLinks";
import LogoComponent from "./LogoComponent";

const Navbar: React.FC = () => {
  /*const handleClick = () => {
    console.log("button clicked!");
  };*/
  return (
    <div className="fixed z-10 top-0 content-center text-amber-50 text-sm bg-gradient-to-r from-rose-500 to-rose-400 w-4/5 h-12 rounded-b-lg p-3 flex-row flex justify-between mr-auto ml-auto max-w-screen-md">
      <LogoComponent text={"ZenNailZoon"} />
      <nav className="flex flex-row gap-8  ">
        <NavLink href="#home" label="Home" />
        <NavLink href="#ourservice" label="Our Service" />
        <NavLink href="#about" label="About" />
        <NavLink href="#contact" label="Contact" />
      </nav>
      {/*

      <div className="gap-4 flex flex-row ">
        <ButtonComponent text={"Sing In"} onClick={handleClick} />
        <ButtonComponent text={"Register"} onClick={handleClick} />
      </div>
      */}
      <SocialMediaLinks
        fbmedia={true}
        fbhref="https://www.facebook.com/hashtag/nail/"
        igmedia={true}
        ighref="https://www.instagram.com/explore/tags/nails/"
        lnmedia={false}
        pmedia={true}
        phref="https://pl.pinterest.com/search/pins/?q=nail&rs=typed"
        xmedia={false}
      />
    </div>
  );
};

export default Navbar;
