import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquarePinterest,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

interface SocialMediaLinksProps {
  fbmedia: boolean;
  fbhref?: string;
  igmedia: boolean;
  ighref?: string;
  lnmedia: boolean;
  lnhref?: string;
  pmedia: boolean;
  phref?: string;
  xmedia: boolean;
  xhref?: string;
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  fbhref,
  fbmedia,
  lnmedia,
  igmedia,
  ighref,
  lnhref,
  pmedia,
  phref,
  xmedia,
  xhref,
}) => {
  return (
    <div className="flex flex-row gap-4 justify-end mr-4 text-2xl">
      {fbmedia && (
        <a
          aria-label="Facebook"
          className="transition duration-200 flex ease-in-out mr-1 ml-2 text-amber-50 hover:text-rose-100 focus:outline-none"
          href={fbhref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook />
        </a>
      )}
      {igmedia && (
        <a
          aria-label="Instagram"
          className="transition duration-200 flex ease-in-out mr-1 ml-2 text-amber-50 hover:text-rose-100 focus:outline-none"
          href={ighref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareInstagram />
        </a>
      )}
      {lnmedia && (
        <a
          aria-label="LinkedIn"
          className="transition duration-200 flex ease-in-out mr-1 ml-2 text-amber-50 hover:text-rose-100 focus:outline-none"
          href={lnhref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      )}
      {pmedia && (
        <a
          aria-label="Pinterest"
          className="transition duration-200 flex ease-in-out mr-1 ml-2 text-amber-50 hover:text-rose-100 focus:outline-none"
          href={phref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquarePinterest />
        </a>
      )}
      {xmedia && (
        <a
          aria-label="Twitter"
          className="transition duration-200 flex ease-in-out mr-1 ml-2 text-amber-50 hover:text-rose-100 focus:outline-none"
          href={xhref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
      )}
    </div>
  );
};

export default SocialMediaLinks;
