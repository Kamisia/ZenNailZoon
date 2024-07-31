import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonComponent from "../atoms/ButtonComponent";

describe("ButtonComponent", () => {
  test("renders with correct text", () => {
    render(<ButtonComponent text="Click Me" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<ButtonComponent text="Click Me" onClick={handleClick} />);
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("has correct styles", () => {
    const { container } = render(
      <ButtonComponent text="Click Me" onClick={() => {}} />
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("bg-gray-950");
    expect(button).toHaveClass("text-amber-50");
    expect(button).toHaveClass("hover:text-red-200");
  });
});
