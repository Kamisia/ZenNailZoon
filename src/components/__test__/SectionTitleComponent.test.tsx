import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionTitleComponent, {
  SectionTitleComponentProps,
} from "../molecules/SectionTitleComponent";

const mockProps: SectionTitleComponentProps = {
  text: "Sample Section Title",
};

describe("SectionTitleComponent", () => {
  it("renders without crashing", () => {
    render(<SectionTitleComponent {...mockProps} />);
    const headingElement = screen.getByText(mockProps.text);
    expect(headingElement).toBeInTheDocument();
  });

  it("displays the correct text", () => {
    render(<SectionTitleComponent {...mockProps} />);
    const headingElement = screen.getByText(mockProps.text);
    expect(headingElement).toHaveTextContent(mockProps.text);
  });

  it("applies the default class names correctly", () => {
    render(<SectionTitleComponent {...mockProps} />);
    const headingElement = screen.getByText(mockProps.text);
    expect(headingElement).toHaveClass(
      "text-rose-800 uppercase text-2xl mt-2 font-medium"
    );
  });

  it("applies custom text color and size", () => {
    const customProps: SectionTitleComponentProps = {
      text: "Custom Section Title",
      textColor: "blue-500",
      textSize: "3xl",
    };
    render(<SectionTitleComponent {...customProps} />);
    const headingElement = screen.getByText(customProps.text);
    expect(headingElement).toHaveClass(
      "text-blue-500 uppercase text-3xl mt-2 font-medium"
    );
  });

  it("applies the correct class names to the hr element", () => {
    render(<SectionTitleComponent {...mockProps} />);
    const hrElement = screen.getByRole("separator");
    expect(hrElement).toHaveClass("border-rose-800 w-1/2 mr-auto ml-auto");
  });

  it("applies custom text color to the hr element", () => {
    const customProps: SectionTitleComponentProps = {
      text: "Custom Section Title",
      textColor: "blue-500",
    };
    render(<SectionTitleComponent {...customProps} />);
    const hrElement = screen.getByRole("separator");
    expect(hrElement).toHaveClass("border-blue-500 w-1/2 mr-auto ml-auto");
  });
});
