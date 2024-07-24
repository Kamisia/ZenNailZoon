import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonComponent from "../atoms/ButtonComponent";

describe("ButtonComponent", () => {
  it("renders the button with the provided text", () => {
    const mockOnClick = jest.fn();
    const buttonText = "Click Me";

    render(<ButtonComponent text={buttonText} onClick={mockOnClick} />);

    expect(
      screen.getByRole("button", { name: buttonText })
    ).toBeInTheDocument();
  });

  it("calls the onClick function when the button is clicked", () => {
    const mockOnClick = jest.fn();
    const buttonText = "Click Me";

    render(<ButtonComponent text={buttonText} onClick={mockOnClick} />);

    fireEvent.click(screen.getByRole("button", { name: buttonText }));

    expect(mockOnClick).toHaveBeenCalled();
  });
});
