import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutMeComponent from "../molecules/AboutMeComponent";

describe("AboutMeComponent", () => {
  const mockProps = {
    text: "This is a sample text for the About Me section.",
    title: "About Me",
    image: "https://via.placeholder.com/150",
  };

  it("renders without crashing", () => {
    render(<AboutMeComponent {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("displays the title", () => {
    render(<AboutMeComponent {...mockProps} />);
    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(mockProps.title);
  });

  it("displays the image with the correct src", () => {
    render(<AboutMeComponent {...mockProps} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockProps.image);
  });

  it("displays the text content", () => {
    render(<AboutMeComponent {...mockProps} />);
    const textElement = screen.getByText(mockProps.text);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(mockProps.text);
  });

  it("has the correct class names", () => {
    render(<AboutMeComponent {...mockProps} />);

    const container = screen.getByText(mockProps.text).closest("div");
    expect(container).toHaveClass(
      "flex flex-col sm:max-w-fit md:w-1/2 m-0 p-0 md:mr-3 rounded-lg bg-rose-200"
    );

    const imageContainer = container?.querySelector("div > img");
    expect(imageContainer).toHaveClass("w-80 rounded-lg");

    const titleElement = container?.querySelector("h1");
    expect(titleElement).toHaveClass("text-xl mb-5 p-3");

    const articleElement = container?.querySelector("article");
    expect(articleElement).toHaveClass("p-3");
  });
});
