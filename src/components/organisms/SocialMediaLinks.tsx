import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquarePinterest,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

interface SocialMediaLinksProps {
  fbhref?: string;
  ighref?: string;
  lnhref?: string;
  phref?: string;
  xhref?: string;
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  fbhref,
  ighref,
  lnhref,
  phref,
  xhref,
}) => {
  return (
    <div className="flex flex-row text-2xl gap-4 mr-4">
      {fbhref && (
        <a
          aria-label="Facebook"
          className="transition duration-200 flex ease-in-out text-amber-50 hover:text-rose-100 focus:outline-none"
          href={fbhref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook />
        </a>
      )}
      {ighref && (
        <a
          aria-label="Instagram"
          className="transition duration-200 flex ease-in-out text-amber-50 hover:text-rose-100 focus:outline-none"
          href={ighref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareInstagram />
        </a>
      )}
      {lnhref && (
        <a
          aria-label="LinkedIn"
          className="transition duration-200 flex ease-in-out text-amber-50 hover:text-rose-100 focus:outline-none"
          href={lnhref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      )}
      {phref && (
        <a
          aria-label="Pinterest"
          className="transition duration-200 flex ease-in-out text-amber-50 hover:text-rose-100 focus:outline-none"
          href={phref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquarePinterest />
        </a>
      )}
      {xhref && (
        <a
          aria-label="Twitter"
          className="transition duration-200 flex ease-in-out text-amber-50 hover:text-rose-100 focus:outline-none"
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
