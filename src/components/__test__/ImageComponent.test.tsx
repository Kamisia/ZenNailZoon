import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageComponent from "../atoms/ImageComponent";

describe("ImageComponent", () => {
  test("renders image with background", () => {
    const testUrl = "https://example.com/test-image.jpg";
    render(<ImageComponent url={testUrl} />);
    const container = screen.getByTestId("image-container");
    expect(container).toHaveStyle(`background-image: url(${testUrl})`);
  });

  test("displays author when provided", () => {
    const testUrl = "https://example.com/test-image.jpg";
    const testAuthor = "John Doe";
    render(<ImageComponent url={testUrl} author={testAuthor} />);
    const authorText = screen.getByText(`By ${testAuthor}`);
    expect(authorText).toBeInTheDocument();
  });

  test("does not display author when not provided", () => {
    const testUrl = "https://example.com/test-image.jpg";
    render(<ImageComponent url={testUrl} />);
    const authorText = screen.queryByText(/By /);
    expect(authorText).not.toBeInTheDocument();
  });

  test("image component has correct styling", () => {
    const testUrl = "https://example.com/test-image.jpg";
    const { container } = render(<ImageComponent url={testUrl} />);
    const divElement = container.querySelector("div");
    expect(divElement).toHaveClass("flex");
    expect(divElement).toHaveClass("justify-center");
    expect(divElement).toHaveClass("bg-container");
    expect(divElement).toHaveClass("bg-no-repeat");
    expect(divElement).toHaveClass("bg-center");
    expect(divElement).toHaveStyle(`background-image: url(${testUrl})`);
  });
});
