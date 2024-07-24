import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavLink from "../atoms/NavLink";

describe("NavLink component", () => {
  test("renders correctly with given props", () => {
    const href = "https://example.com";
    const label = "Example";

    render(<NavLink href={href} label={label} />);

    const linkElement = screen.getByText(label);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", href);
  });
});
