import React from "react";
import { render, screen } from "@testing-library/react";
import SocialMediaLinks from "../SocialMediaLinks";
import "@testing-library/jest-dom";
describe("SocialMediaLinks component", () => {
  test("renders Facebook link when fbmedia is true", () => {
    render(
      <SocialMediaLinks
        fbmedia={true}
        fbhref="https://www.facebook.com"
        igmedia={false}
        lnmedia={false}
        pmedia={false}
        xmedia={false}
      />
    );

    const fbLink = screen.getByRole("link", { name: /facebook/i });
    expect(fbLink).toBeInTheDocument();
    expect(fbLink).toHaveAttribute("href", "https://www.facebook.com");
  });

  test("does not render Facebook link when fbmedia is false", () => {
    render(
      <SocialMediaLinks
        fbmedia={false}
        igmedia={false}
        lnmedia={false}
        pmedia={false}
        xmedia={false}
      />
    );

    const fbLink = screen.queryByRole("link", { name: /facebook/i });
    expect(fbLink).not.toBeInTheDocument();
  });

  test("renders Instagram link when igmedia is true", () => {
    render(
      <SocialMediaLinks
        fbmedia={false}
        igmedia={true}
        ighref="https://www.instagram.com"
        lnmedia={false}
        pmedia={false}
        xmedia={false}
      />
    );

    const igLink = screen.getByRole("link", { name: /instagram/i });
    expect(igLink).toBeInTheDocument();
    expect(igLink).toHaveAttribute("href", "https://www.instagram.com");
  });

  test("does not render Instagram link when igmedia is false", () => {
    render(
      <SocialMediaLinks
        fbmedia={false}
        igmedia={false}
        lnmedia={false}
        pmedia={false}
        xmedia={false}
      />
    );

    const igLink = screen.queryByRole("link", { name: /instagram/i });
    expect(igLink).not.toBeInTheDocument();
  });

  test("renders LinkedIn link when lnmedia is true", () => {
    render(
      <SocialMediaLinks
        fbmedia={false}
        igmedia={false}
        lnmedia={true}
        lnhref="https://www.linkedin.com"
        pmedia={false}
        xmedia={false}
      />
    );

    const lnLink = screen.getByRole("link", { name: /linkedin/i });
    expect(lnLink).toBeInTheDocument();
    expect(lnLink).toHaveAttribute("href", "https://www.linkedin.com");
  });

  test("does not render LinkedIn link when lnmedia is false", () => {
    render(
      <SocialMediaLinks
        fbmedia={false}
        igmedia={false}
        lnmedia={false}
        pmedia={false}
        xmedia={false}
      />
    );

    const lnLink = screen.queryByRole("link", { name: /linkedin/i });
    expect(lnLink).not.toBeInTheDocument();
  });

  test("renders Pinterest link when pmedia is true", () => {
    render(
      <SocialMediaLinks
        fbmedia={false}
        igmedia={false}
        lnmedia={false}
        pmedia={true}
        phref="https://www.pinterest.com"
        xmedia={false}
      />
    );

    const pLink = screen.getByRole("link", { name: /pinterest/i });
    expect(pLink).toBeInTheDocument();
    expect(pLink).toHaveAttribute("href", "https://www.pinterest.com");
  });

  test("does not render Pinterest link when pmedia is false", () => {
    render(
      <SocialMediaLinks
        fbmedia={false}
        igmedia={false}
        lnmedia={false}
        pmedia={false}
        xmedia={false}
      />
    );

    const pLink = screen.queryByRole("link", { name: /pinterest/i });
    expect(pLink).not.toBeInTheDocument();
  });

  test("renders Twitter link when xmedia is true", () => {
    render(
      <SocialMediaLinks
        fbmedia={false}
        igmedia={false}
        lnmedia={false}
        pmedia={false}
        xmedia={true}
        xhref="https://www.twitter.com"
      />
    );

    const xLink = screen.getByRole("link", { name: /twitter/i });
    expect(xLink).toBeInTheDocument();
    expect(xLink).toHaveAttribute("href", "https://www.twitter.com");
  });

  test("does not render Twitter link when xmedia is false", () => {
    render(
      <SocialMediaLinks
        fbmedia={false}
        igmedia={false}
        lnmedia={false}
        pmedia={false}
        xmedia={false}
      />
    );

    const xLink = screen.queryByRole("link", { name: /twitter/i });
    expect(xLink).not.toBeInTheDocument();
  });
});
