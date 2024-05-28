import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BusinessCard from "../BusinessCard";

// Mock data
const validPhoneNumber = "123456789";
const formattedPhoneNumber = "123-456-789";
const invalidPhoneNumber = "12345";
const validEmail = "test@example.com";
const invalidEmail = "invalid-email";
const text = "Booking Now!";

describe("BusinessCard component", () => {
  test("renders correctly with valid props", () => {
    render(
      <BusinessCard
        number={validPhoneNumber}
        mailAddress={validEmail}
        text={text}
      />
    );

    expect(screen.getByText(formattedPhoneNumber)).toBeInTheDocument();
    expect(screen.getByText(validEmail)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("throws error with invalid phone number", () => {
    const renderWithInvalidPhone = () => {
      render(
        <BusinessCard
          number={invalidPhoneNumber}
          mailAddress={validEmail}
          text={text}
        />
      );
    };

    expect(renderWithInvalidPhone).toThrow(
      "Invalid phone number. It must consist of exactly 9 digits."
    );
  });

  test("throws error with invalid email address", () => {
    const renderWithInvalidEmail = () => {
      render(
        <BusinessCard
          number={validPhoneNumber}
          mailAddress={invalidEmail}
          text={text}
        />
      );
    };

    expect(renderWithInvalidEmail).toThrow("Invalid email address.");
  });

  test("throws error with both invalid phone number and email address", () => {
    const renderWithBothInvalid = () => {
      render(
        <BusinessCard
          number={invalidPhoneNumber}
          mailAddress={invalidEmail}
          text={text}
        />
      );
    };

    expect(renderWithBothInvalid).toThrow(
      "Invalid phone number. It must consist of exactly 9 digits."
    );
  });
});
