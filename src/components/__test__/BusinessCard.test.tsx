import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BusinessCard from "../BusinessCard";
import SocialMediaLinks from "../SocialMediaLinks";

// Mockowanie komponentu SocialMediaLinks
jest.mock("../SocialMediaLinks", () =>
  jest.fn(() => <div>Mocked SocialMediaLinks</div>)
);

describe("BusinessCard Component", () => {
  const validProps = {
    number: "123456789",
    mailAddress: "test@example.com",
    text: "Business Card",
    localAddress: true,
    address: "123 Main St",
    city: "Anytown",
  };

  it("should render without crashing", () => {
    render(<BusinessCard {...validProps} />);
    expect(screen.getByText(/business card/i)).toBeInTheDocument();
    expect(screen.getByText(/123 main st/i)).toBeInTheDocument();
    expect(screen.getByText(/anytown/i)).toBeInTheDocument();
    expect(screen.getByText("123-456-789")).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
    expect(screen.getByText("Mocked SocialMediaLinks")).toBeInTheDocument();
  });

  it("should throw error for invalid phone number", () => {
    const invalidPhoneNumberProps = { ...validProps, number: "12345" };
    expect(() => render(<BusinessCard {...invalidPhoneNumberProps} />)).toThrow(
      "Invalid phone number. It must consist of exactly 9 digits."
    );
  });

  it("should throw error for invalid email address", () => {
    const invalidEmailProps = { ...validProps, mailAddress: "invalidemail" };
    expect(() => render(<BusinessCard {...invalidEmailProps} />)).toThrow(
      "Invalid email address. "
    );
  });

  it("should render without local address when localAddress is false", () => {
    const propsWithoutLocalAddress = { ...validProps, localAddress: false };
    render(<BusinessCard {...propsWithoutLocalAddress} />);
    expect(screen.queryByText(/123 main st/i)).toBeNull();
    expect(screen.queryByText(/anytown/i)).toBeNull();
  });
});
