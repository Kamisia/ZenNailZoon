import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../organisms/Navbar";
import { links } from "../../data";

describe("Navbar component", () => {
  test("renders LogoComponent with correct text", () => {
    render(<Navbar />);
    const logoElement = screen.getByText("ZenNailZoon");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders all navigation links in desktop view", () => {
    render(<Navbar />);
    links.forEach((link) => {
      const navLinks = screen.getAllByText(link.text);
      const navLink = navLinks.find(
        (nav) => nav.closest("a")?.getAttribute("href") === link.url
      );
      expect(navLink).toBeInTheDocument();
      expect(navLink?.closest("a")).toHaveAttribute("href", link.url);
    });
  });

  test("renders SocialMediaLinks with correct hrefs", () => {
    render(<Navbar />);
    const fbLink = screen.getByLabelText("Facebook");
    const igLink = screen.getByLabelText("Instagram");
    const pLink = screen.getByLabelText("Pinterest");

    expect(fbLink).toBeInTheDocument();
    expect(fbLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/hashtag/nail/"
    );

    expect(igLink).toBeInTheDocument();
    expect(igLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/explore/tags/nails/"
    );

    expect(pLink).toBeInTheDocument();
    expect(pLink).toHaveAttribute(
      "href",
      "https://pl.pinterest.com/search/pins/?q=nail&rs=typed"
    );
  });

  test("toggles mobile menu visibility on button click", () => {
    render(<Navbar />);

    const menuButton = screen.getByRole("button");

    let mobileNavs = screen
      .getAllByText("Home")
      .map((link) => link.closest("nav"));
    mobileNavs.forEach((nav) => {
      if (nav) {
        expect(nav).not.toHaveClass("opacity-100 translate-y-0");
      }
    });

    fireEvent.click(menuButton);

    mobileNavs = screen.getAllByText("Home").map((link) => link.closest("nav"));
    mobileNavs.forEach((nav) => {
      if (nav && nav.classList.contains("md:hidden")) {
        expect(nav).toHaveClass("opacity-100 translate-y-0");
      }
    });

    fireEvent.click(menuButton);

    mobileNavs = screen.getAllByText("Home").map((link) => link.closest("nav"));
    mobileNavs.forEach((nav) => {
      if (nav) {
        expect(nav).not.toHaveClass("opacity-100 translate-y-0");
      }
    });
  });

  test("mobile menu links are rendered correctly when menu is open", () => {
    render(<Navbar />);

    const menuButton = screen.getByRole("button");
    menuButton.click();

    links.forEach((link) => {
      const navLinks = screen.getAllByText(link.text);
      const navLink = navLinks.find(
        (nav) => nav.closest("a")?.getAttribute("href") === link.url
      );
      expect(navLink).toBeInTheDocument();
      expect(navLink?.closest("a")).toHaveAttribute("href", link.url);
    });
  });
});
