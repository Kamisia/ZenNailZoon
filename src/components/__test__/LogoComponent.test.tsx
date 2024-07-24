import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LogoComponent from "../atoms/LogoComponent";

describe("LogoComponent", () => {
  test("renders with the correct text", () => {
    const text = "My Logo";
    render(<LogoComponent text={text} />);
    const logoElement = screen.getByText(text);
    expect(logoElement).toBeInTheDocument();
  });

  test("applies correct classes", () => {
    const text = "My Logo";
    render(<LogoComponent text={text} />);
    const logoElement = screen.getByText(text);
    expect(logoElement).toHaveClass("text-2xl");
    expect(logoElement).toHaveClass("font-light");
    expect(logoElement).toHaveClass("logo-font");
  });

  test("is within a flex container", () => {
    const text = "My Logo";
    const { container } = render(<LogoComponent text={text} />);
    const divElement = container.querySelector("div");
    expect(divElement).toHaveClass("flex");
    expect(divElement).toHaveClass("items-center");
  });
});
