import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfoCard, { InfoCardProps } from "../molecules/InfoCard";

describe("InfoCard", () => {
  const mockProps: InfoCardProps = {
    title: "Sample Title",
    text: "This is a sample text for the InfoCard component.",
    image: "https://via.placeholder.com/150",
  };

  it("renders without crashing", () => {
    render(<InfoCard {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("displays the title", () => {
    render(<InfoCard {...mockProps} />);
    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(mockProps.title);
  });

  it("displays the text content", () => {
    render(<InfoCard {...mockProps} />);
    const textElement = screen.getByText(mockProps.text);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(mockProps.text);
  });

  it("displays the image with the correct src", () => {
    render(<InfoCard {...mockProps} />);
    const imageElement = screen.getByAltText("");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockProps.image);
  });

  it("has the correct class names for the container", () => {
    render(<InfoCard {...mockProps} />);
    const container = screen.getByTestId("info-card-container");
    expect(container).toHaveClass(
      "w-screen max-w-screen-lg mb-5 justify-center pr-3 pl-3"
    );
  });

  it("has the correct class names for the title", () => {
    render(<InfoCard {...mockProps} />);
    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toHaveClass(
      "pb-2 m-auto text-center text-2xl text-rose-700 capitalize font-light italic"
    );
  });

  it("has the correct class names for the text", () => {
    render(<InfoCard {...mockProps} />);
    const textElement = screen.getByText(mockProps.text);
    expect(textElement).toHaveClass("pb-2 pr-2");
  });

  it("has the correct class names for the image", () => {
    render(<InfoCard {...mockProps} />);
    const imageElement = screen.getByAltText("");
    expect(imageElement).toHaveClass("rounded-lg w-60 h-60");
  });
});
