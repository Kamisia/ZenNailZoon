import React from "react";
import { render, screen } from "@testing-library/react";
import LogoComponent from "../LogoComponent";
import "@testing-library/jest-dom";
describe("LogoComponent", () => {
  it("renders the text passed as prop", () => {
    const text = "test text";
    render(<LogoComponent text={text} />);
    const renderedText = screen.getByText(text);
    expect(renderedText).toBeInTheDocument();
  });
});
