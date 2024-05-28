import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      className={"hover:text-rose-200 ease-in-out duration-300 uppercase"}
      href={href}
    >
      {label}
    </a>
  );
};

export default NavLink;
