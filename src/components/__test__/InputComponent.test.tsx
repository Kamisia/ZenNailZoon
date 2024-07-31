import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputComponent from "../atoms/InputComponent";
import { useForm, UseFormRegister } from "react-hook-form";

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(),
}));

describe("InputComponent", () => {
  test("renders input with correct type and placeholder", () => {
    render(
      <InputComponent type="text" name="testInput" placeholder="Enter text" />
    );
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  test("calls register function from react-hook-form", () => {
    const mockRegister = jest.fn();
    (useForm as jest.Mock).mockReturnValue({
      register: mockRegister,
    });

    render(
      <InputComponent
        type="email"
        name="emailInput"
        register={mockRegister}
        validation={{ required: "Email is required" }}
      />
    );

    expect(mockRegister).toHaveBeenCalledWith("emailInput", {
      required: "Email is required",
    });
  });

  test("calls onChange event handler when input value changes", () => {
    const handleChange = jest.fn();

    render(
      <InputComponent
        type="text"
        name="testInput"
        onChange={handleChange}
        placeholder="Enter text"
      />
    );

    const input = screen.getByPlaceholderText("Enter text");
    fireEvent.change(input, { target: { value: "new value" } });

    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: "new value",
        }),
      })
    );
  });

  test("does not apply register prop when not provided", () => {
    const { container } = render(
      <InputComponent type="text" name="testInput" placeholder="Enter text" />
    );

    const input = container.querySelector("input");
    expect(input).toHaveAttribute("name", "testInput");
  });

  test("applies custom className", () => {
    render(
      <InputComponent
        type="text"
        name="testInput"
        placeholder="Enter text"
        className="custom-class"
      />
    );

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveClass("custom-class");
  });
});
