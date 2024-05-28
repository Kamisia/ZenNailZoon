import React from "react";
import { render, screen } from "@testing-library/react";
import BusinessCard from "../BusinessCard";
import "@testing-library/jest-dom";

// Mock SocialMediaLinks component
jest.mock("../SocialMediaLinks", () => () => (
  <div data-testid="social-media-links"></div>
));

describe("BusinessCard component", () => {
  test("renders the BusinessCard with valid phone number and email", () => {
    render(
      <BusinessCard
        number="123456789"
        mailAddress="test@example.com"
        text="Test Business"
      />
    );

    expect(screen.getByText("Test Business")).toBeInTheDocument();
    expect(screen.getByText("123-456-789")).toBeInTheDocument();
    expect(screen.getByText("test@example.com")).toBeInTheDocument();
    expect(screen.getByTestId("social-media-links")).toBeInTheDocument();
  });

  test("throws error with invalid phone number", () => {
    const invalidPhoneNumber = () => {
      render(
        <BusinessCard
          number="12345678"
          mailAddress="test@example.com"
          text="Test Business"
        />
      );
    };
    expect(invalidPhoneNumber).toThrow(
      "Invalid phone number. It must consist of exactly 9 digits."
    );
  });

  test("throws error with invalid email address", () => {
    const invalidEmailAddress = () => {
      render(
        <BusinessCard
          number="123456789"
          mailAddress="invalid-email"
          text="Test Business"
        />
      );
    };
    expect(invalidEmailAddress).toThrow("Invalid email address. ");
  });

  test("formats phone number correctly", () => {
    render(
      <BusinessCard
        number="987654321"
        mailAddress="test@example.com"
        text="Test Business"
      />
    );
    expect(screen.getByText("987-654-321")).toBeInTheDocument();
  });

  test("renders social media links correctly", () => {
    render(
      <BusinessCard
        number="123456789"
        mailAddress="test@example.com"
        text="Test Business"
      />
    );
    expect(screen.getByTestId("social-media-links")).toBeInTheDocument();
  });
});
