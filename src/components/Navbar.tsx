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
    <div className="fixed z-10 top-0 content-center  w-4/5 h-12 rounded-b-lg  flex-row flex justify-between mr-auto ml-auto max-w-screen-md">
      <div className="fixed z-10 top-0 content-center text-amber-50 text-sm bg-gradient-to-r from-rose-500 to-rose-400 w-4/5 h-12 rounded-b-lg p-3 flex-row flex justify-between mr-auto ml-auto max-w-screen-md">
        <LogoComponent text={"ZenNailZoon"} />

        <nav className=" hidden flex-row gap-4 md:flex ml-2">
          {links.map((link) => {
            const { id, url, text } = link;
            return <NavLink href={url} label={text} key={id} />;
          })}
        </nav>
        <button
          onClick={toggleNavbar}
          className={` md:hidden flex transform transition-transform duration-200 active:rotate-90   ${
            isOpen ? "rotate-90" : "rotate-0"
          }  ease-in-out mr-1 ml-2  hover:text-main focus:outline-none`}
        >
          <CiMenuBurger />
        </button>
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
      <div className="fixed flex flex-row  text-amber-50 md:hidden   m-auto justify-start bg-gradient-to-t from-rose-500 to-rose-400  w-2/5">
        <nav
          className={`flex flex-column transition duration-300 gap-4 linear ${
            isOpen
              ? "opacity-100 translate-y-0 md:hidden"
              : "opacity-0 hidden translate-y-1"
          }`}
        >
          <div
            className=" justify-start text-start px-2 pt-2 pb-3 space-y-1 sm:px-3 m-auto mt-12"
            onClick={toggleNavbar}
          >
            {links.map((link) => {
              const { id, url, text } = link;
              return <NavLink href={url} label={text} key={id} />;
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
