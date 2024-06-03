import React from "react";
import { useState } from "react";
import NavLink from "./NavLink";
import SocialMediaLinks from "./SocialMediaLinks";
import LogoComponent from "./LogoComponent";
import { links } from "../data";
import { CiMenuBurger } from "react-icons/ci";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-10 top-0 content-center text-amber-50 text-sm bg-gradient-to-r from-rose-500 to-rose-400 w-4/5 h-12 rounded-b-lg p-3 flex-row flex justify-between mr-auto ml-auto max-w-screen-md">
      <LogoComponent text={"ZenNailZoon"} />
      <nav className="flex flex-row gap-8 ">
        {links.map((link) => {
          const { id, url, text } = link;
          return <NavLink href={url} label={text} key={id} />;
        })}
      </nav>

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
