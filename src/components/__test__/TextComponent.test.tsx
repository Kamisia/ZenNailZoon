import React from "react";
import { render, screen } from "@testing-library/react";
import TextComponent from "../TextComponent";
import "@testing-library/jest-dom";
describe("TextComponent", () => {
  it("renders the text passed as prop", () => {
    const text = "test text";
    render(<TextComponent text={text} />);
    const renderedText = screen.getByText(text);
    expect(renderedText).toBeInTheDocument();
  });
});
