import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BusinessCard from "../organisms/BusinessCard";

describe("BusinessCard", () => {
  const validPhoneNumber = "123456789";
  const validEmail = "test@example.com";
  const text = "Business Name";
  const address = "123 Main St";
  const city = "Anytown";

  it("renders without crashing with valid props", () => {
    render(
      <BusinessCard
        number={validPhoneNumber}
        mailAddress={validEmail}
        text={text}
        address={address}
        city={city}
      />
    );

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText("123-456-789")).toBeInTheDocument();
    expect(screen.getByText(validEmail)).toBeInTheDocument();
    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.getByText(city)).toBeInTheDocument();
  });

  it("throws an error for invalid phone number", () => {
    const invalidPhoneNumber = "12345";
    const originalError = console.error;
    console.error = jest.fn();

    expect(() =>
      render(
        <BusinessCard
          number={invalidPhoneNumber}
          mailAddress={validEmail}
          text={text}
          address={address}
          city={city}
        />
      )
    ).toThrow("Invalid phone number. It must consist of exactly 9 digits.");

    console.error = originalError;
  });

  it("throws an error for invalid email address", () => {
    const invalidEmail = "invalidemail";
    const originalError = console.error;
    console.error = jest.fn();

    expect(() =>
      render(
        <BusinessCard
          number={validPhoneNumber}
          mailAddress={invalidEmail}
          text={text}
          address={address}
          city={city}
        />
      )
    ).toThrow("Invalid email address. ");

    console.error = originalError;
  });

  it("does not render address and city when not provided", () => {
    render(
      <BusinessCard
        number={validPhoneNumber}
        mailAddress={validEmail}
        text={text}
      />
    );

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText("123-456-789")).toBeInTheDocument();
    expect(screen.getByText(validEmail)).toBeInTheDocument();
    expect(screen.queryByText(address)).not.toBeInTheDocument();
    expect(screen.queryByText(city)).not.toBeInTheDocument();
  });

  it("renders address without city when city is not provided", () => {
    render(
      <BusinessCard
        number={validPhoneNumber}
        mailAddress={validEmail}
        text={text}
        address={address}
      />
    );

    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.queryByText(city)).not.toBeInTheDocument();
  });

  it("renders city without address when address is not provided", () => {
    render(
      <BusinessCard
        number={validPhoneNumber}
        mailAddress={validEmail}
        text={text}
        city={city}
      />
    );

    expect(screen.getByText(city)).toBeInTheDocument();
    expect(screen.queryByText(address)).not.toBeInTheDocument();
  });
});
