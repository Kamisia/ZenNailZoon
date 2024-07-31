import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorMessage from "../atoms/ErrorMessage";

describe("ErrorMessage Component", () => {
  test("renders with the correct message", () => {
    const testMessage = "This is an error message";
    render(<ErrorMessage message={testMessage} />);
    const messageElement = screen.getByText(testMessage);
    expect(messageElement).toBeInTheDocument();
  });

  test("has correct styling", () => {
    const { container } = render(<ErrorMessage message="Test" />);
    const paragraph = container.querySelector("p");
    expect(paragraph).toHaveClass("text-amber-50");
    expect(paragraph).toHaveClass("text-sm");
    expect(paragraph).toHaveClass("bg-amber-500");
    expect(paragraph).toHaveClass("bg-opacity-60");
  });
});
