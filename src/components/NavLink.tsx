import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a className={"hover:text-red-950 ease-in-out duration-300"} href={href}>
      {label}
    </a>
  );
};

export default NavLink;
