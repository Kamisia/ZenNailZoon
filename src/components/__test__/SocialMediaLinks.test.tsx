import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SocialMediaLinks from "../organisms/SocialMediaLinks";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquarePinterest,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

describe("SocialMediaLinks component", () => {
  test("renders Facebook link when fbhref is provided", () => {
    render(<SocialMediaLinks fbhref="https://www.facebook.com" />);
    const fbLink = screen.getByLabelText("Facebook");
    expect(fbLink).toBeInTheDocument();
    expect(fbLink).toHaveAttribute("href", "https://www.facebook.com");
  });

  test("renders Instagram link when ighref is provided", () => {
    render(<SocialMediaLinks ighref="https://www.instagram.com" />);
    const igLink = screen.getByLabelText("Instagram");
    expect(igLink).toBeInTheDocument();
    expect(igLink).toHaveAttribute("href", "https://www.instagram.com");
  });

  test("renders LinkedIn link when lnhref is provided", () => {
    render(<SocialMediaLinks lnhref="https://www.linkedin.com" />);
    const lnLink = screen.getByLabelText("LinkedIn");
    expect(lnLink).toBeInTheDocument();
    expect(lnLink).toHaveAttribute("href", "https://www.linkedin.com");
  });

  test("renders Pinterest link when phref is provided", () => {
    render(<SocialMediaLinks phref="https://www.pinterest.com" />);
    const pLink = screen.getByLabelText("Pinterest");
    expect(pLink).toBeInTheDocument();
    expect(pLink).toHaveAttribute("href", "https://www.pinterest.com");
  });

  test("renders Twitter link when xhref is provided", () => {
    render(<SocialMediaLinks xhref="https://www.twitter.com" />);
    const xLink = screen.getByLabelText("Twitter");
    expect(xLink).toBeInTheDocument();
    expect(xLink).toHaveAttribute("href", "https://www.twitter.com");
  });

  test("does not render any links when no hrefs are provided", () => {
    render(<SocialMediaLinks />);
    const links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);
  });

  test("renders multiple links when multiple hrefs are provided", () => {
    render(
      <SocialMediaLinks
        fbhref="https://www.facebook.com"
        ighref="https://www.instagram.com"
        lnhref="https://www.linkedin.com"
        phref="https://www.pinterest.com"
        xhref="https://www.twitter.com"
      />
    );
    const fbLink = screen.getByLabelText("Facebook");
    const igLink = screen.getByLabelText("Instagram");
    const lnLink = screen.getByLabelText("LinkedIn");
    const pLink = screen.getByLabelText("Pinterest");
    const xLink = screen.getByLabelText("Twitter");

    expect(fbLink).toBeInTheDocument();
    expect(igLink).toBeInTheDocument();
    expect(lnLink).toBeInTheDocument();
    expect(pLink).toBeInTheDocument();
    expect(xLink).toBeInTheDocument();
  });
});
