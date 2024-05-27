import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  return <RouterNavLink to={to}>{label}</RouterNavLink>;
};

export default NavLink;
