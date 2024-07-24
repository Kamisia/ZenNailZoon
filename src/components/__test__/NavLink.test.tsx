import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavLink from "../atoms/NavLink";

describe("NavLink", () => {
  test("renders with the correct label and href", () => {
    const href = "https://example.com";
    const label = "Example";

    render(<NavLink href={href} label={label} />);

    const linkElement = screen.getByRole("link", { name: label });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", href);
  });

  test("applies correct classes", () => {
    const href = "https://example.com";
    const label = "Example";

    render(<NavLink href={href} label={label} />);

    const linkElement = screen.getByRole("link", { name: label });
    expect(linkElement).toHaveClass("hover:text-rose-200");
    expect(linkElement).toHaveClass("ease-in-out");
    expect(linkElement).toHaveClass("duration-300");
    expect(linkElement).toHaveClass("uppercase");
    expect(linkElement).toHaveClass("tracking-wide");
    expect(linkElement).toHaveClass("block");
  });

  test("finds the link role correctly", () => {
    const href = "https://example.com";
    const label = "Example";

    render(<NavLink href={href} label={label} />);

    const linkElement = screen.getByRole("link", { name: label });
    expect(linkElement).toBeInTheDocument();
  });
});
